"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ShieldCheck } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[60] p-4 md:p-6">
      <div className="container-custom">
        <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900">Privacidade e Cookies</h4>
              <p className="text-sm text-slate-600 max-w-2xl">
                Utilizamos cookies para melhorar sua experiência e analisar nosso tráfego. Ao continuar navegando, você concorda com nossa <Link href="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button 
              onClick={accept}
              className="btn-primary flex-1 md:flex-none py-2 px-8"
            >
              Aceitar Tudo
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="p-2 text-slate-400 hover:text-slate-600"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
