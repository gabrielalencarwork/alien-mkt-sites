"use client";

import { motion } from "framer-motion";

export default function PortfolioUI() {
  return (
    <section className="h-screen w-full flex items-start pt-32 justify-center text-center pointer-events-none relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="max-w-2xl pointer-events-auto"
      >
        <div className="badge-pill mb-4 text-[#00ff88] border border-[#00ff88]/30 px-4 py-1 rounded-full inline-block text-sm font-bold uppercase tracking-widest bg-[#00ff88]/10">
          Métricas Validadas
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Cápsulas de <span className="text-[#00ff88]">Resultado</span>
        </h2>
        <p className="text-gray-300 text-lg">
          Não apresentamos apenas belos visuais. Cada cápsula armazena uma prova viva de tráfego, design e conversão trabalhando em harmonia. <br/>
          <span className="text-[#00ff88] font-bold mt-2 inline-block">Clique nas cápsulas de vidro para revelar os dados!</span>
        </p>
      </motion.div>
    </section>
  );
}
