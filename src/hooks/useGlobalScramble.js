import { useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const SPEED = 60; // Slightly slower for better effect

// Elements we can search within for text
const SEARCHABLE_TAGS = new Set([
  'H1','H2','H3','H4','H5','H6','P','LI','TD','TH','SPAN','A','STRONG','EM','B','I','LABEL','DIV'
]);

// Classes/attributes that should never be scrambled
const SKIP_CLASSES = ['nav-badge','logo-text','step-number','badge','fill','bar','nav-highlight','logo-mark'];

function shouldSkip(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
  if (el.closest?.('[data-no-scramble]')) return true;
  if (['INPUT','TEXTAREA','CODE','PRE','SELECT','BUTTON','SVG','PATH','IMG','BR'].includes(el.tagName)) return true;
  for (const cls of SKIP_CLASSES) {
    if (el.classList?.contains(cls)) return true;
    if (el.closest?.('.' + cls)) return true;
  }
  return false;
}

// Check if an element is a "scramble container" (has been wrapped)
function isWrapped(el) {
  return el.dataset?.scrambleWrapped === 'true';
}

// Wrap text nodes within an element into .scramble-word spans
function wrapWords(el) {
  if (isWrapped(el)) return;
  
  // We only want to wrap elements that are mostly text or have simple inline children
  // But to be safe and simple, let's just wrap text nodes that are direct children of this element
  const childNodes = Array.from(el.childNodes);
  let hasWrapped = false;

  childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
      const text = node.textContent;
      const parts = text.split(/(\s+)/);
      const fragment = document.createDocumentFragment();
      
      parts.forEach(part => {
        if (/^\s+$/.test(part)) {
          fragment.appendChild(document.createTextNode(part));
        } else {
          const span = document.createElement('span');
          span.className = 'scramble-word';
          span.textContent = part;
          fragment.appendChild(span);
        }
      });
      
      el.replaceChild(fragment, node);
      hasWrapped = true;
    }
  });

  if (hasWrapped) {
    el.dataset.scrambleWrapped = 'true';
  }
}

// Unwrap words back into text nodes
function unwrapWords(el) {
  if (!isWrapped(el)) return;

  const childNodes = Array.from(el.childNodes);
  childNodes.forEach(node => {
    if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('scramble-word')) {
      const textNode = document.createTextNode(node.textContent);
      el.replaceChild(textNode, node);
    }
  });
  
  // Clean up adjacent text nodes (normalize)
  el.normalize();
  delete el.dataset.scrambleWrapped;
}

export function useGlobalScramble() {
  useEffect(() => {
    let activeWord = null;
    let intervalId = null;
    let revealedCount = 0;
    let originalWordText = '';
    let activeContainer = null;

    function stopScramble() {
      if (intervalId) { clearInterval(intervalId); intervalId = null; }
      if (activeWord) activeWord.textContent = originalWordText;
      activeWord = null;
      originalWordText = '';
      revealedCount = 0;
    }

    function startScramble(wordEl) {
      if (wordEl === activeWord) return;
      stopScramble();

      activeWord = wordEl;
      originalWordText = wordEl.textContent;
      revealedCount = 0;

      intervalId = setInterval(() => {
        if (!activeWord) { stopScramble(); return; }

        const text = originalWordText;
        let result = '';

        for (let i = 0; i < text.length; i++) {
          const ch = text[i];
          if (/[^a-zA-Z0-9]/.test(ch)) {
            result += ch;
          } else if (i < revealedCount) {
            result += ch;
          } else if (i === revealedCount) {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          } else {
            result += ch;
          }
        }

        activeWord.textContent = result;

        if (revealedCount < text.length) {
          revealedCount++;
        } else {
          clearInterval(intervalId);
          intervalId = null;
          activeWord.textContent = text;
          activeWord = null;
        }
      }, SPEED);
    }

    function onMouseOver(e) {
      const target = e.target;
      
      // If we're hovering a word, scramble it
      if (target.classList?.contains('scramble-word')) {
        startScramble(target);
        return;
      }

      // Find the nearest wrappable container
      let container = target;
      while (container && container !== document.body) {
        if (shouldSkip(container)) return;
        if (SEARCHABLE_TAGS.has(container.tagName)) {
           break;
        }
        container = container.parentElement;
      }

      if (!container || container === document.body) return;

      if (activeContainer !== container) {
        if (activeContainer) unwrapWords(activeContainer);
        activeContainer = container;
        wrapWords(container);
      }
    }

    function onMouseOut(e) {
      const related = e.relatedTarget;
      if (!activeContainer) return;

      if (!related || !activeContainer.contains(related)) {
        stopScramble();
        unwrapWords(activeContainer);
        activeContainer = null;
      }
    }

    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      if (activeContainer) unwrapWords(activeContainer);
      stopScramble();
    };
  }, []);
}
