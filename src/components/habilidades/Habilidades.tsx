import "./Style.css"
import Camera from "../../../public/camera.svg"
import Cpp from "../../../public/cpp.svg"
import Css from "../../../public/css.svg"
import Html from "../../../public/html.svg"
import Java from "../../../public/java.svg"
import Js from "../../../public/js.svg"
import Ts from "../../../public/ts.svg"
import Image from "next/image"
import FadeContent from '@/components/fadecontent/FadeContent'


interface HabilidadesProps {
    setShowCursor: (show: boolean) => void;
}

export default function Habilidades({ setShowCursor }: HabilidadesProps) {
    return (
        <section
            className="habilidades blur-background"
            id="habilidades"
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
        >
            <article><h2>Habilidades</h2></article>
            <article className="icons" >

                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="divIcon cursor-target">
                    <Image src={Camera} alt="camera" className="icon" />
                    <h4>camera</h4>
                </FadeContent>

                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="divIcon cursor-target">
                    <Image src={Css} alt="css" className="icon" />
                    <h4>Css</h4>
                </FadeContent>
                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="divIcon cursor-target">
                    <Image src={Html} alt="html" className="icon" />
                    <h4>Html</h4>
                </FadeContent>
                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="divIcon cursor-target">
                    <Image src={Java} alt="java" className="icon" />
                    <h4>Java</h4>
                </FadeContent>
                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="divIcon cursor-target">
                    <Image src={Js} alt="Js" className="icon square" />
                    <h4>Js</h4>
                </FadeContent>
                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="divIcon cursor-target">
                    <Image src={Ts} alt="Ts" className="icon square" />
                    <h4>Ts</h4>
                </FadeContent>
                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="divIcon cursor-target">
                    <Image src={Cpp} alt="cpp" className="icon" />
                    <h4>C++</h4>
                </FadeContent>

            </article>
        </section>
    )
}