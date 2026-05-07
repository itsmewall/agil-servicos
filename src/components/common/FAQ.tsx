"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQProps {
  items: {
    question: string;
    answer: string;
  }[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border border-slate-200 rounded-xl overflow-hidden bg-white"
        >
          <button
            className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-semibold text-slate-800">{item.question}</span>
            <ChevronDown 
              className={cn(
                "text-slate-400 transition-transform duration-300",
                openIndex === index && "rotate-180"
              )} 
              size={20} 
            />
          </button>
          <div 
            className={cn(
              "px-6 overflow-hidden transition-all duration-300",
              openIndex === index ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
            )}
          >
            <p className="text-slate-600 text-sm leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
