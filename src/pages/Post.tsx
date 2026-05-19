import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Calendar, User, Clock, CheckCircle } from 'lucide-react';
import { articles } from '../data';
import { AdSensePlaceholder } from '../components/AdSensePlaceholder';
import ReactMarkdown from 'react-markdown';

export function Post() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <motion.article 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-grow max-w-4xl"
      >
        <div className="mb-8">
          <div className="flex items-center text-blue-600 text-sm font-bold uppercase tracking-wider mb-4 space-x-2">
            <span>Início</span>
            <ChevronRight size={14} className="text-gray-400" />
            <span>{article.category}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-y-2 gap-x-6">
            <div className="flex items-center"><User size={16} className="mr-2" />{article.author}</div>
            <div className="flex items-center"><Calendar size={16} className="mr-2" />{article.date}</div>
            <div className="flex items-center"><Clock size={16} className="mr-2" />{article.readTime}</div>
          </div>
        </div>

        <figure className="mb-10 rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </figure>

        <AdSensePlaceholder position="Topo" />

        <div className="prose prose-lg prose-blue max-w-none text-gray-800 leading-relaxed space-y-6">
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            {article.intro}
          </p>

          {/* Render markdown content block 1 */}
          <div className="markdown-body mt-8 space-y-6 text-[#1F2937]">
            {article.body.slice(0, Math.ceil(article.body.length / 2)).map((paragraph, idx) => (
              <ReactMarkdown key={idx}>{paragraph}</ReactMarkdown>
            ))}
          </div>
          
          <AdSensePlaceholder position="Meio do Artigo" />

          <div className="markdown-body mt-8 space-y-6 text-[#1F2937]">
            {article.body.slice(Math.ceil(article.body.length / 2)).map((paragraph, idx) => (
              <ReactMarkdown key={idx}>{paragraph}</ReactMarkdown>
            ))}
          </div>

          <div className="my-10 bg-gray-50 border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ficha Técnica e Destaques</h3>
            <ul className="space-y-4">
              {article.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="text-emerald-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-200 pb-2">Conclusão</h2>
          <p className="leading-relaxed">
            {article.conclusion}
          </p>
        </div>

        <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Gostou dessa análise?</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Verifique as condições atuais e a disponibilidade oficial na loja com nosso parceiro verificado.
          </p>
          <a 
            href={article.actionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            VERIFICAR DISPONIBILIDADE OFICIAL
          </a>
        </div>
      </motion.article>

      <aside className="w-full lg:w-80 flex-shrink-0 space-y-8">
        <AdSensePlaceholder position="Sidebar" />
        
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Sobre o Blog</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            O portal <strong className="text-gray-900">Mais&Menos</strong> traz análises sinceras sobre tecnologia para ajudar você a decidir com consciência. Nossa missão é cortar o ruído do marketing e focar na utilidade real dos produtos.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Outros Posts Recomendados</h3>
          <ul className="space-y-4">
            {articles.filter(a => a.id !== article.id).slice(0, 3).map(related => (
              <li key={related.id}>
                <a href={`/post/${related.id}`} className="group flex flex-col">
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-snug">
                    {related.title}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">{related.date}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
