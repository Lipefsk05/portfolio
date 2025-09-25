import "./Style.css";

export default function Header(){
    return(
        <header>
            <div id="logo" className="heSec">
                <h5>LOGO</h5>
                <select name="language" id="">
                    <option value="pt">PT</option>
                    <option value="en">EN</option>
                </select>
            </div>
            <div id="pages" className="heSec">
                <h5>Home</h5>
                <h5>Sobre</h5>
                <h5>Habilidades</h5>
                <h5>Projetos</h5>
                <h5>Contato</h5>
            </div>
        </header>
    )
}