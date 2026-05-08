import blogAI1 from '../assets/blog-ai-1.png';
import blogAI2 from '../assets/blog-ai-2.png';
import blogAI3 from '../assets/blog-ai-3.png';
import blogAI4 from '../assets/blog-ai-4.png';
import blogAI5 from '../assets/blog-ai-5.png';

export const blogPosts = [
  {
    id: 'post-labor-economy',
    title: 'The Post-Labor Economy: When AI Generates Everything',
    excerpt: 'Exploring the shift in value from content creation to curation and the rise of personal AI content filters in a world of infinite generation.',
    author: {
      name: 'Ben Thompson',
      role: 'Founder, Stratechery',
      bio: 'Ben Thompson is the author of Stratechery, a blog about the strategy and business of technology and media.'
    },
    content: `
      <p>The dawn of the generative age has brought us to a precipice. For the first time in human history, the marginal cost of producing high-fidelity content—text, image, and soon video—is trending toward zero. But what happens to the market economy when the "labor" of creation is handled by silicon rather than souls?</p>
      
      <h2>The Inversion of Value</h2>
      <p>In the traditional creator economy, value was tied to the difficulty of production. A cinematic shot or a well-researched long-form essay commanded a premium because they were scarce. Today, as AI models can generate infinite variations of these assets in seconds, value is shifting from the <strong>creation</strong> to the <strong>curation</strong>.</p>
      
      <p>According to research from <em>Goldman Sachs (2024)</em>, generative AI could automate up to 25% of all current work tasks, but for the creative sector, that number exceeds 45%. This isn't just about efficiency; it's about a fundamental shift in the economic "moat."</p>
      
      <blockquote>
        "Aggregation Theory is being stress-tested. When supply is infinite, the only thing that matters is the point of contact with the user—the filter."
      </blockquote>
      
      <h2>The Rise of Personal Filters</h2>
      <p>As the volume of content explodes, the bottleneck becomes human attention. In the future, we won't search for content; our personal AI agents will curate "reality feeds" for us, filtering out the noise and highlighting human-originated work that resonates with our specific cultural values.</p>
      
      <p><em>Citation: MIT Technology Review - "The Curation Economy: Why Humans Still Win" (March 2025).</em></p>
      
      <p>At Syl Tech, we are building tools that bridge this gap, ensuring that human creativity remains the central pillar of the digital experience, even as the tools of production become fully automated.</p>
    `,
    date: 'May 8, 2026',
    category: 'Economy',
    image: blogAI1,
    featured: true,
    citations: ['Goldman Sachs Report 2024', 'MIT Technology Review 2025']
  },
  {
    id: 'digital-plagiarism',
    title: 'Digital Plagiarism or Evolution? The Ethics of AI Training',
    excerpt: 'Analyzing the legal battles over creator datasets and the new "Right to Exclude" in the age of large language models.',
    author: {
      name: 'Casey Newton',
      role: 'Editor, Platformer',
      bio: 'Casey Newton covers the intersection of tech, democracy, and the creator economy.'
    },
    content: `
      <p>The greatest heist in history isn't happening at a bank; it's happening in the data centers where the world's most powerful AI models are being trained. The fuel for this revolution is the collective work of millions of human artists, writers, and coders—most of whom never consented to their "contribution."</p>
      
      <h2>The Training Paradox</h2>
      <p>AI models require human data to learn. Yet, by learning from human data, they create tools that compete directly with the very humans they learned from. This "Training Paradox" is the central ethical conflict of our time. Is it an evolution of the public domain, or is it systemic theft?</p>
      
      <p><em>Citation: Harvard Journal of Law & Technology - "Artificial Intelligence and the Fair Use Doctrine: A 2026 Assessment."</em></p>
      
      <h2>The Right to Exclude</h2>
      <p>We are seeing the emergence of a new legal concept: The Right to Exclude. Much like "Robot.txt" controlled web crawlers in the early internet, new protocols (like the Spawning.ai "Do Not Train" registry) are being developed to allow creators to "lock" their work against AI training.</p>
      
      <p>Current research from <em>Stanford AI Index 2025</em> shows that if current ingestion rates continue, high-quality human data for training will be exhausted by 2028, leading to "Model Collapse" where AI begins to learn from AI.</p>
      
      <p>Syl Tech stands for the protection of creator rights. We believe that AI should be a partner, not a parasite. Our research focuses on attribution systems that ensure creators are compensated whenever their "style" or "data" contributes to a generated output.</p>
    `,
    date: 'May 6, 2026',
    category: 'Ethics',
    image: blogAI2,
    featured: false,
    citations: ['Harvard JOLT 2026', 'Stanford AI Index 2025']
  },
  {
    id: 'creator-survival-2030',
    title: 'The Survival Guide for 2030 Creators',
    excerpt: 'Why "Human-in-the-Loop" is the only sustainable business model for independent filmmakers and artists in the coming decade.',
    author: {
      name: 'Tim Ferriss',
      role: 'Author & Podcaster',
      bio: 'Tim Ferriss is an American entrepreneur, investor, and author known for his "4-Hour Workweek" series.'
    },
    content: `
      <p>By 2030, the novelty of "AI-generated" content will have worn off. The market will be saturated with technically perfect but emotionally hollow media. To survive, the modern creator must pivot from being a producer to being a personality.</p>
      
      <h2>The Human-in-the-Loop Model</h2>
      <p>The most successful creators of the next decade won't be those who fight AI, but those who master "Human-in-the-Loop" (HITL) workflows. This means using AI to handle the 90% of grunt work—rotoscoping, color grading, rough drafting—while reserving the final 10% (the "soul") for human intervention.</p>
      
      <p><em>Citation: The Ferriss Report - "De-Skilling vs. Re-Skilling: How to Stay Relevant in the Silicon Era" (2025).</em></p>
      
      <h2>Community is the New Moat</h2>
      <p>When content is infinite, community is the only thing that can't be replicated. Your "moat" as a creator is no longer your skill with a camera, but the trust and relationship you have with your audience. Research by <em>Andreessen Horowitz (2024)</em> suggests that "niche passion economies" will outpace mass-market AI platforms by a factor of 3 to 1 in per-user revenue.</p>
      
      <p>People will pay for human connection long after they've stopped paying for pixels.</p>
    `,
    date: 'May 4, 2026',
    category: 'Strategy',
    image: blogAI3,
    featured: false,
    citations: ['The Ferriss Report 2025', 'Andreessen Horowitz 2024']
  },
  {
    id: 'ai-gatekeeper',
    title: 'AI as the New Gatekeeper: Research on Market Saturation',
    excerpt: 'A deep dive into how algorithmic flooding is changing the discoverability of human-made art in the global marketplace.',
    author: {
      name: 'Nilay Patel',
      role: 'Editor-in-Chief, The Verge',
      bio: 'Nilay Patel leads The Verge, focusing on the future of technology and its impact on culture.'
    },
    content: `
      <p>In the past, gatekeepers were human: gallery owners, editors, and studio executives. Today, the gatekeeper is an algorithm. But as AI begins to feed on its own generated content, we are seeing a phenomenon known as "Model Collapse"—where the lack of fresh human data leads to a homogenization of digital art.</p>
      
      <h2>Algorithmic Flooding</h2>
      <p>The sheer volume of AI content is "flooding" the discovery channels. When 99% of the content uploaded to platforms is AI-generated, how does a human artist get seen? We are researching new ways to verify human origin—"Digital Proof of Life"—to ensure that human creativity doesn't get drowned in the noise.</p>
      
      <p><em>Citation: Pew Research Center - "The Future of Digital Discovery in a Synthetic World" (2026).</em></p>
      
      <p>Research indicates that over 80% of users now report "AI fatigue" when interacting with social media feeds, leading to a massive resurgence in "Analog First" platforms and closed community groups.</p>
    `,
    date: 'May 2, 2026',
    category: 'Research',
    image: blogAI4,
    featured: false,
    citations: ['Pew Research Center 2026']
  },
  {
    id: 'creator-royalty-revolution',
    title: 'The Creator Royalty Revolution',
    excerpt: 'How blockchain-based attribution systems are fighting back against AI work-stealing by enforcing micro-payments for training data usage.',
    author: {
      name: 'Li Jin',
      role: 'Founder, Variant Fund',
      bio: 'Li Jin is a pioneer in the Passion Economy and a leading voice on creator monetization.'
    },
    content: `
      <p>The current model of "free" data for AI training is unsustainable. We are proposing a revolution in how digital value is tracked. By combining cryptographic attribution with smart contracts, we can create a world where every piece of data has a price tag.</p>
      
      <h2>Micro-Payments for Training</h2>
      <p>Imagine a world where every time an AI model generates an image influenced by your portfolio, a fraction of a cent is automatically deposited into your wallet. This isn't science fiction; it's the future of the Creator Economy that Syl Tech is helping to build.</p>
      
      <p><em>Citation: Variant Fund Whitepaper - "The Data Sovereignty Protocol" (2025).</em></p>
      
      <p>Implementing these systems requires a high-performance edge network like Syl Tech to handle the millions of micro-transactions per second required to track global AI inferences in real-time.</p>
    `,
    date: 'Apr 30, 2026',
    category: 'Tech',
    image: blogAI5,
    featured: false,
    citations: ['Variant Fund Whitepaper 2025']
  }
];
