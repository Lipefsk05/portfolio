import "./Style.css"
import FadeContent from '@/components/fadecontent/FadeContent'
import TextType from '@/components/text-type/TextType'
import { useState } from 'react';

export default function FeedBacks() {
    const [message, setMessage] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    return (
        <section className="contato blur-background" id="contato">
            <h2 className="title">Contato</h2>
            <div className="inputs">
                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="nomeEmail">
                    <input type="text" placeholder="Digite seu nome" />
                    <input type="email" placeholder="Digite seu email" />
                </FadeContent>
                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="message">
                    <div style={{ position: "relative" }}>
                        {/* TextType como placeholder visual */}
                        {!(isFocused || message) && (
                            <div
                                style={{
                                    position: "absolute",
                                    left: "16px",
                                    top: "16px",
                                    pointerEvents: "none",
                                    color: "#888",
                                    zIndex: 2,
                                }}
                            >
                                <TextType
                                    text={[
                                        "Me fale sobre sua ideia!",
                                        "Quero transformar minha visão em realidade...",
                                        "Tenho vontade de lançar um projeto novo...",
                                        "Preciso de algo para resolver um problema específico...",
                                        "Gostaria de colocar em prática uma iniciativa...",
                                        "Estou pensando em desenvolver uma solução criativa...",
                                        "Tenho em mente criar algo inovador...",
                                        "Quero dar vida a uma ideia que tive...",
                                        "Estou planejando construir uma experiência digital...",
                                        "Preciso estruturar melhor meu projeto...",
                                        "Gostaria de começar algo voltado para meu negócio...",
                                        "Estou imaginando formas de facilitar meu trabalho...",
                                        "Quero iniciar um projeto pessoal...",
                                        "Tenho interesse em modernizar minha presença online...",
                                        "Preciso criar algo para atender meus clientes...",
                                        "Estou avaliando lançar uma plataforma interativa...",
                                        "Quero experimentar novas ideias em tecnologia...",
                                        "Tenho vontade de investir em uma aplicação prática...",
                                        "Estou projetando algo para impactar mais pessoas...",
                                        "Preciso colocar minha criatividade em ação..."
                                    ]}

                                    typingSpeed={60}
                                    pauseDuration={2000}
                                    textColors={["#6f6f6fff"]}
                                    className="placeholder"
                                />
                            </div>
                        )}
                        <textarea
                            name="project"
                            id="project"
                            value={message}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChange={e => setMessage(e.target.value)}
                            style={{ position: "relative", zIndex: 1, background: "transparent" }}
                        />
                    </div>
                </FadeContent>
            </div>
        </section>
    )
}