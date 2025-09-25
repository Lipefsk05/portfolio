import "./Style.css"
import Camera from "../../../public/camera.png"
import Cpp from "../../../public/cpp.png"
import Css from "../../../public/css-3.png"
import Html from "../../../public/html-5.png"
import Java from "../../../public/java.png"
import Js from "../../../public/js.png"
import Tinta from "../../../public/tinta.png"
import Ts from "../../../public/ts.png"
import Image from "next/image"

export default function Habilidades() {
    return (
        <section className="habilidades blur-background" id="habilidades">
            <article><h2>Habilidades</h2></article>
            <article className="icons" >
                <Image src={Camera} alt="camera" className="icon" />
                <Image src={Css} alt="css" className="icon" />
                <Image src={Html} alt="html" className="icon" />
                <Image src={Tinta} alt="tinta" className="icon" />
                <Image src={Java} alt="java" className="icon" />
                <Image src={Js} alt="Js" className="icon" />
                <Image src={Ts} alt="Ts" className="icon" />
                <Image src={Cpp} alt="cpp" className="icon" />

            </article>
        </section>
    )
}