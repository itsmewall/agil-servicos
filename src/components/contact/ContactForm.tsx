"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  servico: z.string().min(1, "Selecione um serviço"),
  mensagem: z.string().min(10, "Mensagem muito curta"),
  lgpd: z.boolean().refine((val) => val === true, "Você deve aceitar os termos"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    
    try {
      const phoneNumber = "5511999999999";
      const message = `*Novo Lead - Ágil Serviços BR*\n\n` +
        `*Nome:* ${data.nome}\n` +
        `*Email:* ${data.email}\n` +
        `*Telefone:* ${data.telefone}\n` +
        `*Serviço:* ${data.servico}\n` +
        `*Mensagem:* ${data.mensagem}`;
      
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Pequeno delay para UX
      await new Promise(resolve => setTimeout(resolve, 800));
      
      window.open(whatsappUrl, "_blank");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center space-y-4 border border-slate-100">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Mensagem Enviada!</h3>
        <p className="text-slate-600">
          Obrigado pelo contato. Em breve um de nossos especialistas entrará em contato com você.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="btn-primary w-full"
        >
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Solicite seu Orçamento</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Nome Completo</label>
            <input
              {...register("nome")}
              className={cn(
                "w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all",
                errors.nome && "border-red-500"
              )}
              placeholder="Ex: João Silva"
            />
            {errors.nome && <p className="text-red-500 text-xs">{errors.nome.message}</p>}
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">E-mail</label>
            <input
              {...register("email")}
              className={cn(
                "w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all",
                errors.email && "border-red-500"
              )}
              placeholder="Ex: joao@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Telefone (WhatsApp)</label>
            <input
              {...register("telefone")}
              className={cn(
                "w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all",
                errors.telefone && "border-red-500"
              )}
              placeholder="(11) 99999-9999"
            />
            {errors.telefone && <p className="text-red-500 text-xs">{errors.telefone.message}</p>}
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Serviço de Interesse</label>
            <select
              {...register("servico")}
              className={cn(
                "w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all",
                errors.servico && "border-red-500"
              )}
            >
              <option value="">Selecione...</option>
              <option value="irpf">Imposto de Renda</option>
              <option value="mei">MEI</option>
              <option value="folha">Folha de Pagamento</option>
              <option value="imoveis">Regularização de Imóveis</option>
              <option value="aposentadoria">Aposentadoria</option>
            </select>
            {errors.servico && <p className="text-red-500 text-xs">{errors.servico.message}</p>}
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Mensagem</label>
          <textarea
            {...register("mensagem")}
            rows={4}
            className={cn(
              "w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none",
              errors.mensagem && "border-red-500"
            )}
            placeholder="Como podemos te ajudar?"
          />
          {errors.mensagem && <p className="text-red-500 text-xs">{errors.mensagem.message}</p>}
        </div>

        <div className="flex items-start space-x-2 py-2">
          <input
            type="checkbox"
            {...register("lgpd")}
            id="lgpd"
            className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
          />
          <label htmlFor="lgpd" className="text-xs text-slate-500 leading-tight">
            Concordo com o processamento dos meus dados para fins de contato, em conformidade com a LGPD e a <Link href="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.
          </label>
        </div>
        {errors.lgpd && <p className="text-red-500 text-xs">{errors.lgpd.message}</p>}

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          {status === "loading" ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              <span>Enviar Mensagem</span>
              <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
