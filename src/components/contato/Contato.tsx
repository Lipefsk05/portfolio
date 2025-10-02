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
                                        "Me conte sua ideia",
                                        "Quero um site de...",
                                        "Tenho vontade de ter um...",
                                        "Preciso criar algo para...",
                                        "Quero fazer um projetosobre...",
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