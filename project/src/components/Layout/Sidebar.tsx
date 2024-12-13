import { Home, Library, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className="w-64 bg-white h-full p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-indigo-600 rounded-full" />
        <h1 className="text-xl font-bold">Peritune</h1>
      </div>
      
      <nav className="space-y-4">
        <Link to="/" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors">
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link to="/search" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors">
          <Search size={20} />
          <span>Search</span>
        </Link>
        <Link to="/library" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors">
          <Library size={20} />
          <span>Library</span>
        </Link>
        <Link to="/profile" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors">
          <User size={20} />
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  );
}