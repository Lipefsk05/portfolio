import "./Style.css";
import Logo from "../../../public/logo-small.svg"
import Image from "next/image";

export default function Header(){
    return(
        <header>
            <div id="logo" className="heSec">
                <Image src={Logo} alt="logo" className="logo" />
                <select name="language" id="">
                    <option value="pt">PT</option>
                    <option value="en">EN</option>
                </select>
            </div>
            <div id="pages" className="heSec">
                <a href="#hero"><h5>Home</h5></a>
                <a href="#sobre"><h5>Sobre</h5></a>
                <a href="#habilidades"><h5>Habilidades</h5></a>
                <h5>Projetos</h5>
                <h5>Contato</h5>
            </div>
        </header>
    )
}