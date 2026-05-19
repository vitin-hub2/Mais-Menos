import React from 'react';
import { Link } from 'react-router-dom';
import { offers } from '../data';

interface AdSensePlaceholderProps {
  position: 'Topo' | 'Meio do Artigo' | 'Sidebar';
}

export function AdSensePlaceholder({ position }: AdSensePlaceholderProps) {
  const offer = offers[position];

  if (!offer) return null;

  return (
    <Link to={`/oferta/${offer.id}`} className="block w-full relative rounded-xl overflow-hidden shadow-sm my-8 group cursor-pointer border border-gray-200 transition-shadow duration-300 hover:shadow-lg">
      <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] uppercase font-bold px-2 py-1 rounded backdrop-blur-md z-10">
        Patrocinado
      </div>
      <div className="relative h-48 md:h-64 w-full">
        <img 
          src={offer.imageUrl} 
          alt={offer.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
          <span className="text-white font-bold text-xl mb-1">{offer.title}</span>
          <span className="text-gray-200 text-sm md:text-base leading-snug">{offer.subtitle}</span>
          <div className="mt-4">
            <span className="inline-block px-4 py-2 bg-blue-600 group-hover:bg-blue-500 transition-colors text-white text-sm font-semibold rounded-md shadow-sm">
              {offer.actionText}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
