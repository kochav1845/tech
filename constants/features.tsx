import { AiFillPieChart, AiOutlineTeam } from "react-icons/ai";
import { BsBarChartFill, BsServer } from "react-icons/bs";
import { GrOrganization } from "react-icons/gr";
import { GiLockSpy } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";

export const features = [
  {
    heading: "Customer Relationship Management",
    description:
      "Track leads, manage contacts, and nurture customer relationships from first contact to loyal advocate. Complete visibility into your sales pipeline.",
    icon: <AiOutlineTeam className="text-primary h-4 w-4 relative z-50" />,
  },
  {
    heading: "Enterprise Resource Planning",
    description:
      "Manage inventory, finances, procurement, and supply chain operations seamlessly. Real-time insights into your entire business ecosystem.",
    icon: <GrOrganization className="text-primary h-4 w-4 relative z-50" />,
  },
  {
    heading: "Advanced Analytics & Reporting",
    description:
      "Make data-driven decisions with powerful analytics dashboards. Track KPIs, generate custom reports, and forecast business trends with precision.",
    icon: <BsBarChartFill className="text-primary h-4 w-4 relative z-50" />,
  },
  {
    heading: "Team Collaboration & Workflow",
    description:
      "Enable seamless collaboration across departments. Automate workflows, assign tasks, and keep everyone aligned with shared goals and visibility.",
    icon: <BsServer className="text-primary h-4 w-4 relative z-50" />,
  },
  {
    heading: "Enterprise-Grade Security",
    description:
      "Your business data is protected with bank-level encryption, role-based access control, and compliance with international data protection standards.",
    icon: <GiLockSpy className="text-primary h-4 w-4 relative z-50" />,
  },
  {
    heading: "Mobile-First Design",
    description:
      "Access your CRM and ERP anywhere, anytime. Fully responsive interface with dedicated mobile apps for iOS and Android to manage business on the go.",
    icon: <MdDarkMode className="text-primary h-4 w-4 relative z-50" />,
  },
];
