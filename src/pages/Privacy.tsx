import React from 'react';
import { motion } from 'motion/react';

export function Privacy() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl border border-gray-200 shadow-sm"
    >
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 border-b border-gray-200 pb-4">Política de Privacidade</h1>
      
      <div className="space-y-6 text-gray-700 leading-relaxed text-sm">
        <p>
          Sua privacidade é importante para nós. É política do portal Mais&Menos respeitar a sua privacidade em relação a qualquer informação que possamos coletar no site.
        </p>
        
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Coleta e Uso de Informações</h2>
        <p>
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Cookies e LGPD</h2>
        <p>
          Utilizamos cookies para melhorar a experiência do usuário e coletar dados de navegação anonimizados para estatísticas (Google Analytics). O uso ocorre conforme as diretrizes da Lei Geral de Proteção de Dados (LGPD).
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Anúncios de Terceiros (Google AdSense)</h2>
        <p>
          O Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios no nosso site. O uso do cookie DART pelo Google permite veicular anúncios aos nossos usuários com base em visitas anteriores a este portal e a outros sites na Internet. Os usuários podem desativar o uso do cookie DART acessando a Política de Privacidade da rede de anúncios e de conteúdo do Google.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Links Externos</h2>
        <p>
          Nosso site pode conter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
        </p>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-gray-500">
          Última atualização: Maio de 2026.
        </div>
      </div>
    </motion.div>
  );
}
