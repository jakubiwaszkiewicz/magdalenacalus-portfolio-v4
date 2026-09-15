export const site = {
  name: "Magdalena Całus",
  shortName: "M. CAŁUS",
  role: "Architect",
  status: "Open to Architecture's Assistant and Junior Architect roles",
  location: "Copenhagen, Denmark",
  email: "magdalena.calus21@gmail.com",
  phone: "+48 533 143 728",
  linkedin: "https://www.linkedin.com/in/magdalena-całus-68bba2294/",
  instagram: "https://www.instagram.com/calu.sfx/",
}

export const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const

export type ProjectCategory =
  | "academic"
  | "work"
  | "drawing"
  | "sculptures"
  | "digital"
  | "painting"

  export type Project = {
  slug: string
  title: string
  categories: ProjectCategory[]
  featured: boolean
  year: string
  location: string
  type: string
  role: string
  tools: string[]
  description: string[]
  cover: string
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: "self-help-center",
    title: "Self-Help Center",
    categories: ["academic"],
    featured: true,
    year: "Bachelor’s project",
    location: "Upper Silesia, Poland",
    type: "Adaptive reuse",
    role: "Individual",
    tools: ["Archicad", "Drawing"],
    description: [
      "A self-help centre for people experiencing homelessness — an intermediate stage between homelessness and full social reintegration.",
      "The project is an adaptive reuse of a historic Upper Silesian railway station, currently neglected and among the oldest of its kind in Poland. The historic volume is restored; a contemporary extension is added without dominating the monument.",
      "The central nave holds communal spaces, consultation rooms, and social services. One wing provides emergency accommodation; the other residential units with a shared kitchen, lounge, and a greenhouse for gardening and partial self-sufficiency. Workshops and food pavilions take the form of railway carriages.",
    ],
    cover: "/projects/self-help-center/cover.jpg",
    gallery: [
      "/projects/self-help-center/cover.jpg",
      "/projects/self-help-center/01.jpg",
      "/projects/self-help-center/02.jpg",
      "/projects/self-help-center/03.jpg",
    ],
  },
  {
    slug: "elderberry",
    title: "Under the Elderberry",
    categories: ["academic"],
    featured: true,
    year: "2nd semester",
    location: "Odra River, Poland",
    type: "Housing module",
    role: "Individual",
    tools: ["Archicad", "Drawing"],
    description: [
      "A complex of modular assisted-living units along the Odra, close to the city centre and public transport, in a quiet, low-traffic area.",
      "Buildings are fully accessible. The modular system allows flexible layouts: a unit for a resident with an assistant, two modules joined for a family, or single occupancy for people who do not need assistance.",
    ],
    cover: "/projects/elderberry/cover.jpg",
    gallery: [
      "/projects/elderberry/cover.jpg",
      "/projects/elderberry/01.jpg",
      "/projects/elderberry/02.jpg",
      "/projects/elderberry/03.jpg",
    ],
  },
  {
    slug: "photosensitive",
    title: "Photosensitive",
    categories: ["academic"],
    featured: true,
    year: "3rd semester",
    location: "Poland",
    type: "Single-family house",
    role: "Individual",
    tools: ["Archicad", "Drawing"],
    description: [
      "A single-family house designed for a client with photophobia. Daytime living sits on the north side for soft, indirect light; the night-time private zone faces south, with small openings to limit glare.",
      "The layout and façade follow functional and sensory needs. Proportions use the golden ratio. The façade is built from reclaimed demolition brick on a load-bearing masonry structure.",
    ],
    cover: "/projects/photosensitive/cover.jpg",
    gallery: [
      "/projects/photosensitive/cover.jpg",
      "/projects/photosensitive/01.jpg",
      "/projects/photosensitive/02.jpg",
    ],
  },
  {
    slug: "sensorium",
    title: "Sensorium",
    categories: ["academic"],
    featured: true,
    year: "4th semester",
    location: "Stabłowice, Wrocław",
    type: "Kindergarten",
    role: "Individual",
    tools: ["Archicad", "Drawing"],
    description: [
      "A sensory kindergarten accessible regardless of ability. The design works with natural methods: activity rooms, therapy rooms, courtyards, and quiet zones, open to the outdoors.",
      "The building form refers to the historical housing estate in Stabłowice, expressed through a contemporary arched window motif. Sheltered courtyards offer withdrawal for overstimulated children.",
    ],
    cover: "/projects/sensorium/cover.jpg",
    gallery: [
      "/projects/sensorium/cover.jpg",
      "/projects/sensorium/01.jpg",
      "/projects/sensorium/02.jpg",
    ],
  },
  {
    slug: "nursing-home",
    title: "Nursing Home",
    categories: ["work"],
    featured: true,
    year: "Work project",
    location: "Szklarska Poręba / Izera Mountains",
    type: "Care home",
    role: "Individual, under studio supervision",
    tools: ["Archicad", "Documentation"],
    description: [
      "A residential care home for the elderly near the Izera Mountains. Traditional masonry, two storeys, no basement.",
      "The ground floor holds residential modules for people with reduced mobility, a public dining hall with kitchen, and day-care for those who do not need 24-hour residence. The first floor has a common room and a medical suite.",
      "The entrance is marked with a colour accent for wayfinding. The form refers to the former mountain lodge Dachsbaude and the regional architecture of Szklarska Poręba.",
    ],
    cover: "/projects/nursing-home/cover.jpg",
    gallery: [
      "/projects/nursing-home/cover.jpg",
      "/projects/nursing-home/01.jpg",
    ],
  },
  {
    slug: "example",
    title: "Example Project",
    categories: ["academic"],
    featured: false,
    year: "Example",
    location: "Poland",
    type: "Study",
    role: "Individual",
    tools: ["Archicad"],
    description: [
      "Placeholder project — swap this entry for other work that should sit outside Featured.",
    ],
    cover: "/projects/example/cover.jpg",
    gallery: ["/projects/example/cover.jpg"],
  },
]

export type ProjectView = "featured" | "all" | ProjectCategory

export const viewLabels: Record<ProjectView, string> = {
  featured: "Featured",
  all: "All",
  academic: "Academic",
  work: "Work",
  drawing: "Drawing",
  sculptures: "Sculptures",
  digital: "Digital",
  painting: "Painting",
}

export const featuredProjects = projects.filter((project) => project.featured)

export type ExperienceType = "work" | "freelance"

export type Experience = {
  slug: string
  period: string
  role: string
  organization: string
  location?: string
  type: ExperienceType
  highlights: string[]
  tags: string[]
}

export const experienceTypeLabels: Record<ExperienceType, string> = {
  work: "Practice",
  freelance: "Freelance",
}

export const experience = {
  eyebrow: "Experience",
  title: "Studios and project work",
  intro:
    "From conceptual design to permits and construction documentation — housing, care facilities, industrial buildings, conservation, and refurbishment.",
  entries: [
    {
      slug: "inpronaft",
      period: "May 2025 – Present",
      role: "Engineer's Assistant",
      organization: "Inpronaft",
      type: "work",
      highlights: [
        "Prepared technical drawings and project documentation.",
        "Resolved design issues and co-developed installation projects for industrial facilities.",
      ],
      tags: ["Technical drawings", "Industrial"],
    },
    {
      slug: "freelance-structural",
      period: "Nov 2024 – Present",
      role: "Cooperation with a Structural Engineer",
      organization: "Freelance",
      location: "Strzegom / Wrocław",
      type: "freelance",
      highlights: [
        "Designed a single-family house within a residential-service complex in Strzegom (in progress).",
        "Conservation project of a tenement façade in Wrocław (in progress).",
        "Alteration projects, inventories, and 3D modelling.",
      ],
      tags: ["Architecture", "3D modelling"],
    },
    {
      slug: "archilupus",
      period: "Oct 2025 – Jul 2026",
      role: "Junior Architect",
      organization: "Archilupus",
      type: "work",
      highlights: [
        "Led projects under supervision, from conceptual work through administrative procedures and contact with investors.",
        "Submitted a building project for housing and care facilities.",
      ],
      tags: ["BIM", "Archicad"],
    },
    {
      slug: "brown-project",
      period: "May 2025 – Jan 2026",
      role: "Architect's Assistant",
      organization: "BROWN Project",
      type: "work",
      highlights: [
        "Co-created architectural concepts, drawings, details, and construction documentation.",
        "Worked on permit submissions and regulatory compliance across housing, senior care, industrial, and refurbishment projects.",
      ],
      tags: ["Architecture", "Documentation"],
    },
    {
      slug: "ozone-architects",
      period: "Jun 2024 – Jul 2025",
      role: "Architect's Assistant",
      organization: "Ozone Architects",
      type: "work",
      highlights: [
        "Participated in conceptual design and conducted analyses.",
        "Created 3D models, visualizations, and graphic editing for housing, service, industrial, and conservation projects.",
      ],
      tags: ["BIM", "Visualization"],
    },
  ] satisfies Experience[],
}

export type EducationType = "masters" | "bachelors"

export type Education = {
  slug: string
  period: string
  degree: string
  school: string
  location: string
  type: EducationType
  highlights: string[]
  tags: string[]
}

export const educationTypeLabels: Record<EducationType, string> = {
  masters: "Master’s",
  bachelors: "Bachelor’s",
}

export const education = {
  eyebrow: "Education",
  title: "Studies in architecture",
  intro:
    "A bachelor’s degree from Wrocław and a master’s in Spatial Ecologies at the Royal Danish Academy.",
  entries: [
    {
      slug: "royal-danish-academy",
      period: "Present",
      degree: "MA Architecture, Spatial Ecologies Programme",
      school: "Royal Danish Academy",
      location: "Copenhagen, Denmark",
      type: "masters",
      highlights: [
        "Currently enrolled in the Spatial Ecologies master’s programme.",
      ],
      tags: ["Architecture", "Spatial Ecologies"],
    },
    {
      slug: "wroclaw-university",
      period: "Bachelor’s degree",
      degree: "Bachelor’s in Architecture",
      school: "Wrocław University of Science and Technology",
      location: "Wrocław, Poland",
      type: "bachelors",
      highlights: [
        "Graduated with a Bachelor’s in Architecture.",
      ],
      tags: ["Archicad", "Architecture"],
    },
  ] satisfies Education[],
}

export type AchievementType = "award" | "competition" | "exhibition" | "scholarship"

export type Achievement = {
  slug: string
  year: string
  title: string
  organization: string
  type: AchievementType
  description: string
}

export const achievementTypeLabels: Record<AchievementType, string> = {
  award: "Award",
  competition: "Competition",
  exhibition: "Exhibition",
  scholarship: "Scholarship",
}

export const achievements = {
  eyebrow: "Achievements",
  title: "Awards, exhibitions, and distinctions",
  intro:
    "Selected recognitions from studios, competitions, and university work.",
  entries: [
    {
      slug: "dean-list",
      year: "2024",
      title: "Dean’s List",
      organization: "[University Name]",
      type: "award",
      description:
        "Recognised for academic work in the design studio and a consistent set of presentation boards.",
    },
    {
      slug: "urban-ideas-shortlist",
      year: "2023",
      title: "Shortlisted — Urban Ideas",
      organization: "National Architecture Foundation",
      type: "competition",
      description:
        "Team entry for a waterfront public space. Concept shortlisted in the national student category.",
    },
    {
      slug: "faculty-exhibition",
      year: "2023",
      title: "Faculty Exhibition",
      organization: "School of Architecture",
      type: "exhibition",
      description:
        "Selected drawings and a physical model from the housing studio shown in the end-of-year exhibition.",
    },
    {
      slug: "merit-scholarship",
      year: "2022",
      title: "Merit Scholarship",
      organization: "[University Name]",
      type: "scholarship",
      description:
        "Support for studies awarded on academic results and a portfolio of first-year studio work.",
    },
  ] satisfies Achievement[],
}

export type InvolvementType = "club" | "organization" | "volunteer"

export type Involvement = {
  slug: string
  period: string
  title: string
  organization: string
  type: InvolvementType
  description: string
}

export const involvementTypeLabels: Record<InvolvementType, string> = {
  club: "Student club",
  organization: "Organization",
  volunteer: "Volunteer",
}

export const involvement = {
  eyebrow: "Extra involvement",
  title: "Student clubs and organisations",
  intro:
    "Student's clubs, student societies, and other work alongside studios and internships.",
  entries: [
    {
      slug: "architecture-circle",
      period: "[Years]",
      title: "[Student research club]",
      organization: "[ Student's club / university society]",
      type: "club",
      description:
        "Replace with the real club name, role, and what Magdalena organised or designed there.",
    },
    {
      slug: "student-organization",
      period: "[Years]",
      title: "[Organisation / role]",
      organization: "[Organisation name]",
      type: "organization",
      description:
        "Workshops, exhibitions, or other extra involvement — swap this placeholder for a real entry.",
    },
    {
      slug: "volunteer-work",
      period: "[Years]",
      title: "[Volunteer / other]",
      organization: "[Organisation or event]",
      type: "volunteer",
      description:
        "A third slot for volunteering, workshops, or other extra involvement.",
    },
  ] satisfies Involvement[],
}

export const contact = {
  eyebrow: "Contact",
  title: "Let’s talk about a job or a project",
  intro:
    "I am happy to share a full portfolio PDF, CV, or to talk about Architecture's Assistant and Junior Architect roles.",
  linkedinLabel: "LinkedIn",
  instagramLabel: "Instagram",
  mailSubject: "Portfolio enquiry from",
  form: {
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@studio.com",
    message: "Message",
    messagePlaceholder: "A short note about the role or collaboration.",
    submit: "Send message",
    submitAgain: "Open mail app again",
    thanks: "Your mail app should open with a message to",
  },
}

export const about = {
  eyebrow: "About",
  title: "Architecture from people, for people",
  paragraphs: [
    "I aim to design spaces that are as accessible as possible to everyone. I believe architecture can break down barriers. My future goal is to specialize in social architecture. I would love to contribute to creating spaces without obstacles — from people, for people. Personally, I am passionate about art and creating it.",
    "I graduated with a Bachelor’s in Architecture from Wrocław University of Science and Technology and I am currently enrolled in the MA in Architecture, Spatial Ecologies Programme at the Royal Danish Academy.",
  ],
  portrait: "/portrait.jpg",
  facts: [
    { label: "Based in", value: "Copenhagen, Denmark" },
    { label: "Studies", value: "MA Architecture, Spatial Ecologies Programme, Royal Danish Academy" },
    { label: "Degree", value: "Bachelor’s in Architecture, Wrocław University of Science and Technology" },
    { label: "Looking for", value: "Junior Architect / Architecture's Assistant" },
  ],
}
