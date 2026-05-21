export const seo = {
  en: {
    title: "Brent Beckwith | SOC Analyst & AI-Augmented Problem Solver",
    description:
      "SOC analyst with deep enterprise IT experience. 5,000+ domain migrations, zero data loss. Python automation, Linux administration, security operations. Uses AI daily to solve complex problems.",
  },
};

export const translations = {
  en: {
    greeting: "turning experience into code",
    greetingRoles: [
      "Support Specialist",
      "SOC Analyst",
      "Web Ops Specialist",
      "Customer Support Engineer",
    ],
    pillLabels: [
      "Trusted",
      "Analytical",
      "Versatile",
      "Resourceful",
    ],
    email: "brent.beckwith@gmail.com",
    role: "",
    story: {
      context:
        "+Over a decade+ of supporting web servers, apps, and desktops.",
      reflections: ["Almost but not quite full stack experience.", "I know how to script, what if I learned to code?"],
      hookParagraphs: [
        [
          "A career of broad experiences, filled with servers, networks, applications, concepts, projects, and communications has found the +final piece+.",
        ],
      ],
      why: "An experienced generalist with AI isn't just a jack of all trades anymore. Breadth becomes the map. Depth is researched, planned, and on-demand.",
      seeking: [
        "AI has changed how I plan, research, and execute everything.",
        "I'm ready for roles that leverage my alchemy.",
        "Let's build something.",
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
        "AI-Augmented Work",
        "Reliability & Ops",
      ],
      skipButton: "Skip intro",
    },
    taglines: [] as readonly string[],
    location: "Madison, OH · Remote / Hybrid",
    roles: [
      "Junior Full-Stack Developer",
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
        " — from desktop support to Linux administration, security operations, and full-stack LAMP development. Led hosting migrations for five major ISP acquisitions covering 5,000+ domains with zero data loss. Built Python and shell scripts that cut manual processes by 70%.",
      p2: "Support professional with an analyst's instinct.",
      p2Highlight: "",
      p2End: " Diagnosing problems, querying data, and building the documentation others rely on.",
      cards: [
        {
          title: "Systems Thinking",
          desc: "Sees how parts interact — anticipates failure points and designs work so it doesn't break later",
        },
        {
          title: "Process Automation",
          desc: "If it repeats, automate it — reduced manual work by 70-80% through scripting",
        },
        {
          title: "AI-Augmented Work",
          desc: "Daily Claude user for over a year — research, troubleshooting, development",
        },
      ],
    },
    coreCompetencies: {
      title: "Core Competencies",
      items: [
        {
          title: "Analytical Problem Solving",
          desc: "Root cause analysis, SQL queries for actionable data, security analysis across 13M+ IP addresses",
        },
        {
          title: "Scripting & Process Efficiency",
          desc: "Bash and Python scripts replacing hours of manual work with minutes. Automated backups to AWS",
        },
        {
          title: "Migration & Transition Execution",
          desc: "Five ISP acquisition migrations, 5,000+ domains, 60+ servers. Data harvesting and customer comms",
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
          name: "AI",
          items: ["Claude", "ChatGPT"],
        },
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
        {
          name: "Platforms / Tools",
          items: ["Microsoft 365 Entra / Intune", "ServiceNow", "Remedy", "Citrix", "Plesk", "Git / GitHub"],
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
          title: "CCsimulator",
          badge: "Work in Progress",
          badgeBuilding: "",
          desc: "Browser-based covered call options simulator. Implements Black-Scholes European call pricing with all five Greeks, geometric Brownian motion for price simulation, real-time risk gauges, payoff diagrams, and 7 preset market scenarios. Single-file vanilla JS (~1,700 lines), no build step.",
          tech: ["JavaScript", "Chart.js", "Black-Scholes", "HTML/CSS"],
          link: "github.com/bbeckwith-dev/CCsimulator",
        },
        {
          title: "This Portfolio",
          badge: "Adapted & Extended",
          badgeBuilding: "",
          desc: "AI-powered portfolio with hardened chatbot featuring 6-layer security, RAG retrieval, voice mode, and Langfuse observability. Adapted from an open-source template and extended with my own content and career data.",
          tech: [
            "React 19",
            "TypeScript",
            "Tailwind",
            "Claude API",
            "Supabase pgvector",
            "Vercel",
          ],
          link: "",
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
      title: "AI-Augmented Workflow",
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
        title: "Career Break",
        period: "Sep 2025 - Present",
        desc: "AI-assisted development workflows and product research. Applying years of operational knowledge to learning how to build, not just maintain.",
      },
      amtrust: {
        company: "AmTrust Financial Services",
        location: "Cleveland, OH",
        role: "Desktop Specialist II",
        period: "Oct 2024 - Sep 2025",
        desc: "Enterprise desktop support across a global, 6,000+ user operation with hardware support spanning 20 states. The role that sharpened how I think about triage at scale, cross-team escalation, and making sure the next person can find what I found.",
        highlights: [
          "Delivered technical support for Windows 11, Office 365, and various application across multi-state operations via onsite, remote, and phone channels, consistently meeting SLA/OLA standards",
          "Handled full hardware lifecycle for the company's largest office: deployment, break/fix, inventory control, and depot stock maintenance",
          "Analyzed hardware replacement requests from Level I technicians, verifying proper diagnosis before approval to prevent unnecessary spend",
          "Consulted Level I techs on procedures and escalations; consolidated and escalated priority tickets to engineering teams requiring elevated access",
          "Built documentation and knowledge-sharing resources aimed at reducing information silos between departments",
        ],
      },
      careerBreak2023: {
        title: "Career Break",
        period: "Oct 2023 - Oct 2024",
        desc: "Caught in a Windstream reduction in force despite nothing but above-average and excellent reviews. Relocated cross-country, renovated my home, and started exploring web development with the Odin Project, photography, and writing as possible next directions.",
      },
      windstreamEngineer: {
        company: "Windstream Communications",
        location: "Remote",
        role: "Security Analyst I",
        period: "Dec 2019 - Oct 2023",
        desc: "Maintained the CSOC's internal web applications, databases, and backup systems. The closest I've come to a full-stack development role, maintaining and extending LAMP applications while working inside a security operations team. Notable scripts affected hundreds of network devices and checked IP reputation at scale.",
        highlights: [
          "Maintained CSOC warehousing LAMP website, wiki, and servers — the applications the security team relied on daily",
          "Maintained daily backups of CSOC websites and databases to AWS servers",
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
          "Spearheaded hosting migrations across five major ISP acquisitions (Norlight, Nuvox, Paetec, Earthlink, Broadview) — 5,000+ domains from 60+ servers",
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
              "Trusted with root access to the entire company technology stack",
              "Earned Q-Excellence award — singular recognition out of 600+ employees",
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
      spanish: "",
      native: "",
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
      desc: "I'm pursuing roles across full-stack development, application support, data analysis, and technical writing. If you need someone who combines analytical depth with broad technical literacy and a belief that AI should enhance the human experience, not replace it — let's connect.",
      contact: "Contact",
    },
    ui: {
      languageBanner: "",
      languageBannerSwitch: "",
      languageBannerSwitchPrefix: "",
      languageBannerSwitchLang: "",
      languageToggle: "",
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
