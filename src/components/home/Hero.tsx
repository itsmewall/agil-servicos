import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0047AB_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Soluções Ágeis para sua Burocracia</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Sua vida sem <span className="text-primary">complicações</span> burocráticas.
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Deixe a burocracia com quem entende. Resolvemos seu Imposto de Renda, MEI, Folha de Pagamento e muito mais com agilidade e segurança total.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contato" className="btn-primary flex items-center justify-center space-x-2 group">
                <span>Solicitar Orçamento</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/servicos" className="btn-outline flex items-center justify-center">
                Ver Todos os Serviços
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Atendimento Personalizado",
                "Processos 100% Digitais",
                "Especialistas Qualificados",
                "Transparência Total"
              ].map((item) => (
                <div key={item} className="flex items-center space-x-2 text-sm text-slate-600">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:flex justify-end">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Elementos geométricos premium em vez de mockup confuso */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-3 -z-10"></div>
              <div className="absolute inset-0 bg-white border border-slate-100 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-12 text-center space-y-6">
                <div className="w-20 h-20 bg-blue-50 text-primary rounded-2xl flex items-center justify-center">
                  <CheckCircle2 size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 italic">Ágil & Seguro</h3>
                  <p className="text-slate-500">Sua contabilidade em boas mãos, com processos 100% digitais e transparentes.</p>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-2 h-2 bg-primary rounded-full opacity-20"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
