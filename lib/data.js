const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

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

export const images = {
  // Modern house in India (Pexels, free to use). Swap for a Z&M project photo when available.
  hero: "https://images.pexels.com/photos/37129015/pexels-photo-37129015.jpeg?auto=compress&cs=tinysrgb&w=2400",
  about: img("1602343168117-bb8ffe3e2e9f", 1000),
  testimonialBg: img("1449844908441-8829872d2607", 2000),
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
    desc: "Expert guidance on layout, cost estimates, material selection and execution planning so that your project stays on budget and on schedule.",
    points: ["Cost estimation and budgeting", "Layout and space planning", "Site visits and expert advice"],
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

// NOTE: placeholder numbers, replace with Z&M Buildcon's real figures.
export const stats = [
  { value: "50", label: "Projects Completed" },
  { value: "40", label: "Happy Clients" },
  { value: "25", label: "Bungalows Built" },
  { value: "30", label: "Interior Projects" },
];

// NOTE: sample projects, replace with Z&M Buildcon's real projects and photos.
export const homes = [
  {
    title: "Shree Krupa Bungalow",
    city: "Nadiad",
    location: "Nadiad, Gujarat",
    type: "Bungalow",
    priceCr: 1.25,
    meta: ["4 BHK", "3,200 sq ft", "10 Months"],
    desc: "Spacious bungalow with elegant elevation, modular kitchen and a private garden, built exactly as per your design.",
    price: "₹1.25 Cr",
    image: img("1600596542815-ffad4c1539a9"),
  },
  {
    title: "Aangan Residency",
    city: "Anand",
    location: "Anand, Gujarat",
    type: "Turnkey Project",
    priceCr: 1.8,
    meta: ["Turnkey", "4,500 sq ft", "12 Months"],
    desc: "Complete lock and key project, from design and approvals to construction, interiors and final handover.",
    price: "₹1.80 Cr",
    image: img("1600585154340-be6161a56a0c"),
  },
  {
    title: "The Modern Nest",
    city: "Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Interior",
    priceCr: 0.28,
    meta: ["3 BHK", "1,850 sq ft", "60 Days"],
    desc: "Contemporary interior with false ceiling, wardrobes, modular kitchen and smart lighting, delivered on time.",
    price: "₹28 Lakh",
    image: img("1600607687939-ce8a6c25118c"),
  },
  {
    title: "Royal Heritage Villa",
    city: "Vadodara",
    location: "Vadodara, Gujarat",
    type: "Bungalow",
    priceCr: 2.4,
    meta: ["5 BHK", "4,800 sq ft", "14 Months"],
    desc: "Premium independent villa with grand entrance, large living spaces and quality finishing throughout.",
    price: "₹2.40 Cr",
    image: img("1613490493576-7fde63acd811"),
  },
  {
    title: "Sunrise Commercial Hub",
    city: "Kheda",
    location: "Kheda, Gujarat",
    type: "Construction",
    priceCr: 0.95,
    meta: ["G+2", "6,000 sq ft", "9 Months"],
    desc: "Strong RCC construction for shops and offices with proper planning, parking and quality materials.",
    price: "₹95 Lakh",
    image: img("1512917774080-9991f1c4c750"),
  },
  {
    title: "Kalash Villa",
    city: "Rajkot",
    location: "Rajkot, Gujarat",
    type: "Turnkey Project",
    priceCr: 1.55,
    meta: ["4 BHK", "3,600 sq ft", "11 Months"],
    desc: "Vastu-friendly turnkey villa with open courtyard, covered parking and fully furnished interiors.",
    price: "₹1.55 Cr",
    image: img("1564013799919-ab600027ffc6"),
  },
];

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
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Our Services",
    links: services.map((s) => ({ label: s.title, href: "/services" })),
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Projects", href: "/projects" },
      { label: "Client Reviews", href: "/#reviews" },
      { label: "Get a Quote", href: "/contact" },
    ],
  },
];

export const SEARCH_EVENT = "zm-search";

const opt = (v, label = v) => ({ value: v, label });

export const cityOptions = [
  opt(null, "All cities"),
  ...["Ahmedabad", "Gandhinagar", "Vadodara", "Surat", "Rajkot", "Nadiad", "Anand", "Kheda"].map((c) => opt(c)),
];

export const typeOptions = [
  opt(null, "Any type"),
  ...["Turnkey Project", "Bungalow", "Interior", "Construction", "Project Consultancy"].map((t) => opt(t)),
];

export const priceOptions = [
  opt(null, "Any budget"),
  opt(0.25, "Up to ₹25 Lakh"),
  opt(0.5, "Up to ₹50 Lakh"),
  opt(1, "Up to ₹1 Cr"),
  opt(2, "Up to ₹2 Cr"),
  opt(5, "Up to ₹5 Cr"),
];
