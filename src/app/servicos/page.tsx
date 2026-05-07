import { services } from "@/data/services";
import { FAQ } from "@/components/common/FAQ";
import { MessageCircle, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Nossos Serviços</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Soluções completas e personalizadas para cada fase da sua jornada, seja você pessoa física ou jurídica.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="container-custom py-20 space-y-32">
        {services.map((service, index) => (
          <section 
            key={service.id} 
            id={service.id}
            className={`flex flex-col lg:flex-row gap-16 items-start scroll-mt-24 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
          >
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Principais Benefícios:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="text-primary shrink-0" size={18} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href={`https://wa.me/5511999999999?text=Olá! Gostaria de falar sobre ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  {service.cta}
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2 text-lg">
                  Perguntas Frequentes
                </h4>
                <FAQ items={service.faqs} />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Final CTA */}
      <section className="container-custom py-20">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white space-y-8 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl -ml-32 -mb-32"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold relative z-10">Não encontrou o que procurava?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto relative z-10">
            Nossa equipe está pronta para te ajudar com qualquer outra demanda burocrática ou contábil. Entre em contato e conte-nos o seu caso.
          </p>
          <div className="relative z-10">
            <a href="/contato" className="btn-primary px-12 py-4 text-lg">Falar com Consultor</a>
          </div>
        </div>
      </section>
    </div>
  );
}
