import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold">Á</span>
              </div>
              <span className="font-bold text-xl text-white">Ágil Serviços</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Soluções contábeis e burocráticas com agilidade e transparência para você e sua empresa.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="/servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog & Notícias</Link></li>
              <li><Link href="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Serviços</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/servicos#mei" className="hover:text-primary transition-colors">MEI</Link></li>
              <li><Link href="/servicos#ir" className="hover:text-primary transition-colors">Imposto de Renda</Link></li>
              <li><Link href="/servicos#rh" className="hover:text-primary transition-colors">Folha de Pagamento</Link></li>
              <li><Link href="/servicos#imoveis" className="hover:text-primary transition-colors">Imóveis</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>Rua Principal, 123 - Centro<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span>contato@agilservicosbr.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>&copy; {currentYear} Ágil Serviços BR. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
