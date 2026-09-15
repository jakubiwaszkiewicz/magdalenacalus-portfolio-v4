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
      "The Self-Help Center for People Experiencing Homelessness is designed to create an intermediate stage between homelessness and full social reintegration. The project involves the adaptive reuse and restoration of the historic Upper Silesian Railway Station, currently in a state of neglect, which is the oldest railway station building of its kind in Poland.",
      "The proposed site development is inspired by the site’s railway heritage. A series of pavilion structures, including food service facilities as well as workshop and craft spaces, are designed in the form of railway carriages.",
      "The historic section of the building has been carefully restored and complemented by a contemporary extension. The new addition is intentionally designed not to dominate the existing structure in terms of form, scale, or shape, creating a clear contrast while simultaneously emphasizing the historical value of the monument.",
      "The central nave forms the heart of the social reintegration process. It accommodates shared communal spaces, medical consultation rooms, psychological counselling facilities, social services offices, and bathing facilities.",
      "The right nave is designated as the emergency accommodation zone. This area incorporates a system of stacked sleeping pods, providing temporary shelter for people in immediate need.",
      "The left nave serves as the residential section, above which a greenhouse is located. The residential units are connected by a large shared kitchen and a communal lounge area. The greenhouse is intended to support the daily operation and partial self-sufficiency of the center while also encouraging residents’ engagement through gardening and cultivation activities.",
      "The existing building features a traditional load-bearing masonry structure that has been restored and structurally reinforced with reinforced concrete elements and steel members where required. The newly added upper extension is constructed using timber.",
    ],
    cover: "/projects/self-help-center/cover.jpg",
    gallery: [
      "/projects/self-help-center/cover.jpg",
      "/projects/self-help-center/01.png",
      "/projects/self-help-center/02.png",
      "/projects/self-help-center/03.jpg",
      "/projects/self-help-center/04.png",
      "/projects/self-help-center/05.png",
      "/projects/self-help-center/06.png",
      "/projects/self-help-center/07.png",
      "/projects/self-help-center/08.png",
      "/projects/self-help-center/09.png",
    ],
  },
  {
    slug: "elderberry",
    title: "Under the Elderberry",
    categories: ["academic"],
    featured: true,
    year: "2nd semester",
    location: "Oder River, Poland",
    type: "Housing module",
    role: "Individual",
    tools: ["Archicad", "Drawing"],
    description: [
      "A complex of modular assisted housing units, located along the Oder River in close proximity to the city center. The site is well connected to public transportation, with tram and bus stops within walking distance. The development is situated in a quiet, low-traffic area while maintaining strong functional and spatial integration with the urban structure.",
      "All buildings are fully accessible and designed in accordance with universal design principles, ensuring usability for people with disabilities. The modular construction system allows for flexible spatial configurations and adaptation to individual user needs. The design enables the integration of an auxiliary residential unit for an assistant adjacent to the primary resident’s dwelling, as well as the combination of two modules to form a larger unit suitable for a family with children. Single-occupancy units for residents who do not require assistance are also provided.",
      "The project aims to emphasize the importance of inclusive urban planning by addressing the housing needs of people with disabilities and their assistants within the contemporary urban fabric.",
    ],
    cover: "/projects/elderberry/cover.png",
    gallery: [
      "/projects/elderberry/cover.png",
      "/projects/elderberry/01.png",
      "/projects/elderberry/02.png",
      "/projects/elderberry/03.png",
      "/projects/elderberry/04.png",
      "/projects/elderberry/05.png",
      "/projects/elderberry/06.png",
      "/projects/elderberry/07.png",
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
      "A single-family residential house designed in response to the specific and atypical needs of the homeowner. The client suffers from photophobia, a condition causing significant discomfort when exposed to light, particularly direct sunlight. As a result, the building was conceived to minimize daylight penetration and reduce glare within the interior spaces.",
      "This requirement directly influenced the unconventional orientation of the house. The daytime living zone is located on the northern side of the building, allowing for soft, indirect natural light, while the nighttime private zone is positioned on the southern side and illuminated through relatively small window openings to limit solar exposure. The spatial layout and façade articulation are therefore directly driven by functional and sensory considerations.",
      "The project also emphasizes the application of the golden ratio in the proportions of the building mass. This principle is echoed in the design of a custom light fixture, which mirrors the geometric form of the house, reinforcing the compositional harmony between the architectural volume and its interior elements.",
      "In line with the concept of reusing materials and extending their lifecycle, the façade is constructed using reclaimed demolition brick. The structural system is traditional, based on load-bearing brick masonry, ensuring durability and material continuity with the external envelope.",
    ],
    cover: "/projects/photosensitive/cover.png",
    gallery: [
      "/projects/photosensitive/cover.png",
      "/projects/photosensitive/01.png",
      "/projects/photosensitive/02.png",
      "/projects/photosensitive/03.png",
      "/projects/photosensitive/04.png",
      "/projects/photosensitive/05.png",
      "/projects/photosensitive/06.png",
      "/projects/photosensitive/07.png",
      "/projects/photosensitive/08.png",
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
      "Sensory Kindergarten. Accessible to everyone, regardless of their level of ability.",
      "The design emphasizes the child’s development through natural and healthy methods: by stimulating their senses through exposure to neutral stimuli.",
      "The kindergarten is equipped with activity rooms, experiential rooms, psychological offices, a speech therapy office, a rehabilitation room, as well as courtyards and quiet zones for rest and relaxation. Part of the facility is also open to the outdoors, allowing children from outside the kindergarten to benefit from its amenities.",
      "The building form refers to the historical context of the housing estate in the surrounding Stabłowice District; however, it is expressed through a contemporary interpretation. This is reflected in the arched shape of the windows.",
      "An important role is also given to the possibility of calming and withdrawing for overstimulated children. Courtyards with sheltered, secluded spaces are provided, and quiet zones are also incorporated within the activity rooms.",
      "The building is fully adapted for people with disabilities.",
    ],
    cover: "/projects/sensorium/cover.jpg",
    gallery: [
      "/projects/sensorium/cover.jpg",
      "/projects/sensorium/01.jpg",
      "/projects/sensorium/02.jpg",
      "/projects/sensorium/03.jpg",
      "/projects/sensorium/04.jpg",
      "/projects/sensorium/05.jpg",
      "/projects/sensorium/06.jpg",
      "/projects/sensorium/07.jpg",
      "/projects/sensorium/08.jpg",
      "/projects/sensorium/09.jpg",
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
      "A residential care home for the elderly, located in the immediate vicinity of the Izera Mountains. The building is designed in a traditional masonry construction system. It is a two-storey structure without a basement. The ground floor accommodates residential modules for persons with reduced mobility and bedridden residents. It also contains a publicly accessible dining hall with a kitchen back-of-house area, as well as a day-care room for patients who do not require 24-hour care or permanent residence in the facility.",
      "The first floor includes a common room and a medical suite consisting of a doctor’s office and a nursing station. The main entrance is visually emphasized with a colored accent to improve wayfinding and spatial orientation for residents.",
      "The architectural form of the building refers to the former German mountain lodge “Dachsbaude,” which previously existed on the site, as well as to the regional architectural context of Szklarska Poręba and surrounding mountain shelters.",
      "The project was designed individually, however with supervision and advice from more experienced architects in the studio.",
    ],
    cover: "/projects/nursing-home/cover.jpg",
    gallery: [
      "/projects/nursing-home/cover.jpg",
      "/projects/nursing-home/01.jpg",
      "/projects/nursing-home/02.jpg",
      "/projects/nursing-home/03.jpg",
      "/projects/nursing-home/04.jpg",
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
      location: "Poland, Weoc",
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
  logo: string
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
      degree: "Master of Architecture, Spatial Ecologies",
      school: "Royal Danish Academy",
      location: "Copenhagen, Denmark",
      type: "masters",
      
      logo: "/educational/kadk_logo.jpg",
      highlights: [
        "Currently enrolled in the Spatial Ecologies master’s programme.",
      ],
      tags: ["Architecture", "Spatial Ecologies"],
    },
    {
      slug: "wroclaw-university",
      period: "Bachelor’s degree",
      degree: "Bachelor of Architecture",
      school: "Wrocław University of Science and Technology",
      location: "Wrocław, Poland",
      type: "bachelors",
      logo: "/educational/pwr_logo.jpg",
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
