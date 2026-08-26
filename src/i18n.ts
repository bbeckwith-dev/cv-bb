export const seo = {
  en: {
    title: "Brent Beckwith | Applications and Systems Support Engineer",
    description:
      "Applications and systems support engineer and Linux SME. Led five ISP-acquisition migrations covering 5,000+ domains. Comfortable in the backend, writes scripts when the job calls for it.",
  },
};

export const translations = {
  en: {
    greeting: "turning experience into solutions that work",
    greetingRoles: [
      "Support Specialist",
      "Web Ops Analyst",
      "Customer Support Engineer",
    ],
    pillLabels: [
      "Analytical",
      "Versatile",
      "Resourceful",
    ],
    email: "brent.beckwith@gmail.com",
    role: "",
    story: {
      context:
        "+Over a decade+ of migration, rollout, and utility projects alongside web server, app, and desktop support.",
      reflections: [],
      hookParagraphs: [
        [
          "A career of broad experiences filled with servers, networks, applications, concepts, projects, and communications.",
        ],
      ],
      why: "Linux SME with a hosting-support core and five ISP-acquisition migrations behind me. I work comfortably in the backend, support, educate, and reduce friction on the front end, and write scripts when the job calls for it. AI is part of how I research, plan, and solve problems day to day.",
      seeking: [
        "Open to support, systems, implementation, and development roles where that mix matters.",
      ],
      nav: [
        { icon: "briefcase", label: "My path", href: "#experience" },
        { icon: "folder", label: "What I build", href: "#projects" },
        { icon: "mail", label: "Let's talk", href: "#contact" },
        { icon: "bot", label: "Ask me", href: "#chat", highlight: true },
      ],
      skills: [
        "Systems Thinking",
        "Process Automation",
        "Security Operations",
        "Linux Administration",
        "AI-Assisted Work",
        "Reliability & Ops",
      ],
      skipButton: "Skip intro",
    },
    taglines: [] as readonly string[],
    location: "Madison, OH · Remote / Hybrid",
    roles: [
      "Junior Full-Stack Developer / Engineer",
      "Junior Frontend Developer",
      "WordPress Developer / Web Administrator",
      "AI Product Support Engineer",
      "Application Support Analyst",
      "Technical Writer",
      "Junior Data Analyst",
    ],
    summary: {
      title: "Professional Summary",
      p1: "Systems and support engineer with deep experience building reliability across",
      p1Highlight: "enterprise IT",
      p1End:
        ", from desktop support to Linux administration, security operations, and full-stack LAMP development. Spearheaded hosting migrations for five major ISP acquisitions covering 5,000+ domains with zero data loss. Built Python and shell scripts that cut manual processes by 70%.",
      p2: "Analyst's toolset with support professional's instinct.",
      p2Highlight: "",
      p2End: " Diagnosing problems, querying data, and building the documentation others rely on.",
      cards: [
        {
          title: "Systems Thinking",
          desc: "Sees how parts interact. Anticipates failure points and designs work so it doesn't break later",
        },
        {
          title: "Process Automation",
          desc: "If it repeats, automate it. Reduced manual work by 70-80% through scripting",
        },
        {
          title: "AI-Assisted Work",
          desc: "Daily Claude user for over a year. Research, troubleshooting, development",
        },
      ],
    },
    coreCompetencies: {
      title: "Core Competencies",
      items: [
        {
          title: "Migration & Transition Execution",
          desc: "Five ISP acquisition migrations, 5,000+ domains, 60+ servers. Data harvesting and customer comms",
        },
        {
          title: "Analytical Problem Solving",
          desc: "Root cause analysis, SQL queries for actionable data, security analysis across 13M+ IP addresses",
        },
        {
          title: "Scripting & Backend Support",
          desc: "Bash and Python scripts replacing hours of manual work with minutes. Automated backups to AWS",
        },
        {
          title: "Stakeholder Communication",
          desc: "Clear updates under pressure during outages, cross-departmental collaboration, customer-facing docs",
        },
        {
          title: "Documentation & Knowledge Transfer",
          desc: "Knowledge base creation, support documentation for 500+ customer migrations, mentoring and training",
        },
        {
          title: "Customer Service & Support Excellence",
          desc: "95%+ satisfaction across 800+ business customers. Q-Excellence award, singular out of 600+ employees",
        },
      ],
    },
    techStack: {
      title: "Tech Stack",
      categories: [
        {
          name: "Languages",
          items: [
            "Python",
            "Bash / Shell",
            "PowerShell",
            "PHP",
            "JavaScript",
            "MySQL / MariaDB",
            "HTML / CSS",
          ],
        },
        {
          name: "Systems",
          items: ["Linux", "Solaris", "Unix", "Windows Server", "Windows 11", "ESXi", "SSH", "SSL"],
        },
        {
          name: "Infrastructure",
          items: ["Apache", "Exim", "BIND", "djbdns", "tinydns", "NetApp / NFS", "Docker", "AWS", "Azure"],
        },
        {
          name: "Platforms / Tools",
          items: ["Microsoft 365 Entra / Intune", "ServiceNow", "Remedy", "Citrix", "Plesk", "Git / GitHub"],
        },
        {
          name: "AI",
          items: ["Claude", "ChatGPT"],
        },
        {
          name: "Security / Monitoring",
          items: [
            "Fortinet",
            "Solarwinds",
            "Nagios / Sentry",
            "Trustwave",
            "Proofpoint",
            "Mimecast",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      agentInfra: {
        title: "",
        subtitle: "",
        agents: [] as {
          icon: string;
          name: string;
          desc: string;
          tag: string;
        }[],
      },
      githubLink: "github.com/bbeckwith-dev",
      viewCode: "View code",
      viewPrototype: "View prototype",
      items: [
        {
          title: "whisper-notes",
          badge: "Open Source",
          badgeBuilding: "",
          desc: "CLI tool that transcribes audio recordings into structured markdown using OpenAI Whisper for speech-to-text and Claude's streaming API for intelligent formatting. Supports batch processing, multiple model sizes, and outputs clean markdown alongside raw transcriptions.",
          tech: ["Python", "Anthropic API", "OpenAI Whisper", "Obsidian"],
          link: "github.com/bbeckwith-dev/whisper-notes",
        },
        {
          title: "This Portfolio",
          badge: "Adapted & Extended",
          badgeBuilding: "",
          desc: "AI-powered portfolio with security-hardened chatbot, automated eval suite, and production observability. Adopted a production-grade codebase and made it my own. Reading unfamiliar architecture, working within existing conventions, extending functionality without breaking what was already there. The same skill set as onboarding into an enterprise system.",
          tech: [
            "React 19",
            "TypeScript",
            "Tailwind",
            "Claude API",
            "Vercel Edge Functions",
          ],
          link: "github.com/bbeckwith-dev/cv-bb",
        },
      ],
      saPlaybook: {
        title: "",
        badge: "",
        tagline: "",
        desc: "",
        features: [] as { icon: string; text: string }[],
        footer: "",
        cta: "",
      },
    },
    claudeCode: {
      title: "AI-Assisted Work",
      badge: "Daily Practice · Claude User",
      desc: "I use Claude daily for research, troubleshooting, scripting, and development. AI is a tool that enhances every knowledge worker's ability to solve problems and I advocate for its thoughtful, human-focused adoption.",
      highlights: [
        "Daily AI-assisted development with Claude Code for scripting, automation, and problem solving",
        "Built whisper-notes: Python CLI integrating Anthropic API with streaming and OpenAI Whisper",
        "Advocates for thoughtful AI adoption that enhances the human experience, not replaces it",
      ],
      certs: [] as { title: string; url: string }[],
    },
    experience: {
      title: "Work Experience",
      careerBreakCurrent: {
        title: "Job Search / Professional Development",
        period: "Sep 2025 - Present",
        desc: "Building tooling that removes repetitive work, including whisper-notes, a Python CLI that turns recordings and documents into structured notes. Using AI daily for research, troubleshooting, and automation. Looking for a team that invests in growing its people.",
      },
      amtrust: {
        company: "AmTrust Financial Services",
        location: "Cleveland, OH",
        role: "Desktop Specialist II",
        period: "Oct 2024 - Sep 2025",
        desc: "Windows 11 and Microsoft 365 application support for a global, 6,000+ user operation, with hardware support spanning 20 states. The role that sharpened how I think about triage at scale, cross-team escalation, and making sure the next person can find what I found.",
        highlights: [
          "Delivered Windows 11 and Microsoft 365 application support via onsite, remote, and phone channels, consistently meeting SLA/OLA standards",
          "Administered users, devices, and access through Entra, Active Directory, and Intune, and managed support tickets in ServiceNow",
          "Handled full hardware lifecycle for the company's largest office: deployment, break/fix, inventory control, and depot stock maintenance",
          "Analyzed hardware replacement requests from Level I technicians, verifying proper diagnosis before approval to prevent unnecessary spend",
          "Consulted Level I techs on procedures and escalations; consolidated and escalated priority tickets to engineering teams requiring elevated access",
          "Built documentation and knowledge-sharing resources aimed at reducing information silos between departments",
        ],
      },
      careerBreak2023: {
        title: "Career Break",
        period: "Oct 2023 - Oct 2024",
        desc: "Caught in a Windstream reduction in force. Relocated cross-country, renovated my home, and started exploring web development with the Odin Project, photography, and writing as possible next directions.",
      },
      windstreamEngineer: {
        company: "Windstream Communications",
        location: "Remote",
        role: "Security Analyst I → Security Engineer I",
        period: "Dec 2019 - Oct 2023",
        desc: "Maintained the CSOC's internal web applications, databases, and backup systems. The closest I've come to a full-stack development role, maintaining and extending LAMP applications while working inside a security operations team. Notable scripts affected hundreds of network devices and checked IP reputation at scale.",
        highlights: [
          "Maintained CSOC warehousing LAMP website, wiki, and servers, the applications the security team relied on daily",
          "Designed daily backups of CSOC websites and databases to AWS servers",
          "Consulted with CSOC management on new site features, then built and deployed them",
          "Crafted MySQL queries to pull structured, actionable data for management decision-making",
          "Contributed to migration coordination between engineers and specialists",
        ],
        techStack:
          "ESXi, Linux, MySQL, Apache, PHP, HTML, CSS, JavaScript, Git, Bash, Python, Docker, AWS, Fortinet, Azure",
      },
      windstreamSpecialist: {
        company: "Windstream Communications",
        location: "Remote",
        role: "Specialist II",
        period: "May 2011 - Dec 2019",
        desc: "Eight years of hosting operations, customer migrations, and escalation support. Go-to resource for Linux and web/DNS/email hosting on the team, and the person who handled customer communications when mass communication was necessary.",
        highlights: [
          "Go-to resource for Linux, web/DNS/email hosting, and email filtering for a team of 8",
          "Spearheaded hosting migrations across five major ISP acquisitions (Norlight, Nuvox, Paetec, Earthlink, Broadview), covering 5,000+ domains from 60+ servers",
          "Escalation point for eight Specialist I team members and four product soft rollouts",
          "Wrote the analysis script for a domain lookup and disable project that saved over $15,000 monthly",
          "Composed and managed customer communication campaigns across multiple migration waves",
          "Investigated, harvested, and organized customer data from numerous servers and platforms during acquisitions",
        ],
        techStack:
          "Linux, MySQL/MariaDB, Apache, HTML, Bash, SSH, SSL, BIND/djbdns/tinydns, Qmail, Plesk, Remedy, Metasolv",
      },
      earlierExperience: {
        title: "Earlier Experience",
        roles: [
          {
            company: "Norlight Telecommunications",
            role: "Customer Support Engineer",
            highlight:
              "Where it started. 800+ business customers, 95%+ satisfaction, and the Q-Excellence award that still means something to me.",
            highlights: [
              "Sunrise to sunset ownership of provisioning and operations for web, email, DNS hosting, cloud email filtering, and fax-to-email systems across 800+ business customers",
              "Completed hosting and mail-filtering platform migrations for 500+ customers and authored the support documentation",
              "First-response application support for 30+ company-designed customer websites and tools",
              "Rotated system upgrade, on-call, and maintenance duties across 30+ servers and NFS storage",
              "Earned Q-Excellence award, singular recognition out of 600+ employees",
            ],
          },
          {
            company: "Cinergy Communications",
            role: "Helpdesk Technician",
            highlight: "Where the customer service instinct started. ISP helpdesk supporting business and residential customers across Windows and Mac, phone troubleshooting, a dash of in-person PC repair, and not just learning to talk to people, but how to listen.",
          },
        ],
      },
    },
    linkedinPosts: {
      title: "",
      cta: "",
      items: [] as {
        hook: string;
        reactions: string;
        comments: string;
        url: string;
      }[],
    },
    xPost: {
      hook: "",
      hookLinkPrefix: "",
      hookLinkUrl: "",
      quoteAuthor: "",
      quoteRole: "",
      quoteHandle: "",
      quoteText: "",
      quoteReplies: "",
      quoteRetweets: "",
      quoteLikes: "",
      quoteViews: "",
      quoteUrl: "",
      replies: "",
      retweets: "",
      likes: "",
      views: "",
      cta: "",
      url: "",
    },
    redditPosts: [] as {
      hook: string;
      upvotes: string;
      comments: string;
      subreddit: string;
      cta: string;
      url: string;
    }[],
    speaking: {
      title: "",
      slides: "",
      comingSoon: "",
      aiFluency: {
        title: "",
        badge: "",
        desc: "",
        certs: [] as { title: string; url: string }[],
      },
      items: [] as {
        year: string;
        event: string;
        eventUrl: string;
        title: string;
        desc: string;
        pdf: string;
        featured?: boolean;
        materialUrl?: string;
        materialLabel?: string;
      }[],
    },
    education: {
      title: "Education",
      items: [
        {
          year: "",
          org: "ITT Technical Institute",
          title: "Associate Degree, Computer Networking Systems",
          desc: "Newburgh, IN (GPA 3.5)",
        },
        {
          year: "",
          org: "The Odin Project",
          title: "Modern Web Development",
          desc: "Full Stack JavaScript",
        },
        {
          year: "",
          org: "Microsoft",
          title: "Azure Fundamentals",
          desc: "Cloud platform fundamentals",
        },
        {
          year: "",
          org: "Amazon",
          title: "AWS Cloud Practitioner",
          desc: "Cloud services training",
        },
        {
          year: "",
          org: "",
          title: "Six Sigma",
          desc: "Process improvement methodology",
        },
      ],
    },
    certifications: {
      title: "",
      items: [] as {
        year: string;
        title: string;
        org: string;
        logo: string;
        url: string;
      }[],
    },
    skills: {
      title: "Skills",
      languages: "Languages",
      english: "English",
      professional: "Native",
      technical: "Technical Skills",
      soft: "Soft Skills",
      softSkills: [
        "Analytical Problem Solving",
        "Systems Thinking",
        "Process Improvement",
        "Team Collaboration",
        "Customer Service Excellence",
        "Documentation & Knowledge Transfer",
        "Change Management",
      ],
    },
    cta: {
      title: "Let's talk",
      desc: "I'm pursuing roles across application and systems support, Linux administration, migration and implementation, and web hosting support, ideally on a team that values curiosity and initiative. If you want someone who pairs deep support and migration experience with real backend comfort, let's connect.",
      contact: "Contact",
    },
    ui: {
      typingIndicator: "Brent is typing...",
    },
    chat: {
      placeholder: "Type your question...",
      title: "Brent",
      subtitle: "Ask me about my experience",
      greeting:
        "Hi! I'm an AI assistant for **Brent Beckwith**. Ask me anything about his experience, projects, or skills.",
      error: "Error sending. Please try again.",
      offline:
        "Looks like you're offline. Check your connection and try again.",
      prompts: [
        {
          icon: "briefcase",
          label: "Experience",
          query: "What is Brent's background in systems engineering and IT?",
        },
        {
          icon: "rocket",
          label: "Key Achievements",
          query: "What are Brent's most notable achievements?",
        },
        {
          icon: "help",
          label: "Why hire him?",
          query: "Why should I hire Brent?",
        },
        {
          icon: "mail",
          label: "Contact",
          query: "How can I contact Brent?",
        },
      ],
      contactCtaTitle: "Want to talk directly?",
      voice: {
        start: "Talk to Brent",
        stop: "End",
        connecting: "Connecting...",
        listening: "Listening...",
        thinking: "Thinking...",
        searching: "Searching my experience...",
        speaking: "Speaking...",
        timeWarning: "15 seconds remaining",
        ended: "Voice session ended",
        rateLimited: "You have reached the limit of 3 voice sessions per day",
        unsupported: "Your browser does not support audio input",
        micDenied: "Microphone access is needed for voice mode",
        switchToText: "Switch to text",
        connection: "Connection error. Please try again.",
      },
    },
  },
} as const;

export type Lang = "en";
