import { useState } from 'react';
import './Style.css'
import FadeContent from '@/components/fadecontent/FadeContent'


const images = [
    {
        src: "/PROJETO.png",
        title: "Imagem 1",
        description: "Descrição da imagem 1",
    },
    {
        src: "/PROJETO.png",
        title: "Imagem 2",
        description: "Descrição da imagem 2",
    },
    {
        src: "/PROJETO.png",
        title: "Imagem 3",
        description: "Descrição da imagem 3",
    },
    {
        src: "/PROJETO.png",
        title: "Imagem 4",
        description: "Descrição da imagem 4",
    },
];

export default function Gallery() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section className="projetos blur-background" id="projetos">
                <h2>Projetos</h2>
            <FadeContent blur={true} easing="ease-out" initialOpacity={0}>
                <article className="gallery">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`gallery-item ${hovered === i ? "active" : hovered !== null ? "inactive" : ""}`}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                        >

                            <img src={img.src} alt={img.title} />
                            <div className="overlay">
                                <h4>{img.title}</h4>
                                <p>{img.description}</p>
                            </div>
                        </div>
                    ))}
                </article>
            </FadeContent>
        </section>
    );
}

