// src/components/ui/ServiceCard.jsx
import { Link } from 'react-router-dom';

export default function ServiceCard({ title, description, linkTo, icon }) {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-6 flex flex-col h-full">
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link 
        to={linkTo} 
        className="text-blue-600 font-bold hover:underline mt-auto inline-flex items-center"
      >
        詳しく見る <span className="ml-1">→</span>
      </Link>
    </div>
  );
}