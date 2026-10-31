export const company = {
  name: "Z&M Buildcon LLP",
  email: "zmbuildcon@gmail.com",
  phone: "919067192404",
  phoneDisplay: "+91 90671 92404",
  address: "779, Ratanpur Kheda 387570, Gujarat, India",
  // Add links here once the pages are ready, e.g. { name: "instagram", href: "https://..." }.
  // Supported names: instagram, facebook, linkedin, youtube. The footer hides icons until this has entries.
  socials: [],
};

// wa.me link with a prefilled message.
export const whatsappLink = (text) => `https://wa.me/${company.phone}?text=${encodeURIComponent(text)}`;

// Home hero slides (auto-rotating). `position` is the object-position of the crop.
export const heroSlides = [
  { src: "/work/hero-dusk.jpg", position: "50% 55%" },
  { src: "/work/hero-lounge.jpg", position: "50% 55%" },
  { src: "/work/hero-aerial.jpg", position: "50% 45%" },
];

export const images = {
  about: "/work/about-towers.jpg",
  testimonialBg: "/work/drone-2.jpg",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    key: "turnkey",
    title: "Turnkey Projects",
    short: "Lock & key delivery",
    desc: "Give us the plot and the budget. We take care of design, approvals, construction and interiors, and hand over a ready-to-move-in home.",
    points: ["Design to handover in one contract", "Single point of contact", "Fixed timeline and clear cost"],
  },
  {
    key: "bungalow",
    title: "Bungalows",
    short: "Dream homes, your way",
    desc: "Independent bungalows and villas planned around your family, your Vastu preferences and your lifestyle, with quality finishing throughout.",
    points: ["Custom architectural design", "Vastu-friendly planning", "Premium materials and finishing"],
  },
  {
    key: "building",
    title: "Building Projects",
    short: "Residential and commercial",
    desc: "Apartments, offices, showrooms and mixed-use buildings, planned as per Government GDCR and built with strong structure, proper supervision and on-time delivery.",
    points: ["Planning as per Government GDCR", "Plan passing and approvals", "Structure to finishing, one team"],
  },
  {
    key: "temple",
    title: "Temple Projects",
    short: "All temple services",
    desc: "Complete services for temples, from design and planning to construction and finishing, carried out with care and respect for tradition.",
    points: ["Design and planning as per Vastu", "Construction and finishing", "Complete service, plan to handover"],
  },
  {
    key: "interior",
    title: "Interior",
    short: "Spaces that feel like home",
    desc: "Complete interior solutions for homes and offices, including modular kitchen, wardrobes, false ceiling, lighting and furnishing.",
    points: ["3D design and visualisation", "Modular kitchen and wardrobes", "On-time, neat execution"],
  },
  {
    key: "construction",
    title: "Construction",
    short: "Strong, safe, on-time",
    desc: "RCC and structural construction for houses, shops, offices and commercial buildings with skilled workers and proper site supervision.",
    points: ["Quality-checked materials", "Experienced site supervision", "Milestone-based payments"],
  },
  {
    key: "consultancy",
    title: "Project Consultancy",
    short: "Plan before you build",
    desc: "Expert guidance on building project budgeting, planning as per Government GDCR and plan passing, so that your project stays approved, on budget and on schedule.",
    points: [
      "Building project budgeting and calculation",
      "Planning as per Government GDCR",
      "Plan passing and approvals",
      "Layout and space planning",
      "Site visits and expert advice",
    ],
  },
];

// Project related services, grouped by project stage. Source: ZM_Buildcon_Project_Related_Services.pdf.
export const projectServiceGroups = [
  {
    id: "planning-approvals",
    title: "Planning & Project Approvals",
    items: [
      {
        no: "01",
        title: "Liaisoning & authority coordination",
        desc: "Review available land and project documents; identify approval requirements and maintain an authority submission checklist. Coordinate with the client, appointed professionals and relevant departments for submissions, queries, inspections and follow-up.",
        deliverables: "Document checklist, approval tracker and periodic status updates.",
      },
      {
        no: "02",
        title: "Planning, design, plan passing & RERA coordination",
        desc: "Coordinate project layouts, unit planning, access, parking and common facilities with the architect. Review area statements and applicable development controls with appointed professionals. Coordinate plan-passing submissions and RERA documentation, registration support and information updates, as applicable.",
        deliverables: "Coordinated planning inputs, drawing register and submission schedule.",
      },
      {
        no: "03",
        title: "Area statements & super built-up loading",
        desc: "Check carpet, built-up and common-area calculations against project drawings. Prepare floor-wise and unit-wise area summaries and explain the proposed loading methodology. Keep statutory or RERA carpet-area disclosures separately identified from commercial super built-up calculations.",
        deliverables: "Area calculation sheets, common-area allocation and loading summary.",
      },
      {
        no: "04",
        title: "Project budgeting & cash-flow planning",
        desc: "Develop preliminary and detailed budgets for civil, finishing, MEP and external works from the agreed project scope. Include consultant inputs, allowances and contingencies where agreed. Review expenditure and commitments against the budget and prepare phase-wise funding requirements.",
        deliverables: "Project cost plan, budget comparison and indicative cash-flow schedule.",
      },
    ],
  },
  {
    id: "estimation-tendering",
    title: "Estimation, Tendering & Procurement",
    items: [
      {
        no: "05",
        title: "Quantity calculations, BOQ & material planning",
        desc: "Take off quantities from available drawings for excavation, RCC, reinforcement, masonry, plaster, waterproofing, flooring and other agreed packages. Prepare item descriptions, measurement bases and material requirement estimates; revise calculations when approved drawings change.",
        deliverables: "Quantity sheets, bill of quantities and material requirement summaries.",
      },
      {
        no: "06",
        title: "Tendering & quotation comparison",
        desc: "Prepare tender packages with scope, BOQ, specifications and commercial requirements. Invite quotations from suitable agencies, coordinate clarifications and compare rates, inclusions, exclusions, completion periods and payment terms on a consistent basis.",
        deliverables: "Tender documents, comparative statements and evaluation recommendations.",
      },
      {
        no: "07",
        title: "Contractor selection & work-order coordination",
        desc: "Review contractor experience, resources and suitability for the proposed work. Assist with technical and commercial negotiations and define work boundaries, milestones, billing methods, payment terms, retention, quality requirements and defect obligations for client approval.",
        deliverables: "Contractor recommendation and coordinated draft work order or agreement scope.",
      },
      {
        no: "08",
        title: "Cost optimization & material selection",
        desc: "Review alternative materials, specifications and construction methods with the consultants. Compare cost, durability, maintenance and availability; coordinate samples and vendor offers. Record proposed savings and obtain approval before implementing changes affecting design or performance.",
        deliverables: "Material comparison, sample approval register and value-engineering proposals.",
      },
    ],
  },
  {
    id: "design-site-delivery",
    title: "Design Coordination & Site Delivery",
    items: [
      {
        no: "09",
        title: "Consultant coordination & design review",
        desc: "Coordinate architectural, structural, MEP, fire, landscape and other specialist drawings. Track interfaces, drawing discrepancies and requests for information. Review design options for constructability and cost with the responsible consultants and monitor issue of coordinated construction drawings.",
        deliverables: "Drawing and RFI registers, coordination minutes and design-action tracker.",
      },
      {
        no: "10",
        title: "Construction supervision & progress monitoring",
        desc: "Monitor agreed works against approved drawings, specifications and the programme through scheduled site visits or deployment as appointed. Review workmanship, material approvals, inspection checklists and test records; report defects and follow up corrective actions. Coordinate agencies, review measured work and bills where included, and highlight delays or safety concerns.",
        deliverables: "Site observations, progress reports, quality checklists and action records.",
      },
      {
        no: "11",
        title: "Interior planning & execution coordination",
        desc: "Coordinate space planning, furniture layouts, finishes, ceilings, lighting, electrical points, plumbing and other agreed interior requirements. Assist with material and sample selection, BOQ preparation, agency comparisons and execution sequencing. Review finishing quality and close out snags before handover.",
        deliverables: "Coordinated interior scope, material schedule, budget inputs and snag list.",
      },
    ],
  },
  {
    id: "completion-handover",
    title: "Completion, BU & Society Handover",
    items: [
      {
        no: "12",
        title: "BU permission & completion coordination",
        desc: "Review readiness for Building Use permission with the architect and relevant consultants. Track completion drawings, certificates, structural stability documents, fire and lift approvals, utility requirements and other applicable submissions. Coordinate inspections, observations and compliance closure with the responsible agencies.",
        deliverables: "BU readiness checklist, submission-document tracker and inspection follow-up.",
      },
      {
        no: "13",
        title: "Society handover & project close-out",
        desc: "Coordinate inspection of common areas, utilities and amenities with the client and designated society representatives. Prepare snag and pending-work lists and track closure. Compile available approved drawings, warranties, manuals, test records, asset details and agency contacts; support a documented handover.",
        deliverables: "Handover dossier, asset and document inventory, snag tracker and acknowledgment record.",
      },
    ],
  },
];

export const serviceEngagement = {
  intro:
    "Services may be appointed individually or as an integrated package. The final scope, project stages, staffing or site-visit frequency, timelines, professional fees, taxes and reimbursable expenses will be agreed in the project proposal or work order.",
  notes: [
    "Statutory designs, certifications and submissions requiring professional registration will be undertaken by the appropriately appointed licensed professionals.",
    "Authority fees, statutory charges, specialist consultant fees and contractor payments are payable separately unless expressly included.",
    "Approval decisions and timelines remain subject to the concerned authority.",
    "Each assignment begins with a review of available drawings, project information and client requirements, followed by an agreed scope and delivery schedule.",
  ],
};

// Answers only restate what is already on the Services, Projects and About pages.
export const faqs = [
  {
    q: "What services does Z&M Buildcon LLP offer?",
    a: "We handle turnkey projects, bungalows, building projects, temple projects, interiors, construction and project consultancy, from the first plan to the final handover.",
  },
  {
    q: "What do you take care of on a building project?",
    a: "On projects like Samsara Kalp Vriksh, Link, Khokhara and Kalp Vatrika we take care of planning, budget, liaisoning and supervision, along with other work the project needs.",
  },
  {
    q: "Do you help with plan passing and approvals?",
    a: "Yes. We plan as per Government GDCR and help with plan passing and approvals, so your project stays approved, on budget and on schedule.",
  },
  {
    q: "What is a turnkey (lock and key) project?",
    a: "You give us the plot and the budget. We take care of design, approvals, construction and interiors, and hand over a ready-to-move-in home.",
  },
  {
    q: "How is the cost decided and paid?",
    a: "We prepare the budget and calculation before work starts and share a clear estimate. Payments are milestone-based, with no hidden charges.",
  },
  {
    q: "How do I get started or ask for a quote?",
    a: "Message us on WhatsApp or use the Contact page with your plot details and budget. The first discussion is free, and we will suggest the best plan with a transparent estimate.",
  },
];

export const processSteps = [
  { title: "Consultation", desc: "We understand your needs, plot, budget and timeline in a free discussion." },
  { title: "Design & Planning", desc: "Plans, 3D views and a clear cost estimate are prepared and approved by you." },
  { title: "Construction", desc: "Our team builds with quality materials and regular supervision at every stage." },
  { title: "Interior & Finishing", desc: "Kitchen, woodwork, painting and fittings are completed with neat finishing." },
  { title: "Handover", desc: "After a final quality check, we hand over the keys with complete documentation." },
];

export const values = [
  { title: "Quality First", desc: "Good materials, skilled workers and proper supervision on every site." },
  { title: "Transparent Pricing", desc: "Clear estimates and milestone payments. No hidden charges, ever." },
  { title: "On-time Delivery", desc: "We plan carefully and respect the timeline we promise you." },
  { title: "Client Satisfaction", desc: "Your feedback matters. We stay available even after the handover." },
];

// NOTE: placeholder number, replace with the real count of completed projects.
export const stats = [{ value: "50", label: "Projects Completed" }];

// Photo lists per project, built from the files in public/work.
const work = (key, from, to) => Array.from({ length: to - from + 1 }, (_, i) => `/work/${key}-${from + i}.jpg`);

// NOTE: location, size and budget for the Samsara projects are placeholders until the client sends details.
const samsaraHomes = [
  {
    title: "Samsara Kalp Vriksh",
    city: "Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Residential", "High-rise", "Podium garden"],
    desc: "High-rise residential tower with landscaped garden, sports court and balconies on every floor.",
    price: "On request",
    services: ["Planning", "Budget", "Liaisoning", "Supervision", "Etc."],
    image: "/projects/samsara-kalp-vriksh.jpg",
    photos: [...work("drone", 1, 3), ...work("site", 1, 3), "/work/site-8.jpg", "/work/site-9.jpg"],
  },
  {
    title: "Samsara Link",
    city: null,
    location: "Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Commercial", "High-rise", "Retail podium"],
    desc: "Commercial tower with retail showrooms, a cafe and gym on the podium, and green terraces above.",
    price: "On request",
    services: ["Planning", "Budget", "Liaisoning", "Supervision", "Etc."],
    image: "/projects/samsara-link.jpg",
    photos: ["/work/commercial-1.jpg", "/work/commercial-3.jpg", "/work/commercial-5.jpg"],
  },
  {
    title: "Samsara Khokhara",
    city: null,
    location: "Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Commercial", "Showrooms", "G+1"],
    desc: "Street-front retail showrooms with full-height glass frontage and ample parking.",
    price: "On request",
    services: ["Planning", "Budget", "Liaisoning", "Supervision", "Etc."],
    image: "/projects/samsara-khokhara.jpg",
    photos: ["/work/commercial-2.jpg", "/work/commercial-4.jpg"],
  },
  {
    title: "Samsara Kalp Vatrika",
    city: null,
    location: "Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Residential", "Multi-tower", "Temple on site"],
    desc: "Multi-tower residential complex with green balconies, landscaped frontage and a temple within the campus.",
    price: "On request",
    services: ["Planning", "Budget", "Liaisoning", "Supervision", "Etc."],
    image: "/projects/samsara-kalp-vatrika.jpg",
  },
];

// NOTE: titles below are descriptive placeholders; swap in the real project names and locations when available.
const designHomes = [
  {
    title: "Corner Elevation Bungalow",
    city: null,
    location: "Gujarat",
    type: "Bungalow",
    priceCr: 0,
    meta: ["Residential", "Bungalow", "Double storey"],
    desc: "Double-storey bungalow with a wooden balcony, stone cladding and a terrace, planned for a corner plot.",
    price: "On request",
    image: "/work/bungalow-10.jpg",
    photos: ["/work/bungalow-1.jpg", "/work/bungalow-7.jpg", "/work/bungalow-12.jpg"],
  },
  {
    title: "Single-Storey Modern Home",
    city: null,
    location: "Gujarat",
    type: "Bungalow",
    priceCr: 0,
    meta: ["Residential", "Bungalow", "Ground floor"],
    desc: "Clean, flat-roof home with a wide frontage, covered parking and a landscaped entrance.",
    price: "On request",
    image: "/work/bungalow-2.jpg",
    photos: ["/work/bungalow-6.jpg", "/work/bungalow-5.jpg"],
  },
  {
    title: "Courtyard & Pool Home",
    city: null,
    location: "Gujarat",
    type: "Bungalow",
    priceCr: 0,
    meta: ["Residential", "Bungalow", "Private pool"],
    desc: "Compact modern home planned around a garden, parking and a private pool.",
    price: "On request",
    image: "/work/bungalow-3.jpg",
    photos: ["/work/aerial-3.jpg"],
  },
  {
    title: "Narrow-Plot Duplex",
    city: null,
    location: "Gujarat",
    type: "Bungalow",
    priceCr: 0,
    meta: ["Residential", "Duplex", "Glass balcony"],
    desc: "Duplex designed for a narrow plot, with a glass balcony, warm lighting and a gated entry.",
    price: "On request",
    image: "/work/bungalow-11.jpg",
    photos: ["/work/bungalow-8.jpg", "/work/bungalow-9.jpg"],
  },
  {
    title: "Stone-Clad Elevation Home",
    city: null,
    location: "Gujarat",
    type: "Bungalow",
    priceCr: 0,
    meta: ["Residential", "Bungalow", "Stone cladding"],
    desc: "Modern double-storey home with stone cladding, large windows and a roof terrace.",
    price: "On request",
    image: "/work/bungalow-4.jpg",
  },
  {
    title: "Plot Layout: Pool Home",
    city: null,
    location: "Gujarat",
    type: "Bungalow",
    priceCr: 0,
    meta: ["Plan view", "Bungalow", "Pool & parking"],
    desc: "Aerial plan of a pool home showing the garden, parking bay and compound wall.",
    price: "On request",
    image: "/work/aerial-2.jpg",
  },
  {
    title: "Plan View: Terrace Duplex",
    city: null,
    location: "Gujarat",
    type: "Bungalow",
    priceCr: 0,
    meta: ["Plan view", "Duplex", "Terraces"],
    desc: "Aerial view of a duplex with landscaped terraces and a clean, layered roof plan.",
    price: "On request",
    image: "/work/aerial-1.jpg",
  },
  {
    title: "Plan View: Three-Level Home",
    city: null,
    location: "Gujarat",
    type: "Bungalow",
    priceCr: 0,
    meta: ["Plan view", "Three levels", "Roof terrace"],
    desc: "Aerial view of a three-level home with a wooden deck, planters and roof terrace.",
    price: "On request",
    image: "/work/aerial-4.jpg",
  },
  {
    title: "Luxury Living & Dining",
    city: null,
    location: "Gujarat",
    type: "Interior",
    priceCr: 0,
    meta: ["Residential", "Living room", "Dining"],
    desc: "Open living and dining space with marble flooring, designer lighting and a large window view.",
    price: "On request",
    image: "/work/interior-1.jpg",
  },
  {
    title: "Terrace Lounge Interior",
    city: null,
    location: "Gujarat",
    type: "Interior",
    priceCr: 0,
    meta: ["Residential", "Lounge", "Garden view"],
    desc: "Warm wooden lounge opening onto a glass-fronted terrace and green wall.",
    price: "On request",
    image: "/work/interior-2.jpg",
  },
  {
    title: "Master Bedroom & Lounge",
    city: null,
    location: "Gujarat",
    type: "Interior",
    priceCr: 0,
    meta: ["Residential", "Bedroom", "Wooden panelling"],
    desc: "Bedroom with wooden wall panelling, soft lighting and warm, modern furnishing.",
    price: "On request",
    image: "/work/interior-3.jpg",
  },
  {
    title: "Living & Dining Hall",
    city: null,
    location: "Gujarat",
    type: "Interior",
    priceCr: 0,
    meta: ["Residential", "Living room", "Chandelier"],
    desc: "Large living and dining hall with a statement chandelier and a layered, neutral palette.",
    price: "On request",
    image: "/work/interior-4.jpg",
  },
  {
    title: "Clubhouse & Game Room",
    city: null,
    location: "Gujarat",
    type: "Interior",
    priceCr: 0,
    meta: ["Amenity", "Game room", "Pool table"],
    desc: "Recreation space with a pool table, lounge seating and an open view of the greenery outside.",
    price: "On request",
    image: "/work/interior-5.jpg",
  },
];

// Each part of Kalp Vriksh gets its own card (GPS tags on the site photos put it in Ahmedabad).
const kalpVrikshHomes = [
  {
    title: "Kalp Vriksh: Home Theatre",
    city: "Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Amenity", "Home theatre", "Recliner seating"],
    desc: "Private home theatre with recliner seating, warm accent walls and a lit wooden ceiling.",
    price: "On request",
    image: "/work/kalpvriksh-1.jpg",
    photos: ["/work/kalpvriksh-2.jpg"],
  },
  {
    title: "Kalp Vriksh: Gym & Fitness",
    city: "Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Amenity", "Gym", "Cardio & weights"],
    desc: "Fully equipped gym with treadmills, cycles and weight stations, overlooking the garden.",
    price: "On request",
    image: "/work/kalpvriksh-6.jpg",
  },
  {
    title: "Kalp Vriksh: Lobby & Lounge",
    city: "Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Amenity", "Lobby", "Lounge seating"],
    desc: "Bright lobby and lounge with wooden panelling, linear lighting and comfortable seating.",
    price: "On request",
    image: "/work/kalpvriksh-8.jpg",
    photos: ["/work/kalpvriksh-7.jpg", "/work/kalpvriksh-9.jpg", "/work/site-6.jpg", "/work/site-7.jpg"],
  },
  {
    title: "Kalp Vriksh: Open-Air Lounge",
    city: "Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Amenity", "Outdoor seating", "Evening lighting"],
    desc: "Open-air lounge with designer lamps and cane seating, made for relaxed evenings.",
    price: "On request",
    image: "/work/kalpvriksh-3.jpg",
    photos: ["/work/kalpvriksh-10.jpg"],
  },
  {
    title: "Kalp Vriksh: Indoor Games Hall",
    city: "Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Amenity", "Games hall", "Table tennis"],
    desc: "Spacious indoor games hall with table tennis, foosball and card tables.",
    price: "On request",
    image: "/work/kalpvriksh-12.jpg",
    photos: ["/work/kalpvriksh-11.jpg", "/work/kalpvriksh-13.jpg"],
  },
  {
    title: "Kalp Vriksh: Party Hall",
    city: "Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Amenity", "Party hall", "Seating for events"],
    desc: "Party hall with linear ceiling lights and seating for family functions and get-togethers.",
    price: "On request",
    image: "/work/kalpvriksh-17.jpg",
  },
  {
    title: "Kalp Vriksh: Kids Play Area",
    city: "Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Amenity", "Play area", "Swings & slides"],
    desc: "Safe, cushioned play area with swings, slides and a covered seating gazebo.",
    price: "On request",
    image: "/work/kalpvriksh-16.jpg",
    photos: ["/work/kalpvriksh-15.jpg", "/work/kalpvriksh-4.jpg"],
  },
  {
    title: "Kalp Vriksh: Garden & Walkways",
    city: "Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Amenity", "Landscaping", "Lit walkways"],
    desc: "Landscaped central garden with lit stone walkways and a gazebo between the towers.",
    price: "On request",
    image: "/work/kalpvriksh-5.jpg",
    photos: ["/work/kalpvriksh-14.jpg", "/work/drone-7.jpg", "/work/drone-10.jpg", "/work/drone-11.jpg"],
  },
  {
    title: "Kalp Vriksh: Aerial Garden View",
    city: "Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Aerial view", "Podium garden", "Sports court"],
    desc: "Drone view of the podium garden, play area and sports court between the towers.",
    price: "On request",
    image: "/work/drone-4.jpg",
    photos: ["/work/drone-5.jpg", "/work/drone-8.jpg", "/work/drone-9.jpg"],
  },
  {
    title: "Kalp Vriksh: Temple",
    city: "Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Amenity", "Temple", "Within the campus"],
    desc: "Dedicated temple built inside the society campus, between the residential towers.",
    price: "On request",
    image: "/work/drone-6.jpg",
  },
  {
    title: "Kalp Vriksh: Lift Lobby & Corridors",
    city: "Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Building Project",
    priceCr: 0,
    meta: ["Residential", "Corridors", "Premium finish"],
    desc: "Marble-floored corridors with dark stone cladding, wooden panels and cove lighting.",
    price: "On request",
    image: "/work/site-4.jpg",
    photos: ["/work/site-5.jpg"],
  },
];

export const homes = [...samsaraHomes, ...kalpVrikshHomes, ...designHomes];

// Real Z&M photos used as page banners (index order is relied on by the pages).
export const banners = ["/work/commercial-1.jpg", "/work/bungalow-1.jpg", "/work/site-6.jpg", "/work/interior-1.jpg"];

// Real work photos shown in the gallery on /projects. Site photos are from the finished Kalp Vriksh tower.
export const workVideo = "/work/project-video.mp4";

export const workGallery = [
  { key: "kalpvriksh", title: "Samsara Kalp Vriksh: Amenities & Interiors", tab: "Kalp Vriksh: Amenities", count: 17 },
  { key: "drone", title: "Samsara Kalp Vriksh: Aerial Views", tab: "Kalp Vriksh: Aerial", count: 11 },
  { key: "site", title: "On Site: Samsara Kalp Vriksh", tab: "On Site", count: 9 },
  { key: "commercial", title: "Commercial & Retail", tab: "Commercial", count: 5 },
  { key: "bungalow", title: "Bungalows", tab: "Bungalows", count: 12 },
  { key: "interior", title: "Interiors", tab: "Interiors", count: 5 },
  { key: "aerial", title: "Plans & Aerial Views", tab: "Plans & Aerial", count: 4 },
].map((g) => ({
  title: g.title,
  tab: g.tab,
  images: Array.from({ length: g.count }, (_, i) => `/work/${g.key}-${i + 1}.jpg`),
}));

// NOTE: sample reviews, replace with real client feedback. Add an `avatar` URL to show a photo instead of initials.
export const testimonials = [
  {
    title: "Our bungalow was ready on time",
    text: "We wanted to build our dream bungalow in Nadiad and Z&M Buildcon handled everything from the plan to the final handover. The quality of work is very good and they finished exactly on the promised date. Highly recommended.",
    name: "Rajesh Patel",
    role: "Bungalow Owner, Nadiad",  },
  {
    title: "True lock and key service",
    text: "We just gave them the plot and the budget, and they took care of the rest: design, approvals, construction and interiors. No tension at all. When we got the keys, the house was completely ready to move in.",
    name: "Kinjal Shah",
    role: "Turnkey Client, Anand",  },
  {
    title: "Beautiful interior, within budget",
    text: "The team understood our taste and designed a lovely interior for our 3 BHK flat. Modular kitchen, wardrobes and the false ceiling all came out very well. Work was neat and finished in 60 days.",
    name: "Hardik Desai",
    role: "Interior Client, Ahmedabad",
  },
  {
    title: "Honest advice, transparent pricing",
    text: "Before starting, they explained every cost in detail and suggested where we could save money without losing quality. There were no hidden charges at any stage. We really trust the Z&M team now.",
    name: "Mehul Trivedi",
    role: "Homeowner, Vadodara",
  },
  {
    title: "Very helpful project consultancy",
    text: "I was confused about the layout and the cost estimate for my commercial building. Their consultancy helped me finalise a proper plan and budget. Site visits and guidance were always available.",
    name: "Bhavesh Solanki",
    role: "Business Owner, Kheda",
  },
  {
    title: "Strong construction, neat finishing",
    text: "We got our shop and office building constructed by Z&M Buildcon. The RCC work is strong, the finishing is neat and they kept the site clean throughout. Payment milestones were also clear and fair.",
    name: "Nilesh Parmar",
    role: "Commercial Client, Kheda",
  },
  {
    title: "Friendly team, quick response",
    text: "Whenever we called for any change or doubt, the team responded the same day. They patiently made small changes in our plan, even in the middle of construction. Great experience overall.",
    name: "Dipti Joshi",
    role: "Homeowner, Rajkot",  },
  {
    title: "Vastu-friendly design, happy family",
    text: "Our family wanted a Vastu-friendly home with a spacious courtyard. The Z&M team planned it so well that we did not need any big changes. The whole family is very happy with our new bungalow.",
    name: "Jayesh Chauhan",
    role: "Bungalow Owner, Anand",
  },
  {
    title: "Worth every rupee",
    text: "Good materials, skilled workers and proper supervision. The final result looks much better than we imagined. We have already recommended Z&M Buildcon to our relatives and friends.",
    name: "Pooja Rana",
    role: "Homeowner, Nadiad",
  },
  {
    title: "Reliable partner for our project",
    text: "From the first meeting to the last day, the communication was clear and professional. They gave regular progress updates with photos, which was very useful as I was staying outside Gujarat.",
    name: "Sanjay Bhatt",
    role: "NRI Client, Ahmedabad",  },
];

export const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Client Reviews", href: "/#reviews" },
      { label: "Contact", href: "/contact" },
      { label: "Get a Quote", href: "/contact" },
    ],
  },
  {
    title: "Our Services",
    links: services.map((s) => ({ label: s.title, href: "/services" })),
  },
  {
    title: "Project Services",
    links: projectServiceGroups.map((g) => ({ label: g.title, href: `/services#${g.id}` })),
  },
];

export const SEARCH_EVENT = "zm-search";

const opt = (v, label = v) => ({ value: v, label });

// Search options are built from the projects themselves, so every choice returns something.
const unique = (xs) => [...new Set(xs)];

export const OTHER_CITY = "Other Gujarat";
export const cityOptions = [
  opt(null, "All locations"),
  ...unique(homes.map((h) => h.city).filter(Boolean)).map((c) => opt(c)),
  ...(homes.some((h) => !h.city) ? [opt(OTHER_CITY)] : []),
];

export const typeOptions = [opt(null, "Any type"), ...unique(homes.map((h) => h.type)).map((t) => opt(t))];

export const categoryOptions = [opt(null, "Any category"), ...unique(homes.map((h) => h.meta[0])).map((c) => opt(c))];
