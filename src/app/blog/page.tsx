import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  {
    id: "imposto-de-renda-2024",
    title: "Tudo o que você precisa saber sobre o Imposto de Renda 2024",
    excerpt: "Confira os prazos, quem deve declarar e como evitar a temida malha fina este ano.",
    date: "10 Mai, 2024",
    author: "Equipe Ágil",
    category: "Imposto de Renda"
  },
  {
    id: "beneficios-mei",
    title: "5 benefícios do MEI que você provavelmente não conhece",
    excerpt: "Além da formalização, o MEI oferece vantagens previdenciárias e acesso a crédito facilitado.",
    date: "05 Mai, 2024",
    author: "Equipe Ágil",
    category: "Empreendedorismo"
  },
  {
    id: "regularizacao-imovel",
    title: "Por que regularizar seu imóvel antes de colocá-lo à venda?",
    excerpt: "A falta de documentação pode desvalorizar seu patrimônio em até 30%. Saiba como evitar.",
    date: "28 Abr, 2024",
    author: "Equipe Ágil",
    category: "Imóveis"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-16">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Blog Ágil</h1>
            <p className="text-slate-600">Dicas, notícias e informações relevantes sobre contabilidade, leis e burocracia.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-slate-200"></div>
                <div className="p-8 space-y-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-bold text-primary uppercase tracking-widest">
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight flex-grow">
                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 flex items-center justify-between border-t border-slate-50 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary font-bold text-sm pt-2 group"
                  >
                    Ler artigo completo
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
