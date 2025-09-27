import "./Style.css"
import Camera from "../../../public/camera.svg"
import Cpp from "../../../public/cpp.svg"
import Css from "../../../public/css.svg"
import Html from "../../../public/html.svg"
import Java from "../../../public/java.svg"
import Js from "../../../public/js.svg"
import Ts from "../../../public/ts.svg"
import Image from "next/image"
import PixelCard from '@/components/pixel-card/PixelCard';


export default function Habilidades() {
    return (
        <section className="habilidades blur-background" id="habilidades">
            <article><h2>Habilidades</h2></article>
            <article className="icons" >
                <div className="divIcon">
                <Image src={Camera} alt="camera" className="icon" />
                    <h5>camera</h5>
                </div>
                    
                <Image src={Css} alt="css" className="icon" />
                <Image src={Html} alt="html" className="icon" />
                <Image src={Java} alt="java" className="icon" />
                <Image src={Js} alt="Js" className="icon square" />
                <Image src={Ts} alt="Ts" className="icon square" />
                <Image src={Cpp} alt="cpp" className="icon" />
            </article>
        </section>
    )
}