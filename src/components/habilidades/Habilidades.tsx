import "./Style.css"
import Camera from "../../../public/camera.svg"
import Cpp from "../../../public/cpp.svg"
import Css from "../../../public/css.svg"
import Html from "../../../public/html.svg"
import Java from "../../../public/java.svg"
import Js from "../../../public/js.svg"
import Ts from "../../../public/ts.svg"
import Image from "next/image"


export default function Habilidades() {
    return (
        <section className="habilidades blur-background" id="habilidades">
            <article><h2>Habilidades</h2></article>
            <article className="icons" >

                <div className="divIcon">
                    <Image src={Camera} alt="camera" className="icon" />
                    <h4>camera</h4>
                </div>

                <div className="divIcon">
                    <Image src={Css} alt="css" className="icon" />
                    <h4>Css</h4>
                </div>


                <div className="divIcon">
                    <Image src={Html} alt="html" className="icon" />
                    <h4>Html</h4>
                </div>

                <div className="divIcon">
                    <Image src={Java} alt="java" className="icon" />
                    <h4>Java</h4>
                </div>

                <div className="divIcon">
                    <Image src={Js} alt="Js" className="icon square" />
                    <h4>Js</h4>
                </div>

                <div className="divIcon">
                    <Image src={Ts} alt="Ts" className="icon square" />
                    <h4>Ts</h4>
                </div>

                <div className="divIcon">
                    <Image src={Cpp} alt="cpp" className="icon" />
                    <h4>C++</h4>
                </div>


            </article>
        </section>
    )
}