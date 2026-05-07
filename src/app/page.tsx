import { Hero } from "@/components/home/Hero";
import { ServiceCards } from "@/components/home/ServiceCards";
import { ContactForm } from "@/components/contact/ContactForm";
import { ShieldCheck, Zap, HeartHandshake, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Social Proof / Trust Badges */}
      <section className="py-12 border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, label: "100% Seguro" },
              { icon: Zap, label: "Entrega Ágil" },
              { icon: HeartHandshake, label: "Foco no Cliente" },
              { icon: TrendingUp, label: "Resultados Reais" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center space-y-2 text-slate-400 grayscale hover:grayscale-0 transition-all">
                <item.icon size={32} />
                <span className="text-sm font-semibold uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCards />

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-blue-600 rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder image or a colored block */}
                <div className="w-full h-full flex items-center justify-center text-white text-9xl font-bold opacity-10">
                  ÁGIL
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-primary">10+</div>
                  <div className="text-sm text-slate-600 font-medium leading-tight">
                    Anos de<br />Experiência
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Por que escolher a <span className="text-primary">Ágil Serviços</span>?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Atendimento Humanizado",
                    desc: "Nada de robôs. Você fala com especialistas que entendem o seu problema."
                  },
                  {
                    title: "Tecnologia a seu Favor",
                    desc: "Processos automatizados para garantir rapidez e evitar erros manuais."
                  },
                  {
                    title: "Preço Justo e Transparente",
                    desc: "Sem taxas escondidas. Você sabe exatamente o que está pagando."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/sobre" className="inline-flex items-center text-primary font-bold group">
                Conheça nossa história
                <Zap size={16} className="ml-2 group-hover:scale-125 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contato" className="py-24 bg-primary relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>

        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Pronto para simplificar sua vida burocrática?
              </h2>
              <p className="text-blue-100 text-lg opacity-90">
                Preencha o formulário e receba um atendimento personalizado em poucos minutos.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold">Resposta em até 2 horas</h5>
                    <p className="text-sm text-blue-100 opacity-80">Em horário comercial</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
