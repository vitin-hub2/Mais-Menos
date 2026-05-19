import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, LockKeyholeOpen, CheckCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { offers } from '../data';

export function PremiumContent() {
  const { id } = useParams<{ id: string }>();
  const offer = Object.values(offers).find(o => o.id === id);

  if (!offer) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-10"
    >
      <Link to={`/oferta/${offer.id}`} className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
        <ChevronLeft size={16} className="mr-1" />
        Voltar à Introdução
      </Link>

      <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-8 md:p-12 text-white">
          <div className="flex items-center space-x-2 text-emerald-300 font-bold uppercase tracking-wider text-sm mb-4">
            <LockKeyholeOpen size={18} />
            <span>Conteúdo Desbloqueado</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            {offer.title}: O Próximo Passo
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Você está acessando material aprofundado reservado aos assinantes que buscam aplicar melhorias definitivas na sua rotina e ecossistema digital.
          </p>
        </div>

        <div className="p-8 md:p-12">
          <div className="markdown-body space-y-6 text-gray-800 leading-relaxed text-lg mb-10">
            {offer.premiumBody.map((paragraph, idx) => (
              <ReactMarkdown key={idx}>{paragraph}</ReactMarkdown>
            ))}
          </div>

          <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-xl flex items-start space-x-4">
            <CheckCircle className="text-emerald-500 mt-1 flex-shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aplicação Imediata</h3>
              <p className="text-gray-700 leading-relaxed">
                As estratégias detalhadas acima não necessitam de grandes orçamentos ou compras de licenças complexas hoje. Revise os pontos fracos da sua configuração atual antes da próxima aquisição tecnológica — seja um serviço de nuvem ou um equipamento físico —, e certifique-se de que os novos investimentos solucionem problemas estruturais invés de apenas tratar os sintomas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
