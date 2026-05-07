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
              Sua vida sem <span className="text-primary">complicações</span> contábeis.
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

          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl border border-slate-100">
              {/* Mockup of a dashboard or result */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-800 text-xl">Status do Serviço</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">EM ANDAMENTO</span>
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-primary animate-pulse"></div>
                  </div>
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Declaração IRPF</span>
                    <span>75% Concluído</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <span className="text-xs text-slate-500 block mb-1">Restituição Estimada</span>
                    <span className="text-lg font-bold text-slate-800">R$ 2.450,00</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <span className="text-xs text-slate-500 block mb-1">Prazo de Entrega</span>
                    <span className="text-lg font-bold text-slate-800">12 Dias</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
