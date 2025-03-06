
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Search, Bell, Sun, Moon, LogOut, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-card border-b border-border px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="md:hidden">
          <button className="p-2 rounded-md hover:bg-muted">
            <Menu size={20} />
          </button>
        </div>
        
        <div className="hidden md:flex items-center flex-1 max-w-xl">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input 
              type="search" 
              className="block w-full pl-10 py-2 pr-3 rounded-md bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" 
              placeholder="Pesquisar..." 
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-muted relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-muted"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
            >
              {user?.name.charAt(0).toUpperCase()}
            </button>
            
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg z-10">
                <div className="p-3 border-b border-border">
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
                <div className="p-1">
                  <button 
                    onClick={handleLogout}
                    className="flex items-center w-full px-3 py-2 text-sm text-left rounded-md hover:bg-muted transition-colors"
                  >
                    <LogOut size={16} className="mr-2" />
                    Sair
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
