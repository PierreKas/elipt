import {
  BarChart3,
  BotMessageSquare,
  CreditCard,
  GraduationCap,
  MessageCircle,
  Shield,
  TelescopeIcon,
  Users,
  Users2,
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";

export const navItems = [
  { label: "Acceuil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Produits", href: "#products" },
  { label: "Servive & Expertise", href: "#services" },
  { label: "Coordonées", href: "#contacts" },
];

export const teamMembers = [
  {
    name: "Paul Kasanani",
    position: "Co-Fondateur",
    image: user1,
    text: "Apa niko na besoin ya petite description",
  },
  {
    name: "Eliel Kahi",
    position: "Co-Fondateur",
    image: user1,
    text: "Apa niko na besoin ya petite description",
  },
];
export const products = [
  {
    id: 1,
    name: "Synoorg Community",
    description:
      "Une plateforme complète pour la gestion des organisations communautaires (églises, ONG, mouvements, associations, réseaux d'action).",
    features: [
      {
        icon: <MessageCircle />,
        title: "Messagerie instantanée",
        description: "Notifications en temps réel",
      },
      {
        icon: <Users />,
        title: "Suivi des membres",
        description: "Activités et rapports détaillés",
      },
      {
        icon: <Shield />,
        title: "Gestion hiérarchique",
        description: "Structures organisationnelles",
      },
      {
        icon: <BarChart3 />,
        title: "Statistiques avancées",
        description: "Tableaux de bord dynamiques",
      },
    ],
  },
  {
    id: 2,
    name: "Synoorg Academy",
    description:
      "Un puissant logiciel de gestion scolaire intelligent pour les établissements d'enseignement.",
    features: [
      {
        icon: <GraduationCap />,
        title: "Gestion académique",
        description: "Suivi disciplinaire et académique complet",
      },
      {
        icon: <Users2 />,
        title: "Présences & Notes",
        description: "Suivi des présences et bulletins de notes",
      },
      {
        icon: <CreditCard />,
        title: "Paiements",
        description: "Frais scolaires et génération de reçus",
      },
      {
        icon: <MessageCircle />,
        title: "Communication",
        description: "Temps réel École-Parent",
      },
    ],
  },
];
export const features = [
  {
    icon: <TelescopeIcon />,
    text: "Eliel Paul Technologia (ELIPT)",
    description:
      "ELIPT est une entreprise technologique intégrée basée à Goma (RDC), spécialisée dans la conception, la production et la commercialisation de solutions numériques évolutives.",
    description2:
      "Avec une équipe jeune, ambitieuse et multidisciplinaire, nous développons des marques SaaS robustes et modulaires, pensées pour répondre aux défis réels des organisations, entreprises et la communauté",
  },
  // {
  //   icon: <Fingerprint />,
  //   text: "Multi-Platform Compatibility",
  //   description:
  //     "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  // },
  // {
  //   icon: <ShieldHalf />,
  //   text: "Built-in Templates",
  //   description:
  //     "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  // },
  // {
  //   icon: <BatteryCharging />,
  //   text: "Real-Time Preview",
  //   description:
  //     "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  // },
  // {
  //   icon: <PlugZap />,
  //   text: "Collaboration Tools",
  //   description:
  //     "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  // },
  // {
  //   icon: <GlobeLock />,
  //   text: "Analytics Dashboard",
  //   description:
  //     "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  // },
];

export const checklistItems = [
  {
    title: "Déploiement personnalisé des solutions ELIPT",
    description: "J'ai besoin d'une brieve description ici",
  },
  {
    title: "Formation à l’utilisation de nos logiciels",
    description: "J'ai besoin d'une brieve description ici",
  },
  {
    title: "Assistance technique continue",
    description: "J'ai besoin d'une brieve description ici",
  },
  {
    title: "Conseils en transformation digitale pour organisations",
    description: "J'ai besoin d'une brieve description ici",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
