import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock posts data again (in a real app this would be in a data file or fetched)
const posts = {
  "imposto-de-renda-2026": {
    title: "Tudo o que você precisa saber sobre o Imposto de Renda 2026",
    content: `
      <p>O prazo para a entrega da declaração do Imposto de Renda Pessoa Física (IRPF) 2026 já começou. Este ano, a Receita Federal trouxe algumas novidades importantes que podem afetar o seu bolso e a forma como você presta contas.</p>
      
      <h2>Quem é obrigado a declarar?</h2>
      <p>Deve declarar quem recebeu rendimentos tributáveis acima de R$ 30.639,90 em 2023. Além disso, quem recebeu rendimentos isentos, não tributáveis ou tributados exclusivamente na fonte acima de R$ 200 mil também está obrigado.</p>
      
      <h2>Novidades de 2026</h2>
      <p>Uma das principais mudanças é o aumento da faixa de isenção, refletindo a nova tabela progressiva. Além disso, a declaração pré-preenchida continua sendo incentivada, oferecendo prioridade na restituição para quem a utiliza.</p>
      
      <h2>Dicas para não cair na malha fina</h2>
      <ul>
        <li>Guarde todos os comprovantes médicos e de educação por 5 anos.</li>
        <li>Declare todos os seus dependentes e seus respectivos rendimentos.</li>
        <li>Não esqueça de declarar contas no exterior e criptoativos.</li>
      </ul>
      
      <p>Se você ainda tem dúvidas ou prefere que um especialista cuide de tudo para garantir a maior restituição possível, entre em contato com a Ágil Serviços.</p>
    `,
    date: "10 Mai, 2024",
    author: "Equipe Ágil",
    category: "Imposto de Renda",
    readTime: "5 min"
  },
  "beneficios-mei": {
    title: "5 benefícios do MEI que você provavelmente não conhece",
    content: "<p>Conteúdo em desenvolvimento...</p>",
    date: "05 Mai, 2024",
    author: "Equipe Ágil",
    category: "Empreendedorismo",
    readTime: "4 min"
  },
  "regularizacao-imovel": {
    title: "Por que regularizar seu imóvel antes de colocá-lo à venda?",
    content: "<p>Conteúdo em desenvolvimento...</p>",
    date: "28 Abr, 2024",
    author: "Equipe Ágil",
    category: "Imóveis",
    readTime: "6 min"
  }
};

export async function generateStaticParams() {
  return Object.keys(posts).map((id) => ({
    id: id,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts[id as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20">
      <article className="container-custom max-w-4xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-slate-500 hover:text-primary mb-8 transition-colors text-sm font-semibold"
        >
          <ArrowLeft size={16} className="mr-2" />
          Voltar para o blog
        </Link>

        <header className="space-y-6 mb-12">
          <div className="flex items-center gap-4 text-xs font-bold text-primary uppercase tracking-widest">
            <span>{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 border-y border-slate-100 py-4">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime} de leitura</span>
            </div>
          </div>
        </header>

        <div 
          className="prose prose-blue max-w-none prose-slate prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-16 pt-8 border-t border-slate-100">
          <div className="bg-slate-50 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900">Gostou deste artigo?</h4>
              <p className="text-sm text-slate-600">Compartilhe com alguém que também precisa dessas informações.</p>
            </div>
            <div className="flex gap-4">
              <button className="btn-outline p-3 rounded-full flex items-center justify-center">
                <Share2 size={20} />
              </button>
              <Link href="/contato" className="btn-primary py-3 px-8">
                Falar com Especialista
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
