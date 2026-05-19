import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { CookieBanner } from './CookieBanner';

export function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-gray-800 font-sans">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-black text-gray-900 tracking-tighter">
              Mais&<span className="text-blue-600">Menos</span>
            </Link>
          </div>
          
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Pesquisar análises ou tutoriais..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 sm:text-sm transition-colors"
              />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Início</Link>
            <Link to="/quem-somos" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Quem Somos</Link>
            <Link to="/contato" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contato</Link>
          </nav>

          <button className="md:hidden p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
            <Search className="h-6 w-6" />
          </button>
        </div>
      </header>

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12 pb-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-2xl font-black text-gray-900 tracking-tighter">
                Mais&<span className="text-blue-600">Menos</span>
              </span>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
                O seu portal independente de análises e guias de compra focado em ajudar consumidores a tomarem as melhores decisões no mercado de tecnologia.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Links Úteis</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/quem-somos" className="text-base text-gray-500 hover:text-gray-900">Quem Somos</Link></li>
                <li><Link to="/contato" className="text-base text-gray-500 hover:text-gray-900">Contato Comercial</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/politica-de-privacidade" className="text-base text-gray-500 hover:text-gray-900">Política de Privacidade</Link></li>
                <li><Link to="/termos-de-uso" className="text-base text-gray-500 hover:text-gray-900">Termos de Uso</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 flex items-center justify-center">
            <p className="text-base text-gray-400">
              &copy; {new Date().getFullYear()} Mais&Menos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      <CookieBanner />
    </div>
  );
}
