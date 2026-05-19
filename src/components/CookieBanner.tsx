import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 pointer-events-auto"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 leading-relaxed text-center sm:text-left">
              Utilizamos cookies para melhorar a sua experiência neste site, de acordo com a nossa{' '}
              <Link to="/politica-de-privacidade" className="text-primary-600 font-medium underline text-blue-600 hover:text-blue-800">
                Política de Privacidade
              </Link>
              . Ao continuar navegando, você concorda com o uso destas tecnologias.
            </p>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md whitespace-nowrap transition-colors"
            >
              Concordar e Fechar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
