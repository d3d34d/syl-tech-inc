import React, { useState, useEffect, useRef, useCallback } from 'react';

const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export const TextScramble = ({
  children,
  speed = 55,        // Faster: was 120ms
  characterSet = defaultChars,
  className,
  as: Component = 'span',
  triggerOnMount = false,
  onScrambleComplete,
  ...props
}) => {
  const text = typeof children === 'string' ? children : '';
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const revealedRef = useRef(text.length);
  const isHovered = useRef(false);

  const stopEffect = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setDisplayText(text);
    revealedRef.current = text.length;
  }, [text]);

  const startEffect = useCallback(() => {
    revealedRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (!isHovered.current) {
        stopEffect();
        return;
      }

      const revealed = revealedRef.current;
      let result = '';
      for (let i = 0; i < text.length; i++) {
        if (/[^a-zA-Z0-9]/.test(text[i])) {
          result += text[i];
        } else if (i < revealed) {
          result += text[i];
        } else if (i === revealed) {
          result += characterSet[Math.floor(Math.random() * characterSet.length)];
        } else {
          result += text[i];
        }
      }

      setDisplayText(result);

      if (revealed < text.length) {
        revealedRef.current = revealed + 1;
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setDisplayText(text);
        onScrambleComplete?.();
      }
    }, speed);
  }, [text, speed, characterSet, stopEffect, onScrambleComplete]);

  const handleMouseEnter = useCallback(() => {
    isHovered.current = true;
    if (!intervalRef.current) startEffect();
  }, [startEffect]);

  const handleMouseLeave = useCallback(() => {
    isHovered.current = false;
    stopEffect();
  }, [stopEffect]);

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  useEffect(() => {
    if (triggerOnMount && text) {
      isHovered.current = true;
      startEffect();
    }
  }, []);

  return (
    <Component
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
      {...props}
    >
      {displayText}
    </Component>
  );
};

export const ScrambleText = ({ children, ...props }) => {
  if (typeof children !== 'string') return <>{children}</>;
  const words = children.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <TextScramble {...props}>{word}</TextScramble>
          {i < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </>
  );
};
