import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    title: "SPAT",
    subtitle: "Enterprise Mobile Application · FELDA",
    description:
      "Contributed to an enterprise app for FELDA, helping digitize application and approval processes. Integrated backend APIs for application submission, approval tracking, and user management, and supported testing before deployment to users.",
    technologies: [
      "Flutter",
      "Dart",
      "BLoC",
      "REST API",
    ],
  },
  {
    id: 2,
    title: "KCA – Kafe Che Ani",
    subtitle: "Food Ordering & Shop Management Application",
    description:
      "Developed and maintained Android and iOS apps for food ordering and shop management. Implemented product browsing, cart, checkout, vouchers, and order tracking; integrated ToyyibPay and REST APIs; and added OneSignal push notifications, Hive local caching, and POS features. Supported testing, bug fixes, and releases to both app stores.",
    technologies: [
      "Flutter",
      "Dart",
      "BLoC",
      "REST API",
      "ToyyibPay",
      "OneSignal",
      "Hive",
      "POS",
    ],
  },
  {
    id: 3,
    title: "ResIS",
    subtitle: "Resident Information System · Community App",
    description:
      "Contributed to a residential management app with features for billing, payments, receipts, transaction history, and QR code scanning. Integrated APIs for real-time processing to support residents' day-to-day operations.",
    technologies: [
      "Flutter",
      "Dart",
      "BLoC",
      "REST API",
      "QR Code Scanner",
    ],
  },
  {
    id: 4,
    title: "TaniCart",
    subtitle: "Agriculture E-Commerce",
    description:
      "Developed and maintained mobile modules for product listing, cart, checkout, order management and order status workflows.",
    technologies: [
      "Flutter",
      "Dart",
      "BLoC",
      "REST API",
    ],
  },
];