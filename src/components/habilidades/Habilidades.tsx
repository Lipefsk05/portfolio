import "./Style.css"
import Camera from "../../../public/camera.svg"
import Cpp from "../../../public/cpp.svg"
import Css from "../../../public/css.svg"
import Html from "../../../public/html.svg"
import Java from "../../../public/java.svg"
import Js from "../../../public/js.svg"
import Ts from "../../../public/ts.svg"
import Image from "next/image"
import LogoLoop from "@/components/logoloop/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaJsSquare, FaCss3Alt, FaHtml5, FaJava } from 'react-icons/fa';
import { RiVideoAiFill, RiVideoOnAiFill } from "react-icons/ri";

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <FaJsSquare />, title: "JavaScript CSS", href: "" },
    { node: <RiVideoAiFill />, title: "VideoEditor", href: "" },
    { node: <RiVideoOnAiFill />, title: "VideoMaker", href: "" },
    { node: <FaCss3Alt />, title: "Css", href: "" },
    { node: <FaHtml5 />, title: "Html", href: "" },
    { node: <FaJava />, title: "Java", href: "" },
];

// Alternative with image sources
const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function Habilidades() {
    return (
        <section className="habilidades blur-background" id="habilidades">
            <h2>Habilidades</h2>
            <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
            />
        </section>
    )
}