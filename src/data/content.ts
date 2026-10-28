export const site = {
  name: "Magdalena Całus",
  shortName: "M. CAŁUS",
  role: "Architect",
  status: "Open to Junior Architect, Student Architect or Architect's Assistant roles",
  location: "Copenhagen, Denmark",
  email: "magdalena.calus21@gmail.com",
  phone: "+48 533 143 728",
  linkedin: "https://www.linkedin.com/in/magdalena-całus-68bba2294/",
  instagram: "https://www.instagram.com/calu.sfx/",
}

export const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const

export type ProjectCategory = "architecture" | "art"

export type ProjectSubcategory =
  | "academic"
  | "contests"
  | "work"
  | "painting"
  | "sculpture"
  | "digital"

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  subcategory: ProjectSubcategory
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
    title: "Self-Help Center for People Experiencing Homelessness",
    category: "architecture",
    subcategory: "academic",
    featured: true,
    year: "Bachelor’s project",
    location: "Wrocław, Poland",
    type: "Adaptive reuse",
    role: "Individual",
    tools: ["Archicad", "Free-hand drawing", "Procreate"],
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
    category: "architecture",
    subcategory: "academic",
    featured: true,
    year: "2nd semester",
    location: "Oder River, Wrocław, Poland",
    type: "Housing module",
    role: "Individual",
    tools: ["Archicad", "Free-hand drawing", "Procreate", "Revit"],
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
    category: "architecture",
    subcategory: "academic",
    featured: true,
    year: "3rd semester",
    location: "Wrocław, Poland",
    type: "Single-family house",
    role: "Individual",
    tools: ["Archicad", "Free-hand drawing", "Procreate"],
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
    category: "architecture",
    subcategory: "academic",
    featured: true,
    year: "4th semester",
    location: "Stabłowice, Wrocław, Poland",
    type: "Kindergarten",
    role: "Individual",
    tools: ["Archicad", "Free-hand drawing", "Procreate"],
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
    category: "architecture",
    subcategory: "work",
    featured: true,
    year: "Work project",
    location: "Szklarska Poręba, Poland",
    type: "Care facility",
    role: "Individual, under studio supervision",
    tools: ["Archicad", "AutoCAD"],
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
    slug: "jelenia-gora",
    title: "New Celviskosa",
    category: "architecture",
    subcategory: "academic",
    featured: true,
    year: "Team project",
    location: "Jelenia Góra, Poland",
    type: "Urban design",
    role: "With Paweł Dąbrowski and Zuzanna Słabicka",
    tools: [],
    description: [
      "An urban design project located in Jelenia Góra, Poland, in close proximity to industrial areas. Developed collaboratively with Paweł Dąbrowski and Zuzanna Słabicka.",
      "The main objective of the project was to create a welcoming living environment that would encourage people to settle in a city experiencing population decline. An important aspect was also to isolate the proposed development from the busy road and adjacent industrial areas.",
      "An additional access road runs along the length of the site. Its winding layout is intended to reduce vehicle speeds and improve safety. Buildings were designed along the industrial edge to serve as an acoustic barrier, protecting the rest of the development from noise.",
      "One of the key elements of the design is a network of green pedestrian routes connecting the proposed development with existing vegetation and a nearby watercourse. The existing water basin was preserved, restored, and incorporated into the overall spatial structure.",
      "Services and educational facilities were located at strategic points across the site — at both ends and in the central area — strengthening the local community hub.",
    ],
    cover: "/projects/new-celviskosa/cover.jpg",
    gallery: [
      "/projects/new-celviskosa/cover.jpg",
      "/projects/new-celviskosa/1.jpg",
      "/projects/new-celviskosa/2.jpg",
      "/projects/new-celviskosa/3.jpg",
      "/projects/new-celviskosa/4.jpg",
      "/projects/new-celviskosa/5.jpg",
      "/projects/new-celviskosa/6.jpg",
      "/projects/new-celviskosa/7.jpg",
    ],
  },
  {
    slug: "jerzmanowo",
    title: "Jerzmanowo",
    category: "architecture",
    subcategory: "academic",
    featured: false,
    year: "",
    location: "Jerzmanowo, Wrocław, Poland",
    type: "Urban design",
    role: "",
    tools: [],
    description: [
      "Urban design project for the development of the Jerzmanowo district in Wrocław, Poland. The main concept was to create a radial spatial structure with clear zoning and a gradual transition in building density and scale. Key radial axes are activated by placing services and amenities along them, creating vibrant public spaces filled with everyday activity. The layout builds upon the existing urban fabric and responds to the site’s topography and other existing conditions.",
    ],
    cover: "/projects/more_district/cover.png",
    gallery: [
      "/projects/more_district/cover.png",
      "/projects/more_district/2.png",
      "/projects/more_district/3.png",
      "/projects/more_district/4.png",
      "/projects/more_district/5.png",
      "/projects/more_district/6.png",
    ],
  },
  {
    slug: "gates",
    title: "Gates",
    category: "art",
    subcategory: "painting",
    featured: false,
    year: "",
    location: "",
    type: "",
    role: "",
    tools: [],
    description: [],
    cover: "/projects/arts/gates/01.jpeg",
    gallery: [
      "/projects/arts/gates/01.jpeg",
      "/projects/arts/gates/02.jpeg",
      "/projects/arts/gates/03.jpeg",
    ],
  },
  {
    slug: "at-uni",
    title: "At Uni",
    category: "art",
    subcategory: "painting",
    featured: false,
    year: "",
    location: "",
    type: "",
    role: "",
    tools: [],
    description: [],
    cover: "/projects/arts/at-uni.png",
    gallery: ["/projects/arts/at-uni.png"],
  },
  {
    slug: "auto-hand",
    title: "Auto-Hand",
    category: "art",
    subcategory: "sculpture",
    featured: false,
    year: "",
    location: "",
    type: "",
    role: "",
    tools: [],
    description: [],
    cover: "/projects/arts/auto-hand.png",
    gallery: ["/projects/arts/auto-hand.png"],
  },
  {
    slug: "harbor",
    title: "Harbor",
    category: "art",
    subcategory: "painting",
    featured: false,
    year: "",
    location: "",
    type: "",
    role: "",
    tools: [],
    description: [],
    cover: "/projects/arts/harbor.png",
    gallery: ["/projects/arts/harbor.png"],
  },
  {
    slug: "ksiaz-castle",
    title: "Książ Castle, Wałbrzych, Poland",
    category: "art",
    subcategory: "painting",
    featured: false,
    year: "",
    location: "",
    type: "",
    role: "",
    tools: [],
    description: [],
    cover: "/projects/arts/ksiaz-castle.png",
    gallery: ["/projects/arts/ksiaz-castle.png"],
  },
  {
    slug: "rhytm",
    title: "Rhytm",
    category: "art",
    subcategory: "sculpture",
    featured: false,
    year: "",
    location: "",
    type: "",
    role: "",
    tools: [],
    description: [],
    cover: "/projects/arts/rhytm.png",
    gallery: ["/projects/arts/rhytm.png"],
  },
  {
    slug: "the-bridge",
    title: "The Bridge",
    category: "art",
    subcategory: "painting",
    featured: false,
    year: "",
    location: "",
    type: "",
    role: "",
    tools: [],
    description: [],
    cover: "/projects/arts/the-bridge.png",
    gallery: ["/projects/arts/the-bridge.png"],
  },
  {
    slug: "walbrzych",
    title: "Wałbrzych, Poland",
    category: "art",
    subcategory: "painting",
    featured: false,
    year: "",
    location: "",
    type: "",
    role: "",
    tools: [],
    description: [],
    cover: "/projects/arts/walbrzych.png",
    gallery: ["/projects/arts/walbrzych.png"],
  },
  {
    slug: "windows",
    title: "Windows",
    category: "art",
    subcategory: "painting",
    featured: false,
    year: "",
    location: "",
    type: "",
    role: "",
    tools: [],
    description: [],
    cover: "/projects/arts/windows.png",
    gallery: ["/projects/arts/windows.png"],
  },
  {
    slug: "wroclaw",
    title: "Wrocław, Poland",
    category: "art",
    subcategory: "painting",
    featured: false,
    year: "",
    location: "",
    type: "",
    role: "",
    tools: [],
    description: [],
    cover: "/projects/arts/wroclaw.png",
    gallery: ["/projects/arts/wroclaw.png"],
  },
]

export type ProjectView = "featured" | ProjectCategory

export const projectFilters = [
  { id: "featured", label: "Featured" },
  {
    id: "architecture",
    label: "Architecture",
    children: [
      { id: "academic", label: "Academic" },
      { id: "contests", label: "Contests" },
      { id: "work", label: "Work" },
    ],
  },
  {
    id: "art",
    label: "Art",
    children: [
      { id: "painting", label: "Painting / drawing" },
      { id: "sculpture", label: "Sculpture" },
      { id: "digital", label: "Digital" },
    ],
  },
] as const

export const subcategoryLabels: Record<ProjectSubcategory, string> = {
  academic: "Academic",
  contests: "Contests",
  work: "Work",
  painting: "Painting / drawing",
  sculpture: "Sculpture",
  digital: "Digital",
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
  title: "Studios & project work",
  intro:
    "From conceptual design to permits and construction documentation - housing, care facilities, industrial buildings, conservation, and refurbishment. Worked both independently and in a team.",
  entries: [
    {
      slug: "freelance-structural",
      period: "Nov 2024 – Present",
      role: "Junior Architect",
      organization: "Olgierd Iwaszkiewicz sole trader",
      location: "Remote, Poland",
      type: "work",
      highlights: [
        "Designed a single-family house within a residential-service complex in Strzegom.",
        "Contributed to the conservation project of a tenement façade in Wrocław.",
        "Alteration projects",
        "Condacted building inventories", 
        "Created 3D models.",
      ],
      tags: ["3D modelling", "ArchiCAD", "AutoCAD", "Conceptual Design", "Technical Documentation"],
    },
    {
      slug: "inpronaft",
      period: "May 2025 – Present",
      role: "Assistant to the Head of Fire Protection Engineering Department",
      organization: "Inpronaft",
      location: "Remote, Poland",
      type: "work",
      highlights: [
        "Prepared technical drawings and project documentation.",
        "Resolved design and technical issues",
        "Co-developed fire proctection projects for industrial facilities.",
      ],
      tags: ["AutoCAD","Technical Drawings", "Fire Protection Systems", "Fire Suppresion Systems", "Microsoft Office", "Business Meetings", "Group Work", "Industrial"],
    },
    {
      slug: "archilupus",
      period: "Oct 2025 – Jul 2026",
      role: "Junior Architect",
      organization: "Archilupus",
      location: "Długołęka, Poland",
      type: "work",
      highlights: [
        "Led projects under supervision, from conceptual work through administrative procedures and contact with investors.",
        "Submitted a building project for housing and care facilities.",
      ],
      tags: ["BIM", "3D modelling", "ArchiCAD", "AutoCAD", "Conceptual Design", "Technical Documentation"],
    },
    {
      slug: "brown-project",
      period: "May 2025 – Jan 2026",
      role: "Architect's Assistant",
      organization: "BROWN Project",
      location: "Wrocław, Poland",
      type: "work",
      highlights: [
        "Co-created architectural concepts, drawings and technical details.",
        "Prepared construction documentation, including permits and submissions.",
        "Ensured comlience with applicable regulations and building standards.",
        "Worked on diverse projects, including housing, senior care, industrial facilities, and refurbishments.",
      ],
      tags: ["3D modelling", "ArchiCAD", "AutoCAD", "Conceptual Design", "Technical Documentation"],
    },
    {
      slug: "ozone-architects",
      period: "Jun 2024 – Jul 2025",
      role: "Architect's Assistant",
      organization: "Ozone Architects",
      type: "work",
      highlights: [
        "Participated in conceptual design and project development.",
        "Conducted architectural analyses.",
        "Created 3D models and visualizations.",
        "Prepared graphic materials and presentations.",
        "Worked on housing, service, industrial and conservation projects.",
      ],
      tags: ["BIM", "3D modelling", "Visualization", "AutoCAD", "Conceptual Design", "Technical Documentation"],
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
  highlights?: string[]
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
      school: "Royal Danish Academy (Det Kongelige Akademi)",
      location: "Copenhagen, Denmark",
      type: "masters",
      logo: "/educational/kadk_logo.jpg",
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
      tags: ["Architecture"],
    },
  ] satisfies Education[],
}

export type AchievementType =
  | "award"
  | "honorable_mention"
  | "competition"
  | "exhibition"
  | "scholarship"

export type AchievementLink = {
  label: string
  href: string
}

export type Achievement = {
  slug: string
  year?: string
  title: string
  organization: string
  type: AchievementType
  description?: string
  links?: AchievementLink[]
}

export const achievementTypeLabels: Record<AchievementType, string> = {
  award: "Award",
  honorable_mention: "Honorable Mention",
  competition: "Competition",
  exhibition: "Exhibition",
  scholarship: "Scholarship",
}

export const achievements: {
  eyebrow: string
  title: string
  intro: string
  entries: Achievement[]
} = {
  eyebrow: "Achievements",
  title: "Awards and distinctions",
  intro: "Selected recognitions from competitions and other work.",
  entries: [
    {
      slug: "compact-city-living",
      title: "Honorable Mention — Compact City Living Competition",
      organization: "Archiol",
      type: "honorable_mention",
      links: [
        {
          label: "Results",
          href: "https://www.archiolcompetitions.com/results/compact_city_living",
        },
        {
          label: "Meet the teams",
          href: "https://www.archiolcompetitions.com/results/compact_city_living/sm-hm",
        },
      ],
    },
    {
      slug: "zamieszkanie-2025",
      title: "Audience Award — A&B Zamieszkanie 2025",
      organization: "Architektura & Biznes",
      type: "award",
      links: [
        {
          label: "Results",
          href: "https://www.architekturaibiznes.pl/zamieszkanie-2025.-wyniki-glosowania-publicznosci,38378.html",
        },
      ],
    },
    {
      slug: "makeup-championships-2020",
      title: "2nd Place — Polish Championships in SFX Makeup",
      organization: "Junior Category",
      type: "award",
    },
  ],
}

export type InvolvementType = "club" | "organization" | "workshop"

export type Involvement = {
  slug: string
  period: string
  title: string
  organization?: string
  type: InvolvementType
  highlights: string[]
}

export const involvementTypeLabels: Record<InvolvementType, string> = {
  club: "Student club",
  organization: "Organization",
  workshop: "Workshop",
}

export const involvement: {
  eyebrow: string
  title: string
  intro: string
  entries: Involvement[]
} = {
  eyebrow: "Extra involvement",
  title: "Student clubs and organisations.",
  intro:
    "Student clubs, student societies, and other involvement.",
  entries: [
    {
      slug: "best-wroclaw",
      period: "10/2022 – 11/2025",
      title: "BEST Wrocław",
      type: "organization",
      highlights: [
        "Vice President for Graphics and Promotion — coordinated a team of 21 people, organized events for ~300 participants",
        "Main Coordinator of BEST Career Week 2024, coordinated a team of 8 people, organized event for ~150 participants",
        "Marketing of BEST Hacks 2023",
        "Graphics of BEST Career Week 2023",
        
      ],
    },
    {
      slug: "students-painting-club",
      period: "10/2023 – 07/2024",
      title: "Student’s Painting Club",
      type: "club",
      highlights: [
        "Plein air painting workshops",
        "Exhibit at a vernissage",
      ],
    },
    {
      slug: "humanization-urban-environment",
      period: "05/2023 – 07/2024",
      title: "RC “Humanization of the Urban Environment”",
      type: "club",
      highlights: [
        "Design of a demonstration track for a Mars rover",
        "Design of a demonstration workshop pavilion",
      ],
    },
    {
      slug: "campus-life-workshop",
      period: "10/2023",
      title: "Architectural Workshop “Campus life” by Kees Christiaanse",
      type: "workshop",
      highlights: [
        "Conceptual project of Wroclaw University of Technology campus, with the tutoring of Kees Christiaanse",
      ],
    },
  ],
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
    { label: "Degree", value: "BA Architecture, Wrocław University of Science and Technology" },
    { label: "Looking for", value: "Junior Architect / Architecture's Assistant" },
  ],
}

export const contact = {
  eyebrow: "Contact",
  title: "Let’s talk about a job or a project",
  intro:
    "I am happy to share more information or to talk about Architecture's Assistant and Junior Architect roles.",
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


