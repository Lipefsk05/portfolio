import { useState } from 'react';
import './Style.css'


const images = [
    {
        src: "/1.jpg",
        title: "Imagem 1",
        description: "Descrição da imagem 1",
    },
    {
        src: "/2.png",
        title: "Imagem 2",
        description: "Descrição da imagem 2",
    },
    {
        src: "/3.jpg",
        title: "Imagem 3",
        description: "Descrição da imagem 3",
    },
    {
        src: "/4.jpg",
        title: "Imagem 4",
        description: "Descrição da imagem 4",
    },
];

export default function Gallery() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section className="projetos blur-background">
            <h2>Projetos</h2>
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
        </section>
    );
}