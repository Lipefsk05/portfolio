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
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} className="animateLogo">
                <Image src={Logo} alt="Logo" className="logoHero" />
                <TextType

                    text={["Criatividade", "Inovação", "Desenvolvimento"]}
                    typingSpeed={80}
                    deletingSpeed={50}
                    pauseDuration={2000}
                    showCursor={true}
                    cursorCharacter="_"
                    className="texting"
                />
            </FadeContent>
            <article className="redesLogo">
                <Image src={Insta} alt="Instagram logo" className="instaLogo" />
                <Image src={Linkedin} alt="LinkedIn logo" className="linkedinLogo" />
                <Image src={Email} alt="Email logo" className="emailLogo" />
            </article>
        </section>
    )
}

