import "./Style.css"
import Image from "next/image";
import Foto from "../../../public/foto-felipe.jpg"
import ProfileCard from '@/components/profile-card/ProfileCard'


export default function Sobre() {
    return (
        <section className="sobre blur-background" id="sobre">
            <h2>Sobre</h2>
            <article className="content">
                <article className="texts">

                    <h1>Um pouco sobre mim:</h1>
                    <h4>Sou uma pessoa sociável, paciente e curiosa, sempre em busca de novos aprendizados e desafios. Tenho grande empenho em tudo o que faço e valorizo o trabalho em equipe, buscando sempre contribuir para um ambiente colaborativo e produtivo. Possuo experiência em programação, liderança e no relacionamento interpessoal, o que me permite lidar bem com diferentes perfis de pessoas e situações. Minha capacidade de adaptação e desejo constante de aprendizado me ajudam a enfrentar desafios com criatividade e determinação, sempre focado no crescimento profissional e no sucesso dos projetos em que me envolvo.</h4>
                </article>
                <article className="image">

                    <ProfileCard
                        name="Felipe Portes"
                        title="Cientista da Computação"
                        handle="lipe_fenske"
                        status="Online"
                        contactText="Contato"
                        avatarUrl="/foto-felipe-png.png"
                        grainUrl="/ruido.jpg"
                        iconUrl="/ico.svg"
                        miniAvatarUrl="/foto-felipe.jpg"
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={() => console.log('Contact clicked')}
                    />
                </article>
            </article>
        </section>
    )
}