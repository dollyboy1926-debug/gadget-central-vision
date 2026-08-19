import logoAsset from "@/assets/logo.png.asset.json";
import goldRoadshow from "@/assets/photo-gold-roadshow.jpg.asset.json";
import teamSetup from "@/assets/photo-team-setup.jpg.asset.json";
import oppoCustomer from "@/assets/photo-oppo-customer.jpg.asset.json";
import roadshowCounter from "@/assets/photo-roadshow-counter.jpg.asset.json";
import letter1 from "@/assets/letter-1.jpg.asset.json";
import letter2 from "@/assets/letter-2.jpg.asset.json";
import letter3 from "@/assets/letter-3.jpg.asset.json";

/** All imagery below is extracted directly from the Gadget Central company profile PDF. */
export const brand = {
  name: "Gadget Central Sdn Bhd",
  short: "Gadget Central",
  regNo: "1099463-H",
  tagline: "Driving Smart Consumer Solutions Across Malaysia",
  logo: logoAsset.url,
  phone1: "03-7887 7275",
  phone2: "012-535 1011",
  email: "info.gadgetcentral@gmail.com",
  addressLines: [
    "Unit 13-10, Infinity Tower,",
    "No. 28, Jalan SS6/3, Kelana Jaya,",
    "47301 Petaling Jaya",
  ],
};

export const photos = {
  goldRoadshow: {
    url: goldRoadshow.url,
    alt: "Gadget Central roadshow counter with 916 gold jewellery and smartphones being viewed by cooperative members",
  },
  teamSetup: {
    url: teamSetup.url,
    alt: "Gadget Central team setting up product displays at a nationwide roadshow",
  },
  oppoCustomer: {
    url: oppoCustomer.url,
    alt: "Customer collecting a new smartphone at a Gadget Central roadshow",
  },
  roadshowCounter: {
    url: roadshowCounter.url,
    alt: "Cooperative members browsing laptops and consumer products at a Gadget Central roadshow",
  },
  letter1: { url: letter1.url, alt: "Appointment letter from a cooperative partner" },
  letter2: { url: letter2.url, alt: "Appointment letter from a cooperative partner" },
  letter3: { url: letter3.url, alt: "Appointment letter from a cooperative partner" },
};

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "vision", label: "Vision & Mission" },
  { id: "milestones", label: "Milestones" },
  { id: "products", label: "Products & Services" },
  { id: "strengths", label: "Core Strengths" },
  { id: "clientele", label: "Our Clientele" },
  { id: "market", label: "Target Market" },
  { id: "model", label: "Business Model" },
  { id: "strategy", label: "Sales Strategy" },
  { id: "operations", label: "Operations Process" },
  { id: "contact", label: "Contact Us" },
];

/** Condensed set shown in the desktop bar; the full list lives in the mobile menu + footer. */
export const navPrimary = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "vision", label: "Vision" },
  { id: "milestones", label: "Milestones" },
  { id: "products", label: "Products" },
  { id: "strengths", label: "Strengths" },
  { id: "clientele", label: "Clientele" },
  { id: "model", label: "Business Model" },
  { id: "operations", label: "Operations" },
];

export const missionPoints = [
  "Deliver reliable and high-quality products to cooperatives and government institutions",
  "Expand strategic partnerships with cooperatives nationwide",
  "Continuously innovate sales and distribution channels across cooperatives and government institutions",
  "Drive inclusive growth by supplying essential consumer and technology products to the B40 market",
  "Support a sustainable financing chain ensuring affordability, accessibility and long-term financial well-being",
];

export const milestones = [
  {
    year: "2015",
    text: "GCSB was founded with a vision to modernise consumer financing within the cooperative sector in Malaysia.",
  },
  { year: "2018", text: "Successfully appointed by 10 cooperative clients nationwide, marking strong early growth." },
  {
    year: "2020",
    text: "Recognised as a top-performing vendor by several koperasi, including KOBANAS and KOPEN.",
  },
  {
    year: "2022",
    text: "Awarded as one of the Reno 8 Best Sales Award 2022 recipients (Malaysia Top 50) by Oppo Malaysia.",
  },
  {
    year: "2023",
    text: "Achieved RM12 million in annual sales with Koperasi Coop2u Berhad and recognised as a Top Vendor.",
  },
  { year: "2024", text: "Received an award for sales performance from KOPOLIS." },
  {
    year: "2025",
    text: "Expanded portfolio to approximately 20 cooperative accounts nationwide, serving up to 100,000 government servants nationwide.",
  },
  {
    year: "2026",
    text: "Currently developing a nationwide consumer product application platform to further enhance cooperative accessibility and digital transformation.",
  },
];

export const products = [
  { title: "Smartphones & Smartwatches", detail: "Latest devices from authorised distributors." },
  { title: "Laptop & IT Devices", detail: "Laptops and IT equipment for daily productivity." },
  {
    title: "Home Appliances",
    detail: "Washing machines, refrigerators, irons, air fryers and vacuum cleaners.",
  },
  { title: "Water & Air Purifiers", detail: "Water filtration and air purification systems." },
  { title: "916 Gold Jewellery", detail: "Curated 916 gold jewellery selection." },
  { title: "Motorbikes & Selected Vehicles", detail: "Motorcycles and selected vehicles." },
];

export const services = [
  {
    title: "Strategic Advisory Support",
    detail: "Strategic advisory support for cooperatives to enhance revenue growth.",
  },
  {
    title: "Structured Sales Programs",
    detail: "Development of structured sales programs to drive higher conversion and performance.",
  },
  {
    title: "Optimised Financing Models",
    detail: "Implementation of optimised financing models to improve accessibility and affordability.",
  },
  {
    title: "Member Participation",
    detail: "Proven approach to increase cooperative member participation and engagement.",
  },
  {
    title: "Sustainable Income Generation",
    detail: "Enabling cooperatives to achieve sustainable and long-term income generation.",
  },
];

export const strengths = [
  {
    value: 23,
    suffix: "+",
    label: "Years Combined Experience",
    detail: "23 years combined experience in the cooperative consumer loan industry.",
  },
  {
    value: 14,
    suffix: "",
    label: "States",
    detail: "Nationwide roadshow presence across 14 states, rural and urban areas.",
  },
  {
    value: 50,
    prefix: "RM",
    suffix: "M+",
    label: "Consumer Products Sold",
    detail: "Approximately RM50 million consumer products sold to cooperatives nationwide.",
  },
  {
    value: 50,
    suffix: "+",
    label: "Brands",
    detail: "Up to 50 different brands sold, with manufacturer warranty nationwide.",
  },
];

export const cooperatives = [
  "Koperasi Polis Diraja Malaysia Berhad",
  "Koperasi Kakitangan Bank Simpanan Nasional Berhad",
  "Koperasi Jabatan Penjara Malaysia Berhad",
  "Koperasi Pekerja CIMB Berhad",
  "Koperasi Bumira Malaysia Berhad",
  "Koperasi Pegawai Pegawai Kerajaan Taiping Berhad",
  "Koperasi Jabatan Ukur dan Pemetaan Malaysia Berhad",
  "Koperasi COOP2U Berhad",
  "Koperasi Tenaga Nasional Berhad",
  "Koperasi Kakitangan Bernas Berhad",
  "Koperasi UiTM Berhad",
  "Koperasi Perkhidmatan Pelajaran Nasional Berhad",
  "Koperasi MIDA Kuala Lumpur Berhad",
  "Koperasi Konsumer Malaysia Berhad",
  "Koperasi Warga Pendidikan Terengganu Berhad",
];

export const corporateMarket = [
  "Ministry of Education Malaysia",
  "Department of Prisons Malaysia",
  "State Health Departments",
  "Hospitals & Health Clinics",
  "Malaysian Maritime Department",
  "Kumpulan Wang Simpanan Negara",
  "Royal Malaysia Police",
  "Malaysian Armed Forces",
  "Fire and Rescue Department",
  "Institut Kemahiran Belia Negara",
  "Immigration Department Malaysia",
  "Public Works Department",
  "Department of Survey and Mapping",
  "Land and Mines Department",
  "Royal Malaysian Customs",
];

export const businessFlow = [
  "Customer",
  "Consumer Product",
  "Cooperative Financing",
  "Structured Repayment",
  "Product Delivery",
  "Cooperative Partnership",
];

export const salesStrategy = [
  {
    title: "Nationwide Roadshows",
    detail:
      "We consistently carry out roadshows for all our partners to reach their members nationwide — both urban and rural areas.",
  },
  {
    title: "Physical Stocks at Roadshow",
    detail:
      "We carry physical stocks to all our on-ground exhibitions at cooperatives and government institutions with permission, to build trust with customers and cooperative members.",
  },
  {
    title: "Online Sales",
    detail: "Online sales platforms operated alongside our on-ground activities.",
  },
  {
    title: "Digital Marketing",
    detail: "Digital marketing and social media campaigns on behalf of cooperatives.",
  },
  { title: "Telemarketing", detail: "Online and telephone customer engagement." },
  {
    title: "Long-Term Cooperative Relationships",
    detail:
      "Aligning core elements to ensure consistency and flexibility in adapting to the cooperative market for long-term success.",
  },
];

export const operations = [
  {
    step: "01",
    title: "Roadshows",
    detail:
      "GCSB carries out roadshows nationwide, with physical stock at approved government institutions at our own cost.",
  },
  {
    step: "02",
    title: "Customer Application",
    detail:
      "Customer application, payslip and invoice are submitted to the respective cooperatives for approval.",
  },
  {
    step: "03",
    title: "Delivery of Goods",
    detail: "Upon approval by the cooperative, the consumer goods are sent directly to the customer.",
  },
  {
    step: "04",
    title: "Payment to GCSB",
    detail: "Cooperatives pay GCSB for the amount of goods sold to their members.",
  },
];

export const whyPartner = [
  "Established since 2015",
  "End-to-end distribution and financing",
  "Cooperative-focused business model",
  "Nationwide roadshow capability",
  "Experienced sales team",
  "14-state presence",
  "23+ years combined industry experience",
  "50+ brands",
  "RM50M+ products sold",
  "Manufacturer warranties",
  "Strategic cooperative partnerships",
  "Digital transformation",
];

export const faqs = [
  {
    q: "What does Gadget Central do?",
    a: "Gadget Central Sdn Bhd is a trusted end-to-end consumer product distribution and financing partner for cooperative members, established in Malaysia in 2015.",
  },
  {
    q: "What products does Gadget Central supply?",
    a: "Gadgets, smartphones and smartwatches, laptops and IT devices, home appliances, water and air purifiers, 916 gold jewellery, and motorbikes and selected vehicles.",
  },
  {
    q: "Who does Gadget Central work with?",
    a: "Cooperatives and government institutions nationwide, including the cooperatives and departments listed in our clientele and target market sections.",
  },
  {
    q: "Are the products authentic?",
    a: "Yes. All products sold are 100% authentic and sourced from authorised distributors.",
  },
  {
    q: "Do products have warranties?",
    a: "All products supplied are supported by official manufacturer warranties nationwide.",
  },
  {
    q: "Where does Gadget Central operate?",
    a: "Nationwide, with roadshow presence across 14 states covering both urban and rural areas.",
  },
  {
    q: "How does the cooperative financing model work?",
    a: "Our model integrates product supply with cooperative financing, enabling customers to purchase essential goods through structured repayment schemes.",
  },
  {
    q: "How does the roadshow process work?",
    a: "GCSB carries out roadshows nationwide with physical stock at approved government institutions at our own cost. Customer applications, payslips and invoices are submitted to the respective cooperatives for approval; once approved, goods are delivered directly to the customer, and the cooperative pays GCSB for goods sold to their members.",
  },
];
