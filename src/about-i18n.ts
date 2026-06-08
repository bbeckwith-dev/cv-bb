export const aboutContent = {
  en: {
    slug: 'about',
    seo: {
      title: 'Brent Beckwith | Applications and Systems Support Engineer',
      description: 'Applications and systems support engineer and Linux enjoyer. Led five ISP-acquisition migrations (5,000+ domains). Building on a hosting/LAMP and scripting background toward development and implementation work.',
    },
    heading: 'Brent Beckwith',
    manifesto: 'I\'ve spent my career fixing what\'s broken, now I\'m building what\'s next.',
    subtitle: 'Support Engineer · Analyst · AI Practitioner',
    location: 'Madison, Ohio',
    lastUpdated: 'May 2026',
    bio: [
      'Most of my career has been analyst work in enterprise IT support: desktop services, Linux environments, web applications, hosting stacks, and a stretch maintaining internal applications inside a security operations center. I\'ve worked migrations covering thousands of domains across multiple ISP acquisitions, maintained LAMP applications, and written mass customer communications. I earned a Q-Excellence award as a singular recognition out of 600+ employees, and I\'ve held 95%+ customer satisfaction ratings supporting hundreds of business customers. I\'m good at this work and I\'m proud of it.',
      'But I want to do more than maintain and troubleshoot. I\'ve worked through the majority of The Odin Project\'s full-stack JavaScript track, used AI to adapt and extend projects like this portfolio site, and I\'m currently using AI tools daily for development, research, and problem-solving. I\'m not pivoting away from my background, rather, I\'m leveraging and building on top of it.',
      'I\'m looking for roles where that combination matters: development, application support, or AI-adjacent work. Somewhere I can write code, solve problems, and keep learning at a company that values growth and invests in its people.',
    ],
    seeking: 'Open to opportunities in',
    roles: ['Application Support Engineer', 'Linux Systems Administrator', 'Implementation/Migration Engineer', 'Systems Analyst', 'AI Product Support Engineer', 'Application Support Analyst', 'Junior Full-Stack Developer', 'Junior Frontend Developer', 'WordPress Developer / Web Administrator', 'Technical Writer'],
    timelineHeading: 'Experience',
    timeline: [
      { period: '2024–2025', role: 'Desktop Specialist II', company: 'AmTrust Financial Services', desc: 'Microsoft stack support for 6,000+ users globally' },
      { period: '2019–2023', role: 'Security Analyst I → Security Engineer I', company: 'Windstream', desc: 'LAMP maintenance and feature work · Python scripting · large-scale IP analysis (13M)' },
      { period: '2011–2019', role: 'Specialist II', company: 'Windstream', desc: 'Led 5 ISP acquisition migrations, 5,000+ domains, $15K/mo savings' },
      { period: '2004–2011', role: 'Customer Support Engineer', company: 'Norlight / Windstream', desc: 'Q-Excellence award, 800+ business customers, 95%+ satisfaction' },
    ],
    projectsHeading: 'Projects',
    projects: [
      { name: 'whisper-notes', desc: 'CLI tool that transcribes audio recordings into structured markdown using OpenAI Whisper for speech-to-text and Claude\'s streaming API for intelligent formatting. Supports batch processing, multiple model sizes, and outputs clean markdown alongside raw transcriptions.', href: 'https://github.com/bbeckwith-dev/whisper-notes' },
    ],
    certificationsHeading: 'Certifications & Training',
    certifications: [
      { org: 'Cloud', items: ['Microsoft Azure Fundamentals', 'AWS Cloud Practitioner Training'] },
      { org: 'Development', items: ['The Odin Project — Full Stack JavaScript'] },
    ],
    educationHeading: 'Education',
    education: [
      'Associate Degree, Computer Networking Systems — ITT Technical Institute (GPA 3.5)',
    ],
    pressHeading: 'Press',
    press: [],
    communityHeading: 'Community',
    community: [],
    faqHeading: 'Frequently Asked Questions',
    faq: [
      { q: 'What kind of roles are you looking for?', a: 'Application and systems support, Linux administration, and migration/implementation work, plus full-stack or frontend development, WordPress/web administration, AI product support, and technical writing. I want to apply broad systems experience alongside modern AI tools in roles where I can write code, solve problems, and grow, ideally somewhere that actively supports professional development.' },
      { q: 'How do you use AI in your work?', a: 'AI is baked into my daily workflow: research, code generation, debugging, documentation. This site\'s chatbot runs on Claude\'s API with contextual retrieval and production observability. I treat AI as a force multiplier for the systems and scripting experience I already have.' },
      { q: 'Tell me about this site', a: 'I adapted cv-santiago, an open-source portfolio by Santiago Fernández de Valderrama, because it had a clean design and a modern stack (React 19, TypeScript, Vite, Claude API). I wanted to study how a well-built modern site works under the hood, not just read about it. I customized the content, prompt engineering, security hardening, and stripped the bilingual system down to English-only. Adapting a real codebase taught me more than a tutorial ever would.' },
      { q: 'What sets you apart?', a: 'Data investigation. I have written scripts to cross-reference malicious IPs against 13 million Windstream addresses, audited customer data across 60+ servers during five ISP acquisitions, and built a domain lookup process that saved $15,000/month. I know how to work with messy, large-scale data and pull something actionable out of it. That kind of pattern recognition applies everywhere, whether it is systems investigation, migration planning, or support troubleshooting.' },
    ],
    connectHeading: 'Connect',
    email: 'brent.beckwith@gmail.com',
  },
} as const
