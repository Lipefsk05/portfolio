import "./Style.css";

export default function Header(){
    return(
        <header>
            <section id="logo" className="heSec">
                <h1>LOGO</h1>
                <select name="language" id="">
                    <option value="pt">PT</option>
                    <option value="en">EN</option>
                </select>
            </section>
            <section id="pages" className="heSec">
                <h1>Home</h1>
                <h1>Sobre</h1>
                <h1>Habilidades</h1>
                <h1>Projetos</h1>
                <h1>Contato</h1>
            </section>
        </header>
    )
}