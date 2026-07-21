"use client";

import { motion } from "framer-motion";

export default function MethodUI() {
  return (
    <section className="h-screen w-full flex items-center justify-start px-12 md:px-24 pointer-events-none relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="max-w-xl pointer-events-auto"
      >
        <div className="badge-pill mb-4 text-[#00ff88] border border-[#00ff88]/30 px-4 py-1 rounded-full inline-block text-sm font-bold uppercase tracking-widest bg-[#00ff88]/10">
          Metodologia Alien
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Engenharia de <span className="text-[#00ff88]">Conversão</span>
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Não entregamos templates. Entregamos camadas de tecnologia invisíveis desenhadas milimetricamente para guiar a atenção do seu cliente até o agendamento.
        </p>
        <p className="text-gray-400 text-sm">
          Passe o mouse sobre as camadas 3D para inspecionar a arquitetura de alta performance.
        </p>
      </motion.div>
    </section>
  );
}
