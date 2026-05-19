import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Post } from './pages/Post';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Offer } from './pages/Offer';
import { PremiumContent } from './pages/PremiumContent';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post/:id" element={<Post />} />
          <Route path="oferta/:id" element={<Offer />} />
          <Route path="conteudo-premium/:id" element={<PremiumContent />} />
          <Route path="quem-somos" element={<About />} />
          <Route path="contato" element={<Contact />} />
          <Route path="politica-de-privacidade" element={<Privacy />} />
          <Route path="termos-de-uso" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
