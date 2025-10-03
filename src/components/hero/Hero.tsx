"use client";

import "./Style.css"
import Logo from "../../../public/logo.png"
import Insta from "../../../public/instagram-logo.svg"
import Linkedin from "../../../public/linkedin-logo.svg"
import Email from "../../../public/envelope-simple.svg"
import Image from "next/image";
import FadeContent from '@/components/fadecontent/FadeContent'
import TextType from '@/components/text-type/TextType';

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="animateLogo">
                <Image src={Logo} alt="Logo" className="logoHero" />
                <TextType

                    text={[
                        "Tecnologia",
                        "Design",
                        "Produtividade",
                        "Transformação",
                        "Soluções",
                        "Experiência",
                        "Aprendizado",
                        "Colaboração",
                        "Eficiência",
                        "Resultados",
                        "Conexão",
                        "Futuro",
                        "Progresso",
                        "Impacto",
                        "Qualidade",
                        "Estratégia",
                        "Visão",
                        "Evolução",
                        "Sucesso",
                        "Inspiração"
                    ]}
                    typingSpeed={80}
                    deletingSpeed={50}
                    pauseDuration={2000}
                    showCursor={true}
                    cursorCharacter="_"
                    className="texting"
                />
            </FadeContent>
            <article className="redesLogo">
                <a href="instagram.com/lipe_fenske" target="_blank" ><Image src={Insta} alt="Instagram logo" className="instaLogo" /></a>
                <a href="linkedin.com/in/felipe-antunes-404398322" target="_blank" ><Image src={Linkedin} alt="LinkedIn logo" className="linkedinLogo" /></a>
                <a href="mailto:felipefenske05@gmail.com"><Image src={Email} alt="Email logo" className="emailLogo" /></a>
            </article>
        </section>
    )
}

