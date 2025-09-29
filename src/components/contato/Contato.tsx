import "./Style.css"

export default function FeedBacks() {
    return (
        <section className="contato blur-background" id="contato">
            <h2 className="title">Contato</h2>
            <div className="inputs">
                <article className="nomeEmail">
                    <input type="text" placeholder="Digite seu nome"/>
                    <input type="email" placeholder="Digite seu email"/>
                </article>
                <article className="message">
                    <textarea name="project" id="project" placeholder="Me conte sua ideia"></textarea>
                </article>
            </div>
        </section>
    )
}