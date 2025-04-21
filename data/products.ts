export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  images: string[]; // Updated from single 'image' to multiple 'images'
  price?: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "ABC Dry Chemical Fire Extinguisher",
    category: "Fire Extinguishers",
    description:
      "Multipurpose fire extinguisher suitable for Class A, B, and C fires.",
    features: [
      "Suitable for multiple fire types",
      "Easy to operate",
      "Includes mounting bracket",
      "Regular maintenance available",
    ],
    images: [
      "/products/extinguisher-abc.jpg",
      "/products/extinguisher-abc-2.jpg",
      "/products/extinguisher-abc-3.jpg",
    ],
    price: "Contact for Price",
  },
  {
    id: "2",
    name: "Addressable Fire Alarm Panel",
    category: "Fire Alarm Systems",
    description:
      "Advanced fire alarm control panel with addressable technology.",
    features: [
      "LCD Display",
      "Multiple zone support",
      "Battery backup",
      "Remote monitoring capability",
    ],
    images: ["/products/alarm-panel.jpg", "/products/alarm-panel-2.jpg"],
    price: "Contact for Price",
  },
  {
    id: "3",
    name: "Fire Hose Reel",
    category: "Fire Hoses",
    description: "Heavy-duty fire hose reel for quick response.",
    features: [
      "Durable hose material",
      "Wall-mounted",
      "Nozzle included",
      "Easy to deploy",
    ],
    images: ["/products/hose-reel.jpg"],
    price: "Contact for Price",
  },
  {
    id: "4",
    name: "Clean Agent Suppression System",
    category: "Fire Suppression Systems",
    description: "Clean agent system suitable for IT and server rooms.",
    features: [
      "Non-conductive",
      "No residue after discharge",
      "Environment-friendly",
      "Automatic or manual activation",
    ],
    images: ["/products/clean-agent.jpg"],
    price: "Contact for Price",
  },
  {
    id: "5",
    name: "Personal Safety Kit",
    category: "Safety Equipment",
    description:
      "A complete personal safety kit including helmet, gloves, and mask.",
    features: [
      "Lightweight helmet",
      "Fire-resistant gloves",
      "Breathable mask",
    ],
    images: ["/products/safety-kit.jpg"],
    price: "Contact for Price",
  },
  {
    id: "7",
    name: "Tactical Emergency Survival Kit",
    category: "Safety Equipment",
    description:
      "A high-end tactical survival kit designed for emergencies, featuring durable gear and compact storage.",
    features: [
      "Reinforced ballistic-grade backpack",
      "Waterproof first-aid kit",
      "Multi-tool with firestarter",
      "LED flashlight with long battery life",
      "Emergency thermal blanket",
    ],
    images: ["/products/tactical-kit.jpg"],
    price: "Contact for Price",
  },
  {
    id: "1",
    name: "ABC Dry Chemical Fire Extinguisher",
    category: "Fire Extinguishers",
    description:
      "Multipurpose fire extinguisher suitable for Class A, B, and C fires.",
    features: [
      "Suitable for multiple fire types",
      "Easy to operate",
      "Includes mounting bracket",
      "Regular maintenance available",
    ],
    images: [
      "/products/extinguisher-abc.jpg",
      "/products/extinguisher-abc-2.jpg",
      "/products/extinguisher-abc-3.jpg",
    ],
    price: "Contact for Price",
  },
  {
    id: "2",
    name: "Addressable Fire Alarm Panel",
    category: "Fire Alarm Systems",
    description:
      "Advanced fire alarm control panel with addressable technology.",
    features: [
      "LCD Display",
      "Multiple zone support",
      "Battery backup",
      "Remote monitoring capability",
    ],
    images: ["/products/alarm-panel.jpg", "/products/alarm-panel-2.jpg"],
    price: "Contact for Price",
  },
  {
    id: "3",
    name: "Fire Hose Reel",
    category: "Fire Hoses",
    description: "Heavy-duty fire hose reel for quick response.",
    features: [
      "Durable hose material",
      "Wall-mounted",
      "Nozzle included",
      "Easy to deploy",
    ],
    images: ["/products/hose-reel.jpg"],
    price: "Contact for Price",
  },
  {
    id: "4",
    name: "Clean Agent Suppression System",
    category: "Fire Suppression Systems",
    description: "Clean agent system suitable for IT and server rooms.",
    features: [
      "Non-conductive",
      "No residue after discharge",
      "Environment-friendly",
      "Automatic or manual activation",
    ],
    images: ["/products/clean-agent.jpg"],
    price: "Contact for Price",
  },
  {
    id: "5",
    name: "Personal Safety Kit",
    category: "Safety Equipment",
    description:
      "A complete personal safety kit including helmet, gloves, and mask.",
    features: [
      "Lightweight helmet",
      "Fire-resistant gloves",
      "Breathable mask",
    ],
    images: ["/products/safety-kit.jpg"],
    price: "Contact for Price",
  },
  {
    id: "7",
    name: "Tactical Emergency Survival Kit",
    category: "Safety Equipment",
    description:
      "A high-end tactical survival kit designed for emergencies, featuring durable gear and compact storage.",
    features: [
      "Reinforced ballistic-grade backpack",
      "Waterproof first-aid kit",
      "Multi-tool with firestarter",
      "LED flashlight with long battery life",
      "Emergency thermal blanket",
    ],
    images: ["/products/tactical-kit.jpg"],
    price: "Contact for Price",
  },
];

export const categories = [
  "All Products",
  "Fire Extinguishers",
  "Fire Alarm Systems",
  "Fire Suppression Systems",
  "Fire Hoses",
  "Safety Equipment",
];
