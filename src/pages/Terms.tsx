import React from 'react';
import { motion } from 'motion/react';

export function Terms() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl border border-gray-200 shadow-sm"
    >
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 border-b border-gray-200 pb-4">Termos de Uso</h1>
      
      <div className="space-y-6 text-gray-700 leading-relaxed text-sm">
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Termos</h2>
        <p>
          Ao acessar o site Mais&Menos, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Uso de Licença</h2>
        <p>
          É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Mais&Menos, apenas para visualização transitória pessoal e não comercial.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Isenção de responsabilidade</h2>
        <p>
          Os materiais no site do Mais&Menos são fornecidos 'como estão'. Não oferecemos garantias, expressas ou implícitas, sobre a exatidão, atualização e aplicabilidade de guias de preços ou ofertas externas de produtos, tendo em vista que os lojistas e marketplaces podem alterar valores sem aviso prévio.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Restrições e Precisão dos Materiais</h2>
        <p>
          Os materiais exibidos podem incluir erros técnicos, tipográficos ou fotográficos. O portal pode fazer alterações nos materiais contidos no site a qualquer momento, sem aviso prévio.
        </p>

        <div className="mt-8 pt-8 border-t border-gray-200 text-gray-500">
          Última atualização: Maio de 2026.
        </div>
      </div>
    </motion.div>
  );
}
