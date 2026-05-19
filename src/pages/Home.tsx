import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { articles, categories } from '../data';
import { AdSensePlaceholder } from '../components/AdSensePlaceholder';
import { ChevronRight, Mail, Star } from 'lucide-react';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <section className="text-center md:text-left space-y-4 mb-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Análises Reais para <br className="hidden md:block"/>
          <span className="text-blue-600">Consumidores Exigentes</span>.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          Nós testamos, avaliamos e mostramos o que realmente vale a pena comprar. Encontre o equilíbrio ideal entre custo e performance.
        </p>
      </section>

      <AdSensePlaceholder position="Topo" />

      <section>
        <div className="flex items-center justify-between mb-8 pb-2 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Categorias Populares</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex items-center space-x-2 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
              <div className="text-blue-600">{cat.icon}</div>
              <span className="font-medium text-gray-800">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-12 pt-8">
        <div className="flex-grow lg:w-2/3">
          <div className="flex items-center justify-between mb-8 pb-2 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Artigos Recentes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, idx) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Link to={`/post/${article.id}`} className="block relative overflow-hidden aspect-[16/10]">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {article.category.toLowerCase() !== 'gadgets' && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-blue-700 tracking-wide uppercase">
                      {article.category}
                    </div>
                  )}
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <Link to={`/post/${article.id}`} className="group-hover:text-blue-600 transition-colors">
                    <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                      {article.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {article.intro}
                  </p>
                  
                  <Link 
                    to={`/post/${article.id}`}
                    className="inline-flex items-center mt-auto text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors group/link"
                  >
                    Continuar Lendo
                    <ChevronRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        
        <aside className="w-full lg:w-1/3 space-y-8">
          <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Assine nossa Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">Receba as melhores ofertas e análises diretamente na sua caixa de entrada, sem spam.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors text-sm"
              >
                Inscrever-se gratuitamente
              </button>
            </form>
          </div>

          <AdSensePlaceholder position="Sidebar" />

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Star className="text-yellow-500 mr-2" size={20} />
              Escolha do Editor
            </h3>
            <ul className="space-y-5">
              {articles.slice(1, 4).map((related) => (
                <li key={related.id}>
                  <Link to={`/post/${related.id}`} className="group flex flex-col">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-snug">
                      {related.title}
                    </span>
                    <span className="text-xs text-gray-500 mt-1">{related.category} &bull; {related.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </motion.div>
  );
}
