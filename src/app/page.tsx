'use client';
import Galaxy from "@/components/galaxy/Galaxy";
import PixelBlast from '@/components/pixel-blast/PixelBlast';
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero"
import Sobre from "@/components/sobre/Sobre"
import Habilidades from "@/components/habilidades/Habilidades";
import Projetos from "@/components/projetos/Projetos";

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -1,
        }}
      >
        {/* <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={1}
          glowIntensity={0.3}
          saturation={1}
          hueShift={150}
          rotationSpeed={0}
        /> */}
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#A51D2D"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      <Header />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Projetos />
      </main>
    </div>
  );
}


