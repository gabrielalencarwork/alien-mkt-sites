"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import CameraRig from "./CameraRig";
import Portal from "./Portal";

const portfolioSites = [
  { name: "Fabricio Silva", url: "https://fabriciosilvapsi.com.br/" },
  { name: "Nubia Experience", url: "https://www.nubiaexperience.com/" },
  { name: "Dra Maíza Torres", url: "https://dramaizatorres.com.br/" },
  { name: "Vitalix Telemedicina", url: "https://vitalixtelemedicina.com.br/" },
  { name: "Barbara Luiza", url: "https://barbaraluizapsi.vercel.app/" },
  { name: "Clínica Positive", url: "https://clinicapositive.alienmkt.com.br/" },
  { name: "Brincakids Locações", url: "https://brincakidslocacoes.vercel.app/" },
  { name: "Consultório Online", url: "https://consultorioonline.site/" },
  { name: "Garagem 844", url: "https://garagem844-landing-page.vercel.app/" },
];

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#020205]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={["#020205"]} />
        <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
        <ambientLight intensity={0.1} />
        
        {/* 3D Only Portals */}
        <Portal position={[0, 0, 0]} color="#ffffff" />
        <Portal position={[0, 0, -100]} color="#ff3333" />
        <Portal position={[0, 0, -200]} />
        <Portal position={[0, 0, -300]} color="#00ff88" />
        <Portal position={[0, 0, -400]} />
        <Portal position={[0, 0, -500]} />
        <Portal position={[0, 0, -600]} />
        <Portal position={[0, 0, -700]} />
        <Portal position={[0, 0, -800]} color="#00ff88" />

        <CameraRig />
      </Canvas>

      {/* 2D HTML UI LAYER - COMPLETELY DECOUPLED FROM 3D FOR FLAWLESS MOBILE CLICKS & SCROLLING */}
      <div id="ui-layer" className="absolute top-0 left-0 w-full h-full pointer-events-none z-50">
        
        {/* Portal 0: A Superfície */}
        <section id="portal-ui-0" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 opacity-0 transition-opacity">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-center">SUA EMPRESA É <span className="text-[#00ff88] drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]">PREMIUM.</span><br/> MAS ELA EXISTE NO DIGITAL?</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-2 max-w-4xl text-center">Você entrega um serviço de excelência, mas perde clientes High-Ticket todos os dias porque não tem uma sede oficial que comprove sua autoridade.</p>
          <p className="text-sm text-[#00ff88] uppercase tracking-widest mt-8 opacity-60 animate-pulse text-center">Continue descendo (Scroll)</p>
        </section>

        {/* Portal 1: A Realidade Oculta */}
        <section id="portal-ui-1" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 opacity-0 transition-opacity">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-center">O BOCA A BOCA NÃO É SUFICIENTE.</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-2 max-w-4xl text-center">Clientes exigentes pesquisam antes de comprar. Se eles procuram o seu nome no Google e não encontram nada, eles compram do seu concorrente que está lá.</p>
        </section>

        {/* Portal 2: O Despertar */}
        <section id="portal-ui-2" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 opacity-0 transition-opacity">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-center">VIVER SÓ DE INSTAGRAM <br/><span className="text-[#333]">É UM RISCO.</span></h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-2 max-w-4xl text-center">As redes sociais são terreno alugado. Uma conta bloqueada e seu negócio desaparece da noite para o dia.</p>
          <p className="text-sm text-gray-500 mt-4 text-center">Sem um site próprio, você não tem o controle do seu principal ativo: a atenção do cliente.</p>
        </section>

        {/* Portal 3: A Solução */}
        <section id="portal-ui-3" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 opacity-0 transition-opacity">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-center">TENHA A SUA <span className="text-[#00ff88] drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]">SEDE DEFINITIVA.</span></h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-2 max-w-4xl text-center">Muito mais que um cartão de visitas. Nós construímos o seu Quartel-General digital com engenharia pura, focado 100% em converter visitantes em vendas.</p>
        </section>

        {/* Portal 4: O Arsenal */}
        <section id="portal-ui-4" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 opacity-0 transition-opacity">
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-center">O QUE EXISTE POR BAIXO DO CAPÔ?</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full text-left">
            <div className="p-6 border border-white/10 bg-white/5 rounded-xl">
              <h3 className="text-xl font-bold text-[#00ff88] mb-2">Neuromarketing</h3>
              <p className="text-gray-400">Design guiado pelo subconsciente para reter a atenção do usuário e direcioná-lo à compra.</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-xl">
              <h3 className="text-xl font-bold text-[#00ff88] mb-2">Velocidade Extrema</h3>
              <p className="text-gray-400">Desenvolvimento com as tecnologias modernas usadas por grandes empresas. Carregamento em milissegundos.</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-xl">
              <h3 className="text-xl font-bold text-[#00ff88] mb-2">Copywriting</h3>
              <p className="text-gray-400">Textos milimetricamente desenhados para quebrar objeções e elevar o desejo pelo seu produto.</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-xl">
              <h3 className="text-xl font-bold text-[#00ff88] mb-2">SEO Técnico</h3>
              <p className="text-gray-400">Seu site no radar do Google. Estruturação perfeita para ser encontrado por clientes orgânicos.</p>
            </div>
          </div>
        </section>

        {/* Portal 5: A Prova (Portfólio) */}
        <section id="portal-ui-5" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 opacity-0 transition-opacity">
          <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-center">RESULTADOS QUE NÃO PEDEM DESCULPAS.</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center max-w-4xl w-full mx-auto">
            {portfolioSites.map((site, i) => {
              const hostname = site.url.replace('https://', '').replace('http://', '').replace('/', '');
              return (
              <a 
                key={i} 
                href={site.url} 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 border border-white/10 hover:border-[#00ff88] hover:bg-[#00ff88]/5 transition-all bg-white/5 rounded-xl flex flex-col items-center justify-center gap-3 pointer-events-auto group"
              >
                <div className="flex items-center gap-3">
                  <img src={`https://icon.horse/icon/${hostname}`} alt={site.name} className="w-8 h-8 rounded-full bg-white/10 p-1" />
                  <span className="font-bold text-white group-hover:text-[#00ff88] transition-colors">{site.name}</span>
                </div>
                <span className="text-xs text-[#00ff88] uppercase tracking-widest font-bold drop-shadow-[0_0_5px_rgba(0,255,136,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(0,255,136,0.9)] transition-all">Acessar Site</span>
              </a>
            )})}
          </div>
        </section>

        {/* Portal 6: A Lógica (Planos) */}
        <section id="portal-ui-6" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 opacity-0 transition-opacity">
          <h1 className="text-3xl md:text-5xl font-black mb-8 tracking-tight text-center">VISÃO GERAL: COMPARE OS PLANOS</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl w-full text-left">
            <div className="p-6 md:p-8 border border-white/10 bg-white/5 rounded-2xl flex flex-col">
              <h3 className="text-2xl font-bold mb-2">01. Essencial</h3>
              <p className="text-sm text-gray-400 mb-4 flex-grow">O seu consultório digital. Um cartão de visitas online impecável e ultra-rápido.</p>
              <div className="text-xl font-bold text-[#00ff88] mb-4">R$708 <span className="text-sm text-gray-400 font-normal">à vista ou 12x R$59</span></div>
              <ul className="text-sm space-y-2 text-gray-300">
                <li>✓ Site de 1 página (rápido)</li>
                <li>✓ Hospedagem + Domínio (1 ano)</li>
                <li>✓ Botão de agendamento WhatsApp</li>
                <li>✓ Layout Responsivo</li>
              </ul>
            </div>
            
            <div className="p-6 md:p-8 border border-[#00ff88]/50 bg-[#00ff88]/10 rounded-2xl flex flex-col relative scale-100 lg:scale-105 shadow-[0_0_30px_rgba(0,255,136,0.1)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00ff88] text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">Mais Escolhido</div>
              <h3 className="text-2xl font-bold mb-2 text-white">02. Que Converte</h3>
              <p className="text-sm text-gray-300 mb-4 flex-grow">Autoridade e posicionamento. Destaque-se na região e converta visitantes em pacientes.</p>
              <div className="text-xl font-bold text-[#00ff88] mb-4">R$1.497 <span className="text-sm text-gray-400 font-normal">à vista ou 12x R$147</span></div>
              <ul className="text-sm space-y-2 text-gray-200">
                <li>✓ Site completo (múltiplas seções)</li>
                <li>✓ Textos estratégicos (Copy)</li>
                <li>✓ Otimização Google Meu Negócio</li>
                <li>✓ Inteligência de dados (Pixel)</li>
              </ul>
            </div>

            <div className="p-6 md:p-8 border border-white/10 bg-white/5 rounded-2xl flex flex-col">
              <h3 className="text-2xl font-bold mb-2">03. Alien Completo</h3>
              <p className="text-sm text-gray-400 mb-4 flex-grow">Escala e agenda cheia. A solução definitiva de captação ativa de pacientes.</p>
              <div className="text-xl font-bold text-[#00ff88] mb-4">R$2.500 <span className="text-sm text-gray-400 font-normal">à vista ou 12x R$208</span></div>
              <ul className="text-sm space-y-2 text-gray-300">
                <li>✓ Toda a estrutura do Plano 02</li>
                <li>✓ 2 meses de gestão de tráfego</li>
                <li>✓ Anúncios Google/Meta segmentados</li>
                <li>✓ Relatórios de performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Portal 7: FAQ */}
        <section id="portal-ui-7" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 opacity-0 transition-opacity">
          <h1 className="text-4xl md:text-6xl font-black mb-12 tracking-tight text-center">CLAREZA ABSOLUTA.</h1>
          <div className="space-y-8 max-w-3xl w-full text-left">
            <div>
              <h4 className="text-xl font-bold text-[#00ff88] mb-2">Como vou editar meu conteúdo?</h4>
              <p className="text-gray-300 text-lg">Entregamos a tecnologia limpa acoplada a um painel sob medida para alterações simples.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#00ff88] mb-2">Qual o prazo de construção?</h4>
              <p className="text-gray-300 text-lg">Engenharia premium exige de 14 a 30 dias de imersão total da nossa equipe no seu projeto.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#00ff88] mb-2">Funciona no celular?</h4>
              <p className="text-gray-300 text-lg">Nosso design é pensado 100% Mobile-First, afinal, é onde 80% das suas compras acontecem.</p>
            </div>
          </div>
        </section>

        {/* Portal 8: Fechamento */}
        <section id="portal-ui-8" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 opacity-0 transition-opacity">
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] text-center">A DECISÃO É SUA.</h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 text-center max-w-2xl">Pare de deixar dinheiro na mesa. Dê o próximo passo e garanta o seu território no ambiente mais lucrativo do mundo.</p>
            
            <a 
              href="https://briefing-site-alien.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#00ff88] text-black font-black text-xl md:text-3xl rounded-xl shadow-[0_0_30px_rgba(0,255,136,0.8)] hover:shadow-[0_0_50px_rgba(0,255,136,1)] hover:scale-105 transition-transform pointer-events-auto"
            >
              QUERO MEU SITE PROFISSIONAL AGORA
            </a>
          </div>
        </section>

        {/* Scroll Arrow (Avançar) */}
        <button 
          id="scroll-arrow"
          onClick={() => {
            const viewportHeight = window.innerHeight;
            const currentScroll = window.scrollY;
            // Calcula qual é o próximo múltiplo de 100vh para ancorar perfeitamente no próximo portal
            const nextScroll = Math.floor((currentScroll + 10) / viewportHeight) * viewportHeight + viewportHeight;
            window.scrollTo({ top: nextScroll, behavior: 'smooth' });
          }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 p-4 flex flex-col items-center justify-center gap-2 pointer-events-auto transition-opacity duration-500 group z-[9999]"
        >
          <span className="text-xs text-[#00ff88] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">Avançar</span>
          <div className="w-12 h-12 rounded-full border border-white/20 bg-black/50 flex items-center justify-center backdrop-blur-md group-hover:border-[#00ff88]/50 group-hover:bg-[#00ff88]/10 transition-all">
            <svg className="w-6 h-6 text-[#00ff88] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

      </div>
    </div>
  );
}
