import Galaxy from "@/components/galaxy/Galaxy";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <div style={{ width: '100%', height: '900px', position: 'relative' }}>
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={1}
          glowIntensity={0.3}
          saturation={1}
          hueShift={150}
          rotationSpeed={0}
        />
      </div> */}
    </div>
  );
}
