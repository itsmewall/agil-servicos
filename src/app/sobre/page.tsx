import { Shield, Zap, Heart, Trophy } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
              Agilidade e <span className="text-primary">Confiança</span> em cada processo.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              A Ágil Serviços nasceu com o propósito de descomplicar a vida de pessoas e empresas, transformando processos burocráticos em experiências simples e rápidas.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Nossa História</h2>
            <p className="text-slate-600 leading-relaxed">
              Fundada por especialistas em contabilidade e gestão pública, a Ágil Serviços BR percebeu que a maior dor dos brasileiros era a lentidão e a falta de clareza nos serviços contábeis tradicionais.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Decidimos mudar esse cenário investindo em tecnologia e um atendimento verdadeiramente humanizado. Hoje, somos referência em rapidez e segurança, ajudando milhares de clientes a manterem suas obrigações em dia sem dor de cabeça.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <div className="text-3xl font-bold text-primary">5k+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Clientes Atendidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Satisfação</div>
              </div>
            </div>
          </div>
          <div className="bg-slate-200 aspect-video rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center text-slate-400">
            [Foto da Equipe / Escritório]
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Nossos Pilares</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Os valores que guiam cada decisão e atendimento em nossa empresa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Agilidade", desc: "Tempo é dinheiro. Processamos suas demandas com a máxima rapidez." },
              { icon: Shield, title: "Segurança", desc: "Seus dados e processos protegidos por especialistas atualizados." },
              { icon: Heart, title: "Transparência", desc: "Linguagem clara, sem juridiquês. Você entende tudo o que acontece." },
              { icon: Trophy, title: "Excelência", desc: "Buscamos o melhor resultado sempre, com foco em superar expectativas." },
            ].map((value, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group text-center">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
