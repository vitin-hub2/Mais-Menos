import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-extrabold text-gray-900 border-b border-gray-200 pb-4 mb-8">
        Fale Conosco
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-700 leading-relaxed mb-8">
            Dúvidas, sugestões de review ou interesse em parcerias comerciais? Preencha o formulário ao lado e nossa equipe entrará em contato o mais breve possível.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <Mail className="h-5 w-5 mr-3 text-blue-600" />
              <span>sillasa77@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-3 text-blue-600" />
              <span>Rio de janeiro, RJ - Brasil</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900" placeholder="Seu nome" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900" placeholder="seu@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-900" placeholder="Como podemos ajudar?"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
