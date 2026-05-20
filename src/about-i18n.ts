export type AboutLang = 'es' | 'en'

export const aboutContent = {
  en: {
    slug: 'about',
    altSlug: 'about',
    seo: {
      title: 'Brent Beckwith | IT Professional & Web Developer',
      description: 'IT support professional learning full-stack development and AI production workflows. Background in Linux administration, LAMP stack maintenance, and security operations. Building toward development, application support, and technical writing roles.',
    },
    heading: 'Brent Beckwith',
    manifesto: 'I\'ve spent my career fixing what\'s broken, now I\'m learning to build what\'s next.',
    subtitle: 'Support Engineer · Analyst · AI Practitioner',
    location: 'Madison, Ohio',
    lastUpdated: 'May 2026',
    bio: [
      'Most of my career has been in enterprise IT support: desktop services, Linux environments, hosting stacks, and a small stretch in security operations. I\'ve worked migrations covering thousands of domains across multiple ISP acquisitions, maintained LAMP applications, and written mass customer communications. I earned a Q-Excellence award as a singular recognition out of 600+ employees, and I\'ve held 95%+ customer satisfaction ratings supporting hundreds of business customers. I\'m good at this work and I\'m proud of it.',
      'But I want to do more than maintain and troubleshoot. I\'ve worked through the majority of The Odin Project\'s full-stack JavaScript track, used AI to build projects like this portfolio site, and I\'m currently using AI tools daily for development, research, and problem-solving. I\'m not pivoting away from my background, rather, I\'m leveraging and building on top of it.',
      'I\'m looking for roles where that combination matters: development, application support, or AI-adjacent work. Somewhere I can write code, solve problems, and keep learning.',
    ],
    seeking: 'Open to opportunities in',
    roles: ['Junior Full-Stack Developer', 'Junior Frontend Developer', 'WordPress Developer / Web Administrator', 'AI Product Support Engineer', 'Application Support Analyst', 'Technical Writer', 'Junior Data Analyst'],
    timelineHeading: 'Experience',
    timeline: [
      { period: '2024–2025', role: 'Desktop Specialist II', company: 'AmTrust Financial Services', desc: 'Microsoft stack support for 6,000+ users globally' },
      { period: '2019–2023', role: 'Engineer I / Security Analyst I (CSOC)', company: 'Windstream', desc: 'LAMP dev, Python security automation, malicious IP analysis across 13M IPs' },
      { period: '2011–2019', role: 'Specialist II', company: 'Windstream', desc: 'Led 5 ISP acquisition migrations, 5,000+ domains, $15K/mo savings' },
      { period: '2007–2011', role: 'Customer Support Engineer', company: 'Norlight / Windstream', desc: 'Q-Excellence award, 800+ business customers, 95%+ satisfaction' },
    ],
    projectsHeading: 'Projects',
    projects: [
      { name: 'whisper-notes', desc: 'CLI tool that transcribes audio recordings into structured markdown using OpenAI Whisper for speech-to-text and Claude\'s streaming API for intelligent formatting. Supports batch processing, multiple model sizes, and outputs clean markdown alongside raw transcriptions.', href: 'https://github.com/bbeckwith-dev/whisper-notes' },
      { name: 'CCsimulator (Work in Progress)', desc: 'Covered call options simulator with Black-Scholes pricing and Greeks (JavaScript)', href: 'https://github.com/bbeckwith-dev/CCsimulator' },
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
      { q: 'What is your tech stack?', a: 'AI: Claude, ChatGPT. Languages: Python, Bash, PowerShell, PHP, JavaScript, MySQL/MariaDB. Systems: Linux, Windows Server, ESXi. Infrastructure: Apache, BIND, Docker, AWS, Azure. Security: Fortinet, Solarwinds, Nagios. Platforms: Microsoft 365 Entra/Intune, ServiceNow, Git/GitHub.' },
      { q: 'What kind of roles are you looking for?', a: 'Full-stack or frontend development, WordPress/web administration, application support, data analysis, technical writing, or AI product support. I want to apply 20+ years of systems experience alongside modern AI tools in roles where I can write code, solve problems, and keep learning.' },
    ],
    connectHeading: 'Connect',
    email: 'brent.beckwith@gmail.com',
  },
  es: {} as typeof aboutContent['en'],
} as const
