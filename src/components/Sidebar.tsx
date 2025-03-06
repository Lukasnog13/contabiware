
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  HomeIcon, 
  Users, 
  DollarSign, 
  Book, 
  Briefcase, 
  FileText, 
  Settings, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const Sidebar = () => {
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { path: '/', name: 'Dashboard', icon: <HomeIcon size={20} /> },
    { path: '/folha-pagamento', name: 'Folha de Pagamento', icon: <DollarSign size={20} /> },
    { path: '/funcionarios', name: 'Funcionários', icon: <Users size={20} /> },
    { path: '/contabilidade', name: 'Contabilidade', icon: <Book size={20} /> },
    { path: '/fiscal', name: 'Fiscal', icon: <FileText size={20} /> },
    { path: '/patrimonio', name: 'Patrimônio', icon: <Briefcase size={20} /> },
    { path: '/rh', name: 'RH', icon: <Users size={20} /> },
  ];

  return (
    <aside className={`bg-card border-r border-border transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} flex flex-col`}>
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!collapsed && <h1 className="text-xl font-bold text-primary">Contabiware</h1>}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-1 rounded-full hover:bg-muted"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <div className="flex-1 py-4 overflow-y-auto">
        <nav className="space-y-1 px-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center px-3 py-2 rounded-md transition-colors ${
                  isActive 
                    ? 'bg-primary text-white' 
                    : 'hover:bg-muted'
                }`
              }
            >
              <span className="mr-3">{item.icon}</span>
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
      
      {!collapsed && (
        <div className="p-4 border-t border-border">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.role}</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
