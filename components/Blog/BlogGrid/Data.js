import { useRouter } from "next/router";
import college from "../../../public/svg/college.svg";
import graduated from "../../../public/svg/graduated.svg";
import officebuilding from "../../../public/svg/office-building.svg";

const router = useRouter();

const Data = [
  {
    img: graduated,
    title: "Students",
    link: "student",
    as: "/blogs/students",
    href: "/blogs/[category]",
    selected: router.query.category === "students" ? true : false,
  },
  {
    img: college,
    title: "Colleges & Institutes",
    link: "college",
    as: "/blogs/college",
    href: "/blogs/[category]",
    selected: router.query.category === "college" ? true : false,
  },
  {
    img: officebuilding,
    title: "Companies",
    link: "company",
    as: "/blogs/company",
    href: "/blogs/[category]",
    selected: router.query.category === "company" ? true : false,
  },
];

export default Data;
