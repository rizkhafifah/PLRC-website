import { TeamMember, Division, ResearchPaper, Quote, Announcement, ContactPerson, OpportunityItem } from '../types';

export const CABINET_INFO = {
  name: "Synthesis Cabinet",
  period: "2026 - 2027",
  organization: "President University Literature and Research Club (PLRC)",
  university: "President University",
  tagline: "Integrate Ideas, Synthesize Innovation",
  motto: "Integrate Ideas, Synthesize Innovation",
  aboutCabinet: "The Synthesis Cabinet represents the 2026-2027 executive administration of President University Literature and Research Club. Inspired by the philosophical concept of synthesis, where diverse ideas merge into intellectual innovation, our cabinet unites student scholars across all faculties to cultivate academic writing, open research publications, and creative literary excellence.",
  aboutPLRC: "Founded at President University, PLRC is the premier student organization dedicated to literary appreciation, critical analysis, creative writing, and academic paper publishing. We serve as an intellectual sanctuary for students passionate about storytelling, cultural criticism, and interdisciplinary research.",
  founder: {
    name: "Rizkha Ramadhani Hafifah",
    major: "Information Technology | 2025",
    role: "Chairperson & Founder of PLRC",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    bio: ""
  }
};

export interface AdvisorProfile {
  name: string;
  role: string;
  position: string;
  department: string;
  image: string;
  affiliation: string;
}

export const CLUB_ADVISOR: AdvisorProfile = {
  name: "Rosalina, S.Kom., M.Kom.",
  role: "Club Advisor",
  position: "Head of Informatics Study Program",
  department: "Faculty of Artificial Intelligence and Smart Manufacturing",
  affiliation: "President University",
  // Masukkan foto asli ke: public/images/advisor/advisor-rosalina.jpg (atau ganti link di bawah)
  image: "/images/advisor/advisor-rosalina.jpg"
};

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  major: string;
  image: string;
}

export const BOARD_OF_DIRECTORS: BoardMember[] = [
  {
    id: "chairperson",
    name: "Rizkha Ramadhani Hafifah",
    role: "Chairperson & Founder",
    major: "Information Technology | 2025",
    // Masukkan foto asli ke: public/images/bod/bod-chairperson-rizkha.jpg
    image: "/images/bod/bod-chairperson-rizkha.jpg",
  },
  {
    id: "vice-chairperson",
    name: "Aryah Julio Miracle Kaensige",
    role: "Vice Chairperson",
    major: "Information Technology | 2025",
    // Masukkan foto asli ke: public/images/bod/bod-vice-aryah.jpg
    image: "/images/bod/bod-vice-aryah.jpg",
  },
  {
    id: "secretary-1",
    name: "Syauqi Siraj Ramadhan",
    role: "Secretary 1",
    major: "Information Technology | 2025",
    // Masukkan foto asli ke: public/images/bod/bod-sec1-syauqi.jpg
    image: "/images/bod/bod-sec1-syauqi.jpg",
  },
  {
    id: "secretary-2",
    name: "Grace Mangiring Primadona Pakpahan",
    role: "Secretary 2",
    major: "Information Technology | 2025",
    // Masukkan foto asli ke: public/images/bod/bod-sec2-grace.jpg
    image: "/images/bod/bod-sec2-grace.jpg",
  },
  {
    id: "treasurer",
    name: "Dhiezella Septiani Sihite",
    role: "Treasurer",
    major: "Law | 2025",
    // Masukkan foto asli ke: public/images/bod/bod-treasurer-dhiezella.jpg
    image: "/images/bod/bod-treasurer-dhiezella.jpg",
  }
];

export const CORE_TEAM: TeamMember[] = [
  {
    id: "chairperson",
    name: "Rizkha Ramadhani Hafifah",
    role: "Chairperson & Founder of PLRC",
    category: "executive",
    major: "Information Technology | 2025",
    batch: "2025",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    bio: "Pioneering the foundation and strategic vision of PLRC to bridge digital technology, critical inquiry, and scholarly writing. Rizkha leads the Synthesis Cabinet towards international research excellence and cross-disciplinary collaboration.",
    favoriteBook: "The Pragmatic Programmer & The Book of Disquiet by Fernando Pessoa",
    researchFocus: "Digital Humanities, Algorithmic Information Systems & Scholarly Archival Architecture",
    email: "rizkha.ramadhani@student.president.ac.id"
  },
  {
    id: "vice-chairperson",
    name: "Kaelen Nathaniel Vos",
    role: "Vice Chairperson",
    category: "executive",
    major: "Communications '23",
    batch: "2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    bio: "Spearheading internal synergy and research development. Kaelen focuses on digital humanities, algorithmic narrative generation, and modern media aesthetics.",
    favoriteBook: "If on a Winter's Night a Traveler by Italo Calvino",
    researchFocus: "Hypertextual Storytelling & Algorithmic Poetics",
    email: "kaelen.vos@student.president.ac.id"
  },
  {
    id: "secretary",
    name: "Clara Diantha",
    role: "Secretary General",
    category: "executive",
    major: "English Studies & Literature '23",
    batch: "2023",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
    bio: "Managing organizational archives, official documentation, and academic correspondence with international literary societies.",
    favoriteBook: "To the Lighthouse by Virginia Woolf",
    researchFocus: "Stream of Consciousness in Modernist Feminism",
    email: "clara.diantha@student.president.ac.id"
  },
  {
    id: "treasurer",
    name: "Farhan Arisya",
    role: "Treasurer & Finance Director",
    category: "executive",
    major: "Management & Finance '23",
    batch: "2023",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    bio: "Ensuring financial transparency for publishing grants, event budgets, and research symposium awards.",
    favoriteBook: "The Great Gatsby by F. Scott Fitzgerald",
    researchFocus: "Economic Tropes and Class Critique in 20th Century Fiction",
    email: "farhan.arisya@student.president.ac.id"
  },
  {
    id: "hod-research",
    name: "Dr. Ryan Wijaya",
    role: "Head of Research & Academics",
    category: "hod",
    department: "Academic & Research Department",
    major: "International Relations '23",
    batch: "2023",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800",
    bio: "Directing student peer reviews, thesis mentoring, and quarterly submission to SCOPUS and SINTA accredited journals.",
    favoriteBook: "Foucault's Pendulum by Umberto Eco",
    researchFocus: "Semiotic Analysis of Contemporary Political Discourse",
    email: "ryan.wijaya@student.president.ac.id"
  },
  {
    id: "hod-creative",
    name: "Nadia Saraswati",
    role: "Head of Creative Writing & Publications",
    category: "hod",
    department: "Creative & Editorial Department",
    major: "English Studies '24",
    batch: "2024",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800",
    bio: "Overseeing the annual PLRC Literary Anthology 'Synthesis Review' and poetry slam events across Java universities.",
    favoriteBook: "Selected Poems of Sapardi Djoko Damono",
    researchFocus: "Eco-poetics and Environmental Grief in Maritime Poetry",
    email: "nadia.saraswati@student.president.ac.id"
  },
  {
    id: "hod-media",
    name: "Devon Hartanto",
    role: "Head of Media & Digital Branding",
    category: "hod",
    department: "Media & Visual Design Department",
    major: "Visual Communication Design '24",
    batch: "2024",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800",
    bio: "Designing minimalist visual assets, digital typography, and interactive web archives for PLRC initiatives.",
    favoriteBook: "The Aesthetics of Resistance by Peter Weiss",
    researchFocus: "Visual Typography in Post-Digital Literary Magazines",
    email: "devon.hartanto@student.president.ac.id"
  },
  {
    id: "hod-events",
    name: "Ananya Sharma",
    role: "Head of Events & Public Relations",
    category: "hod",
    department: "Public Relations & Events Department",
    major: "International Business '23",
    batch: "2023",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    bio: "Curating international guest speaker sessions, book fairs, and inter-university research forums.",
    favoriteBook: "The God of Small Things by Arundhati Roy",
    researchFocus: "Linguistic Hybridity in Modern South Asian Anglophone Novels",
    email: "ananya.sharma@student.president.ac.id"
  }
];

export const DIVISIONS: Division[] = [
  {
    id: "div-bod",
    name: "Board of Directors (BOD)",
    shortCode: "BOD",
    description: "Executive leadership overseeing overall strategic vision, policy alignment, cabinet synergy, and institutional growth of PLRC.",
    headName: "Rizkha Ramadhani Hafifah",
    focusAreas: [
      "Strategic Governance",
      "Executive Oversight",
      "Organizational Policy",
      "Cabinet Synergy"
    ],
    keyProjects: [
      {
        title: "Synthesis Strategic Roadmap 2026-2027",
        desc: "Master vision for research expansion, cabinet alignment, and institutional partnerships.",
        status: "Ongoing"
      },
      {
        title: "Annual Meeting",
        desc: "Strategic retreat and performance evaluation for division leads.",
        status: "Upcoming"
      }
    ],
    meetingSchedule: "Every Monday at 16:00 (Executive Boardroom)",
    memberCount: 8,
    iconName: "ShieldCheck"
  },
  {
    id: "div-academic",
    name: "Academic and Capacity Building",
    shortCode: "ACB",
    description: "Responsible for designing and executing internal skills development, weekly research mentoring, and academic writing workshops to enhance members' research literacy.",
    headName: "Dr. Ryan Wijaya",
    focusAreas: [
      "Internal Skills Development",
      "Weekly Research Mentoring",
      "Academic Writing Workshops",
      "Research Literacy Enhancement"
    ],
    keyProjects: [
      {
        title: "Weekly Research Mentoring",
        desc: "Personalized weekly research mentoring and academic thesis guidance for student researchers.",
        status: "Ongoing"
      },
      {
        title: "Academic Writing Workshops",
        desc: "Structured workshops on research methodology, paper structuring, scientific citations, and publication literacy.",
        status: "Ongoing"
      }
    ],
    meetingSchedule: "Every Tuesday at 16:30 (Research Lab)",
    memberCount: 28,
    iconName: "GraduationCap"
  },
  {
    id: "div-competition",
    name: "Competition and Conference",
    shortCode: "CNC",
    description: "Manages the incubation process for scientific competitions and leads the end-to-end execution of PLRC’s flagship annual Student Research Conference & Exhibition.",
    headName: "Clara Diantha",
    focusAreas: [
      "Scientific Competition Incubation",
      "Student Research Conference",
      "Academic Exhibition",
      "Delegation Mentoring"
    ],
    keyProjects: [
      {
        title: "Scientific Competition Incubation",
        desc: "Mentoring and preparing student delegations for prestigious national and international academic competitions.",
        status: "Ongoing"
      },
      {
        title: "Student Research Conference & Exhibition",
        desc: "End-to-end planning and execution of PLRC's flagship annual student research conference and innovation exhibition.",
        status: "Upcoming"
      }
    ],
    meetingSchedule: "Every Wednesday at 17:00 (Auditorium C)",
    memberCount: 24,
    iconName: "PenTool"
  },
  {
    id: "div-publishing",
    name: "Publishing and Literature",
    shortCode: "PNL",
    description: "Focuses on curating literature materials, organizing Book Party sessions, and managing the publication pipeline for student research papers and journals.",
    headName: "Nadia Saraswati",
    focusAreas: [
      "Literature Material Curation",
      "Book Party Sessions",
      "Research Paper Pipeline",
      "Journal & Anthology Publishing"
    ],
    keyProjects: [
      {
        title: "Book Party Sessions",
        desc: "Curated literary discussions, book review gatherings, and creative writing reading sessions.",
        status: "Ongoing"
      },
      {
        title: "Student Research & Journal Publishing Pipeline",
        desc: "End-to-end editorial curation, manuscript review, and publishing pipeline for student research papers and journals.",
        status: "Ongoing"
      }
    ],
    meetingSchedule: "Every Thursday at 16:00 (Library Conference Room)",
    memberCount: 30,
    iconName: "BookOpen"
  },
  {
    id: "div-pr",
    name: "PR x Partnership",
    shortCode: "PRP",
    description: "Handles external relations, building strategic collaborations with university departments, external research institutions, corporate sponsors, and media partners.",
    headName: "Ananya Sharma",
    focusAreas: [
      "External Relations",
      "Strategic Collaborations",
      "Corporate Sponsors",
      "Media Partners"
    ],
    keyProjects: [
      {
        title: "Strategic Institutional Partnerships",
        desc: "Building collaborative alliances with university departments, external research bodies, and corporate sponsors.",
        status: "Ongoing"
      },
      {
        title: "External Media & Sponsorship Relations",
        desc: "Managing external communications, press releases, corporate sponsorships, and media partner outreach.",
        status: "Ongoing"
      }
    ],
    meetingSchedule: "Every Friday at 15:30 (Student Center)",
    memberCount: 22,
    iconName: "Globe"
  },
  {
    id: "div-media",
    name: "Media Creative",
    shortCode: "MCR",
    description: "Create branding materials, publication designs, documentation, and promotional media for events and digital channels.",
    headName: "Devon Hartanto",
    focusAreas: [
      "Branding Materials",
      "Publication Designs",
      "Event Documentation",
      "Digital Promotional Media"
    ],
    keyProjects: [
      {
        title: "Branding Materials & Publication Designs",
        desc: "Create official publication designs, typography palettes, and unified visual branding identity across all channels.",
        status: "Published"
      },
      {
        title: "Event Documentation & Promotional Media",
        desc: "Comprehensive multimedia coverage, photo/video documentation, and promotional media for events and digital channels.",
        status: "Ongoing"
      }
    ],
    meetingSchedule: "Every Wednesday at 16:30 (Media Studio B)",
    memberCount: 25,
    iconName: "Sparkles"
  },
  {
    id: "div-hrd",
    name: "Human Resource and Development (HRD)",
    shortCode: "HRD",
    description: "Focuses on member recruitment, internal bonding, performance evaluation, and maintaining a healthy, collaborative club environment.",
    headName: "Farhan Arisya",
    focusAreas: [
      "Member Recruitment",
      "PLRC Internal Bonding",
      "Performance Evaluation",
      "Collaborative Club Environment"
    ],
    keyProjects: [
      {
        title: "Member Recruitment & Internal Bonding (PLRC Bonding)",
        desc: "Organizing new member recruitment cycles, internal bonding camps, gathering sessions, and collaborative club activities.",
        status: "Ongoing"
      },
      {
        title: "Performance Evaluation & KPI Tracking (KPI Member)",
        desc: "Systematic KPI member evaluation, individual growth reviews, and maintaining a healthy, high-performing club culture.",
        status: "Ongoing"
      }
    ],
    meetingSchedule: "Every Thursday at 17:30 (Student Lounge)",
    memberCount: 20,
    iconName: "Users"
  },
  {
    id: "div-webdev",
    name: "Web Development",
    shortCode: "WEB",
    description: "Technical team dedicated to building, maintaining, and updating the PLRC Interactive Web Hub, including the integration of digital literature and gamification features.",
    headName: "Kaelen Nathaniel Vos",
    focusAreas: [
      "PLRC Interactive Web Hub",
      "Digital Literature Integration",
      "Gamification Features",
      "Digital Infrastructure"
    ],
    keyProjects: [
      {
        title: "PLRC Interactive Web Hub",
        desc: "Technical development, maintenance, and regular feature updates for the PLRC Interactive Web Hub, integrating digital literature repositories and gamification elements.",
        status: "Ongoing"
      }
    ],
    meetingSchedule: "Every Tuesday at 18:00 (Tech Lab)",
    memberCount: 16,
    iconName: "LayoutGrid"
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: "paper-01",
    title: "A Multi-Omics Data Integration and Generative AI Architecture for TP53 Automated Genomic Variant Analytics",
    authors: ["Rizkha Ramadhani Hafifah", "Rosalina"],
    department: "Dept. of Informatics, President University, Cikarang, Indonesia",
    category: "Bioinformatics & Generative AI",
    publishedDate: "2025",
    doi: "ON GOING",
    publicationStatus: "Accepted oral presentation on ICIC 2026, process for Scopus Publication",
    abstract: "Mutations in the TP53 gene account for high mortality rates in cancer patients worldwide, necessitating precision medical interventions such as targeted CRISPR-Cas9 gene editing. However, laboratory level variant verification is hindered by fragmented traditional bioinformatics software, error-prone manual ETL workflows, and high API transmission latencies. This study presents an automated data pipeline architecture and an end-to-end software platform integrating Needleman-Wunsch dynamic alignment, programming frame-aware modular arithmetic indexing, AlphaMissense deep learning pathogenicity annotation, ESMFold 3D visualization, and Google Gemini API cognitive analytics via a Streamlit interface connected to a NotebookLM RAG knowledge base. Consuming raw FASTA files, the system processes sequence alignment, calculates codon translational shifts, and generates LIMS Benchling-compatible CSV/JSON payloads. By implementing a structured JSON payload compression scheme, the proposed architecture reduces API token consumption by over 98%, eliminates rate-limit errors (HTTP 429), and delivers low-latency clinical analytical reports to accelerate cancer mutation workflows.",
    keywords: ["Data Engineering Pipeline, SoftwareArchitecture, REST API, LIMS Assembly, Deep Learning, AlphaMissense, ESMFold, Gemini API Payload, Cloud Microservices, RAG Engine. "],
    readTime: "15 min read",
    citations: 16,
    // File PDF yang bisa kamu tambahkan ke folder /public/papers/
    pdfUrl: "/papers/A-Multi-Omics-Data-Integration-TP53.pdf",
    pdfFileName: "A-Multi-Omics-Data-Integration-TP53.pdf",
    featured: true
  },
  {
    id: "paper-02",
    title: "BIOVOLT: Engineering Anthocyanin and Chlorophyll Based Dye-Sensitized Solar Cells (DSSCs) Utilizing Fruit and Vegetable Waste for Climate Change Mitigation and Urban Environmental Protection",
    authors: ["Rizkha Ramadhani Hafifah"],
    department: "Informatics/2025, President University",
    category: "Renewable Energy & Environmental Tech",
    publishedDate: "2025",
    doi: "-",
    abstract: "The global climate crisis demands a transformations toward regenerative technological ecosystems. Indonesia faces a environmental challenge on systemic organic waste ineffective administration and severe energy vulnerability from fossil fuel dependency. Annual food loss and waste (FLW) in Indonesia reaches 23–48 million tons, dominated by fruit and vegetable waste. In open dumpsites, this biomass undergoes uncontrolled anaerobic decomposition, releasing hazardous leachate and methane (CH4), a pollutant with a Global Warming Potential 28 times greater than CO2. Concurrently, the national power grid remains over 60% dependent on coal fired generation, driving massive carbon emissions and grid vulnerability. Clean energy alternatives are urgently needed to resolve both sanitation and energy deficits. To address these challenges, BioVolt is an engineered Dye-Sensitized Solar Cell (DSSC) technology that transforms organic waste into clean power. By extract natural photo sensitizers (anthocyanins and chlorophyl) from discarded produce, BioVolt convert organics waste into functional photovoltaics components, preventing landfill methane emissions while harvesting indoor and diffuse light powerr (15 − 30 W𝑝/m2). This inovationn directly advances the United Nations Sustainable Development Goals, specifically SDG 12 (Responsible Consumption and Production), SDG 13 (Climate Action), SDG 9 (Industry, Innovation, and Infrastructure), SDG 7 (Affordable and Clean Energy), and SDG 17 (Partnerships for the Goals).",
    keywords: [""],
    readTime: "14 min read",
    citations: 21,
    // File PDF yang bisa kamu tambahkan ke folder /public/papers/
    pdfUrl: "/papers/BIOVOLT-Dye-Sensitized-Solar-Cells.pdf",
    pdfFileName: "BIOVOLT-Dye-Sensitized-Solar-Cells.pdf",
    featured: true
  },
  {
    id: "paper-03",
    title: "The Legal Invalidity of AI-Generated Modifications in Digital Illustration: Navigating Creativity and Copyright Boundaries",
    authors: [
      "Ardya Mayrizka Salma Sulanjana",
      "Dhiezella Septiani Sihite",
      "Robert Pangihutan Radjagoekgoek"
    ],
    department: "Faculty of Law, President University, Indonesia",
    category: "Intellectual Property & Cyber Law",
    publishedDate: "2025",
    doi: "10.33021/ph.v12i1.6719",
    publicationStatus: "SINTA 4 Accredited",
    abstract:  "This study examines the legal invalidity of AI-driven modifications of digital illustrations, focusing on the dilemma between creativity and copyright infringement. This research examines whether AI-generated or AI-modified artworks can be recognized as legitimate creative works under Indonesian copyright law. This study adopts a normative juridical method, incorporating statutory, conceptual, and case approaches, drawing on Law No. 28 of 2014 on Copyright and relevant scholarly literature. The results show that artificial intelligence cannot be recognized as a legal subject capable of holding copyright. AI-generated modifications are fundamentally derivative works produced from existing datasets, often without the consent of original creators. Such practices violate both moral rights, including the right to integrity and attribution, and economic rights related to adaptation and distribution. Furthermore, the lack of transparency in AI systems complicates accountability and blurs the boundary between inspiration and imitation. In conclusion, AI-based modifications of digital illustrations cannot be considered legally valid or ethically justified. Without proper regulation and protection mechanisms, such practices risk undermining copyright principles, harming artists’ rights, and weakening the sustainability of the creative industry.",
    keywords: ["Artificial Intelligence; Copyright Law; Digital Illustration. "],
    readTime: "16 min read",
    citations: 14,
    // File PDF yang bisa kamu tambahkan ke folder /public/papers/
    pdfUrl: "/papers/The-Legal-Invalidity-AI-Generated-Modifications.pdf",
    pdfFileName: "The-Legal-Invalidity-AI-Generated-Modifications.pdf",
    featured: true
  },
  {
    id: "paper-04",
    title: "ThinkFirst: An Adaptive Human AI Self-Regulation Framework for Promoting Responsible Generative AI Usage Through an Intelligent Browser Extension",
    authors: ["Aryah Kaensige"],
    department: "Department of Informatics, President University",
    category: "Human-Computer Interaction & AI Ethics",
    publishedDate: "2026",
    doi: "https://doi.org/10.5281/zenodo.21668341", 
    abstract: "Generative AI has rapidly transformed the way individuals perform academic, professional, and creative tasks by improving efficiency, accessibility, and productivity. However, the increasing reliance on AI-generated responses has raised concerns regarding the decline of independent thinking, critical reasoning, and cognitive engagement. Existing studies primarily focus on enhancing AI performance, while limited attention has been given to promoting responsible Human AI collaboration and reducing AI overdependence. This study proposes ThinkFirst, an intelligent browser extension designed to encourage responsible Generative AI usage through adaptive behavioral interventions. The proposed solution integrates the Adaptive Human AI Self Regulation Framework (AHSRF), the AI Dependency Index (ADI), and the Adaptive Reflection Engine (ARE) to monitor user interaction behaviors, estimate AI dependency levels, and provide personalized reflection prompts before users rely on AI-generated responses. A preliminary survey was conducted to investigate current AI usage patterns and identify behavioral indicators associated with AI dependency, forming the basis for the proposed framework and system design. The proposed prototype demonstrates the feasibility of combining behavioral monitoring, privacy-preserving dependency assessment, and adaptive self regulation within a browser extension environment without disrupting users' normal workflows. By emphasizing cognitive engagement rather than restricting AI usage, ThinkFirst contributes a practical human centered framework for promoting responsible Human AI collaboration while maintaining the productivity benefits of Generative AI. The proposed approach is expected to support healthier AI usage habits and serve as a foundation for future intelligent behavioral intervention systems.",
    keywords: ["Generative AI, Responsible AI, Human AI Collaboration, Browser Extension, AI Dependency, Self-Regulation, Adaptive Intervention"],
    readTime: "13 min read",
    citations: 19,
    // File PDF yang bisa kamu tambahkan ke folder /public/papers/
    pdfUrl: "/papers/ThinkFirst-Human-AI-Self-Regulation.pdf",
    pdfFileName: "ThinkFirst-Human-AI-Self-Regulation.pdf",
    featured: true
  },
  {
    id: "paper-05",
    title: "Emergency Application and Sensors for Motorized Vehicles",
    authors: ["Rizkha Ramadhani Hafifah"],
    department: "Department of Informatics, President University",
    category: "Human-Computer Interaction & AI Ethics",
    publishedDate: "202",
    doi: "https://doi.org/10.13140/RG.2.2.11779.87844",
    abstract: `The high rate of traffic accidents in the Sukoharjo Regency, which reached 6,554 incidents by early 2026, necessitates an innovative approach to post-accident emergency handling. This research proposes the development of the Sukoharjo Emergency Assist System, an IoT-based solution designed to optimize the "Golden Hour" for accident victims. The system utilizes a Single Board Computer (SBC) powered by an Allwinner A20 Dual-Core processor as the central control unit, integrated with an MPU6050 sensor for real-time G-force monitoring and a NEO-6M GPS module for precise location tracking. The system operates by detecting high-impact collisions (exceeding a 4G threshold) and initiating an emergency protocol. A critical 10-second fail-safe countdown is implemented to allow conscious users to cancel false alarms via a manual emergency button. Upon confirmation, the system dispatches coordinates to a dedicated cloud server and triggers the mobile application to initiate an automatic emergency call to the nearest medical facility in Sukoharjo. Methodologically, this research follows a hardware-software integration approach, with system feasibility validated by technical experts. The results demonstrate a feasibility rate of 82.5%, categorized as "Highly Feasible." This system aligns with Pillar 5 of the Road Traffic and Transportation Safety (KLLAJ) program, providing a robust technological framework to reduce fatality rates through automated emergency reporting and faster medical response times in the Sukoharjo region.`,
    keywords: ["Single Board Computer, Allwinner A20, Accident Detection, IoT, Sukoharjo, Emergency Response, G-Force"],
    readTime: "13 min read",
    citations: 19,
    // File PDF yang bisa kamu tambahkan ke folder /public/papers/
    pdfUrl: "/papers/Emergency Application and Sensors for Motorized Vehicles.pdf",
    pdfFileName: "Emergency Application and Sensors for Motorized Vehicles.pdf",
    featured: true
  }
];

export const LITERARY_QUOTES: Quote[] = [
  {
    quote: "Literature is the most agreeable way of ignoring life, while simultaneously building an architectural sanctuary for the human soul.",
    author: "Fernando Pessoa",
    work: "The Book of Disquiet"
  },
  {
    quote: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
    author: "George R.R. Martin",
    work: "A Dance with Dragons"
  },
  {
    quote: "We write to taste life twice, in the moment and in retrospect.",
    author: "Anaïs Nin",
    work: "The Diary of Anaïs Nin"
  },
  {
    quote: "To read is to fly: it is to soar to a point of vantage which gives a view over wide terrains of history, human sentiment, and thought.",
    author: "Sapardi Djoko Damono",
    work: "On Reading & Solitude"
  },
  {
    quote: "Research is formalized curiosity. It is poking and prying with a purpose.",
    author: "Zora Neale Hurston",
    work: "Dust Tracks on a Road"
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-01",
    title: "Call for Papers: Synthesis Working Papers Series Vol. V (2026)",
    date: "February 2026",
    category: "Call for Papers",
    summary: "Inviting student essays, literature critical reviews, and research papers for double-blind peer review. Selected papers will be published in the open-access Synthesis Digital Repository.",
    location: "PLRC Editorial Office & Online Submission",
    deadline: "15 March 2026",
    urgent: true
  },
  {
    id: "ann-02",
    title: "Open Recruitment: Synthesis Cabinet Division Staff 2026/2027",
    date: "January 2026",
    category: "Recruitment",
    summary: "President University Literature and Research Club is calling all passionate students across all majors to join as division team in Research, Creative Writing, Editorial, PR, and Book Club.",
    location: "Auditorium Building B & Virtual Form",
    deadline: "28 February 2026",
    urgent: true
  },
  {
    id: "ann-03",
    title: "Guest Lecture: Post-Colonial Narratives in Southeast Asian Modernism",
    date: "10 March 2026",
    category: "Event",
    summary: "Featuring guest scholar Dr. H. Soemardjo discussing spatial isolation and cultural resistance in 20th-century Indonesian and Southeast Asian fiction.",
    location: "PresUniv Main Conference Hall & Zoom Live",
    deadline: "09 March 2026",
    urgent: false
  },
  {
    id: "ann-04",
    title: "Publication Release: 'Resonance' PLRC Annual Poetry & Short Fiction Anthology",
    date: "18 February 2026",
    category: "Publication",
    summary: "The 2026/2027 edition of 'Resonance' featuring 34 student authors from President University is now available for open download in PDF and physical print at the PLRC Library.",
    location: "PLRC Library & Web Archive",
    urgent: false
  }
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/plrc_presuniv",
  instagramHandle: "@plrc_presuniv",
  email: "plrc.presidentuniv@gmail.com",
  secondaryEmail: "plrc.presidentuniv@gmail.com",
  location: "President University Campus, Jl. Ki Hajar Dewantara, Kota Jababeka, Cikarang, Jawa Barat 17550",
  room: "Student Center & Research Lab, Building B, 2nd Floor"
};

export const CONTACT_PERSONS: ContactPerson[] = [
  {
    id: "cp-1",
    name: "Rizkha Ramadhani Hafifah",
    role: "Chairperson & Founder",
    department: "Executive Leadership",
    email: "rizkha.ramadhani@student.president.ac.id",
    phone: "+62 812-8921-7701",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    scope: "Institutional partnerships, high-level collaborations, and university administration liaison."
  },
  {
    id: "cp-2",
    name: "Aryah Julio Miracle Kaensige",
    role: "Vice Chairperson",
    department: "Executive Operations",
    email: "aryakaensigee@gmail.com",
    phone: "+62 821-3456-7890",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    scope: "Operational coordination, event planning, cross-club initiatives, and sponsorship proposals."
  },
  {
    id: "cp-3",
    name: "Dr. Ryan Wijaya",
    role: "Head of Academic & Capacity Building",
    department: "Research & Academic Division",
    email: "ryan.wijaya@student.president.ac.id",
    phone: "+62 813-1122-3344",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    scope: "Joint research projects, student paper peer reviews, workshop facilitation, and keynote invitations."
  },
  {
    id: "cp-4",
    name: "Ananya Sharma",
    role: "Head of PR & Partnership",
    department: "Public Relations Division",
    email: "ananya.sharma@student.president.ac.id",
    phone: "+62 815-5566-7788",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    scope: "Media relations, external publication interviews, corporate sponsorships, and campus roadshows."
  }
];

export const OPPORTUNITY_ITEMS: OpportunityItem[] = [
  {
    id: "opp-1",
    title: "Joint Academic Research & Co-Authorship",
    category: "Academic Partnership",
    description: "Collaborate with PLRC student scholars on multidisciplinary research papers, qualitative analysis, and literature reviews targeting international indexed journals and conferences.",
    requirements: ["Undergraduate / Postgraduate student or faculty", "Proposal synopsis (300 words)", "Commitment to 3-month research cycle"],
    contactEmail: "plrc.presidentuniv@gmail.com",
    status: "Open"
  },
  {
    id: "opp-2",
    title: "Event Sponsorship & Brand Integration",
    category: "Corporate & Community",
    description: "Partner with our flagship events including the Annual Synthesis Literature Conference, National Student Research Championship, and Creative Writing Festivals reaching 2,000+ university students.",
    requirements: ["Organization / Company brand alignment", "Educational or youth-oriented focus", "Media kit review"],
    contactEmail: "plrc.presidentuniv@gmail.com",
    status: "Rolling"
  },
  {
    id: "opp-3",
    title: "Guest Speaker & Masterclass Facilitator",
    category: "Knowledge Exchange",
    description: "Share your expertise in literature criticism, digital humanities, creative writing, academic publishing, or AI-assisted research methodologies with our active student community.",
    requirements: ["Subject-matter experience", "1-hour interactive lecture or 2-hour hands-on workshop format"],
    contactEmail: "plrc.presidentuniv@gmail.com",
    status: "Rolling"
  },
  {
    id: "opp-4",
    title: "Call for Papers & Anthology Submissions",
    category: "Publication",
    description: "Submit original short essays, poetry, literary criticism, or research manuscripts to be featured in the peer-reviewed Synthesis Review Journal and the PresUniv Literary Anthology.",
    requirements: ["Double-blind peer review readiness", "Original unpublished work", "APA/MLA citation format"],
    contactEmail: "plrc.presidentuniv@gmail.com",
    status: "Ongoing"
  }
];

