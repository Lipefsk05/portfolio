'use client';
import PixelBlast from '@/components/pixel-blast/PixelBlast';
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero"
import Sobre from "@/components/sobre/Sobre"
import Habilidades from "@/components/habilidades/Habilidades";
import Projetos from "@/components/projetos/Projetos";
import Feedbacks from "@/components/feedbacks/FeedBacks"
import Contato from "@/components/contato/Contato"
import Footer from '@/components/footer/Footer';
import TargetCursor from "@/components/target-cursor/TargetCursor"
import { useState, useEffect } from "react";


export default function Home() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    if (showCursor) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [showCursor]);

  return (
    <div style={{ position: 'relative' }}>
      <div className="background"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -1,
        }}
      >
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
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        show={showCursor}
      />
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Habilidades setShowCursor={setShowCursor} />
        <Projetos />
        <Feedbacks />
        <Contato />
        <Footer />
      </main>
    </div>
  );
}




