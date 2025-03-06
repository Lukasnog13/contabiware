
import { Users, DollarSign, FileText, Calendar, TrendingUp, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-500">Bem-vindo ao Contabiware</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="btn-primary">Gerar Relatórios</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-primary/20 text-primary">
              <Users size={24} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Funcionários</h2>
              <p className="text-2xl font-bold">145</p>
            </div>
          </div>
          <div className="mt-2 text-sm flex items-center text-green-600">
            <TrendingUp size={16} className="mr-1" />
            <span>Aumento de 5% este mês</span>
          </div>
        </div>
        
        <div className="card bg-gradient-to-br from-secondary/10 to-secondary/5">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-secondary/20 text-secondary">
              <DollarSign size={24} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Folha Mensal</h2>
              <p className="text-2xl font-bold">R$ 420.500</p>
            </div>
          </div>
          <div className="mt-2 text-sm flex items-center text-green-600">
            <TrendingUp size={16} className="mr-1" />
            <span>Aumento de 3% este mês</span>
          </div>
        </div>
        
        <div className="card bg-gradient-to-br from-blue-500/10 to-blue-500/5">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-500/20 text-blue-500">
              <FileText size={24} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Documentos</h2>
              <p className="text-2xl font-bold">287</p>
            </div>
          </div>
          <div className="mt-2 text-sm flex items-center text-blue-600">
            <TrendingUp size={16} className="mr-1" />
            <span>18 pendentes de aprovação</span>
          </div>
        </div>
        
        <div className="card bg-gradient-to-br from-amber-500/10 to-amber-500/5">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-amber-500/20 text-amber-500">
              <Calendar size={24} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Próximo Pagamento</h2>
              <p className="text-2xl font-bold">5 dias</p>
            </div>
          </div>
          <div className="mt-2 text-sm flex items-center text-amber-600">
            <AlertCircle size={16} className="mr-1" />
            <span>Dia 30 de Outubro</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Atividades Recentes</h2>
            <button className="text-sm text-primary hover:underline">Ver tudo</button>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-start pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users size={18} />
                </div>
                <div className="ml-4">
                  <p className="font-medium">Novo funcionário registrado</p>
                  <p className="text-sm text-gray-500">Maria Silva foi adicionada ao departamento de TI</p>
                  <p className="text-xs text-gray-400 mt-1">Há 2 horas</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Pendências</h2>
            <button className="text-sm text-primary hover:underline">Ver tudo</button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                  <AlertCircle size={16} />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Guias FGTS</p>
                  <p className="text-xs text-gray-500">Vence em 2 dias</p>
                </div>
              </div>
              <button className="btn-outline text-xs py-1">Resolver</button>
            </div>
            
            <div className="flex items-center justify-between bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                  <AlertCircle size={16} />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Ponto de Funcionários</p>
                  <p className="text-xs text-gray-500">5 pendentes de aprovação</p>
                </div>
              </div>
              <button className="btn-outline text-xs py-1">Aprovar</button>
            </div>
            
            <div className="flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <AlertCircle size={16} />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Relatório Mensal</p>
                  <p className="text-xs text-gray-500">Precisa ser finalizado</p>
                </div>
              </div>
              <button className="btn-outline text-xs py-1">Editar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
