import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, ChevronLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { offers } from '../data';

export function Offer() {
  const { id } = useParams<{ id: string }>();
  const offer = Object.values(offers).find(o => o.id === id);

  if (!offer) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-10"
    >
      <Link to="/" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
        <ChevronLeft size={16} className="mr-1" />
        Voltar para a Home
      </Link>

      <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100">
        <div className="relative h-64 md:h-96 w-full">
          <img src={offer.imageUrl} alt={offer.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded mb-4">
              Conteúdo Especial
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              {offer.title}
            </h1>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <p className="text-xl text-gray-600 font-medium leading-relaxed mb-10 border-l-4 border-blue-600 pl-4">
            {offer.subtitle}
          </p>

          <div className="markdown-body space-y-6 text-gray-800 leading-relaxed text-lg mb-10">
            {offer.content.map((paragraph, idx) => (
              <ReactMarkdown key={idx}>{paragraph}</ReactMarkdown>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-10">
             <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
               <ShieldCheck className="text-emerald-500 mr-2" size={24} />
               Destaques do Material
             </h3>
             <ul className="space-y-3">
               {offer.features.map((feat, idx) => (
                 <li key={idx} className="flex items-center text-gray-700">
                   <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 shrink-0" />
                   <span>{feat}</span>
                 </li>
               ))}
             </ul>
          </div>

          <div className="text-center bg-blue-50 border border-blue-100 p-10 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Acesse o conteúdo gratuitamente</h2>
            <Link to={`/conteudo-premium/${offer.id}`} className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all hover:-translate-y-1 w-full md:w-auto">
              Acessar Conteúdo Premium Agora
            </Link>
            <p className="text-sm text-gray-500 mt-4">Acesso instantâneo e livre de spam. Proteção absoluta dos seus dados.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
