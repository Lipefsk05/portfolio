import "./Style.css"
import Image from "next/image";
import Foto from "../../../public/foto-felipe.jpg"
import ProfileCard from '@/components/profile-card/ProfileCard'


export default function Sobre() {
    return (
        <section className="sobre">
            <h2>Sobre</h2>
            <div className="content">
                <article className="texts">

                    <h1>Felipe Portes</h1>
                    <h4>Olá, vou falar um pouco sobre mim: Sou uma pessoa sociável, paciente e curiosa, sempre em busca de novos aprendizados e desafios. Tenho grande empenho em tudo o que faço e valorizo o trabalho em equipe, buscando sempre contribuir para um ambiente colaborativo e produtivo. Possuo experiência em programação, liderança e no relacionamento interpessoal, o que me permite lidar bem com diferentes perfis de pessoas e situações. Minha capacidade de adaptação e desejo constante de aprendizado me ajudam a enfrentar desafios com criatividade e determinação, sempre focado no crescimento profissional e no sucesso dos projetos em que me envolvo.</h4>
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
            </div>
        </section>
    )
}