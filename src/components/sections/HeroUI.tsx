"use client";
import Button from "../ui/Button";

export default function HeroUI() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center px-4 relative z-10 pointer-events-none">
      <div className="pointer-events-auto max-w-4xl">
        <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight tracking-tighter mb-6">
          O seu negócio precisa de mais do que um site.<br />
          <span className="text-[#00ff88] [text-shadow:0_0_20px_rgba(0,255,136,0.3)]">Precisa de uma máquina de conversão invisível.</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Mergulhe no universo Alien. Utilizamos neurociência, engenharia de tráfego e design de alto padrão para escalar suas vendas no digital.
        </p>
        <Button href="https://wa.me/5573998529223?text=Quero%20agendar%20um%20diagnóstico%20gratuito">
          Agendar Diagnóstico Gratuito
        </Button>
      </div>
    </section>
  );
}
