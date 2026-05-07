"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "5511999999999"; // Substituir pelo real
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Ágil Serviços.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <div className="absolute right-full mr-3 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Falar com Especialista
      </div>
      <MessageCircle size={30} fill="currentColor" />
    </a>
  );
}
