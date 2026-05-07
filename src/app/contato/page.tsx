import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                  Vamos conversar sobre sua <span className="text-primary">solução</span>.
                </h1>
                <p className="text-xl text-slate-600">
                  Nossa equipe está pronta para tirar suas dúvidas e propor a melhor estratégia para o seu caso.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">WhatsApp</h4>
                    <p className="text-slate-600 text-sm">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="space-y-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">E-mail</h4>
                    <p className="text-slate-600 text-sm">contato@agilservicos.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4 border-t border-slate-200">
                <h4 className="font-bold text-slate-900">Endereço</h4>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-slate-500" />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Rua das Inovações, 1000 - Sala 402<br />
                    Vila Olímpia - São Paulo/SP<br />
                    CEP: 04551-060
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -m-4 blur-3xl -z-10"></div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="container-custom py-20">
        <div className="w-full h-96 bg-slate-100 rounded-3xl overflow-hidden flex items-center justify-center text-slate-400 border border-dashed border-slate-300">
          [Google Maps Integration Placeholder]
        </div>
      </section>
    </div>
  );
}
