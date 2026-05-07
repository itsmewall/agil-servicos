import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight, Calculator, UserRound, FileText, Home, GraduationCap } from "lucide-react";

const icons = {
  "imposto-de-renda": Calculator,
  "mei": UserRound,
  "folha-de-pagamento": FileText,
  "regularizacao-de-imoveis": Home,
  "aposentadorias": GraduationCap,
};

export function ServiceCards() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossos Serviços</h2>
          <p className="text-slate-600">
            Oferecemos uma gama completa de soluções burocráticas e contábeis para facilitar o seu dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = icons[service.id as keyof typeof icons] || FileText;
            return (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  {service.description}
                </p>
                <Link 
                  href={`/servicos#${service.id}`}
                  className="inline-flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform"
                >
                  Saiba mais <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
