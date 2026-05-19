import React from 'react';
import { motion } from 'motion/react';
import { AdSensePlaceholder } from '../components/AdSensePlaceholder';

export function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto space-y-8"
    >
      <h1 className="text-4xl font-extrabold text-gray-900 border-b border-gray-200 pb-4">
        Quem Somos
      </h1>
      
      <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
        <p>
          O portal <strong className="text-gray-900">Mais&Menos</strong> nasceu da necessidade de criar análises reais, independentes e aprofundadas sobre o vasto mercado de tecnologia e eletrônicos.
        </p>
        
        <AdSensePlaceholder position="Meio do Artigo" />

        <p>
          Muitas vezes o consumidor é inundado com publicações baseadas puramente em marketing. Nós seguimos o caminho oposto: mergulhamos nas especificações, testamos os hardwares e avaliamos a usabilidade real. Se um produto oferece <em>"mais"</em> funcionalidade por <em>"menos"</em> preço, ele tem destaque garantido aqui.
        </p>
        <p>
          Nossa equipe é formada por especialistas técnicos e redatores que vivem o universo da tecnologia diariamente. Acreditamos na transparência absoluta. Por isso, as recomendações presentes nos artigos acompanham nossas impressões verídicas e links para as melhores ofertas, auxiliando você a fazer o melhor negócio.
        </p>
      </div>
    </motion.div>
  );
}
