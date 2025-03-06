
import { Link } from 'react-router-dom';
import { Edit, FileDown, Filter, Plus, Search, Trash, UserPlus } from 'lucide-react';

const Funcionarios = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Funcionários</h1>
          <p className="text-gray-500">Gerencie os dados dos colaboradores</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/funcionarios/novo" className="btn-primary flex items-center">
            <UserPlus size={16} className="mr-2" />
            Novo Funcionário
          </Link>
        </div>
      </div>
      
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input 
                type="search" 
                className="block w-full pl-10 py-2 pr-3 rounded-md bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" 
                placeholder="Buscar por nome, cargo, departamento..." 
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button className="btn-outline flex items-center px-3">
              <Filter size={16} className="mr-2" />
              Filtros
            </button>
            <button className="btn-outline flex items-center px-3">
              <FileDown size={16} className="mr-2" />
              Exportar
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-muted">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Nome</th>
                <th className="text-left py-3 px-4 font-medium">Cargo</th>
                <th className="text-left py-3 px-4 font-medium">Departamento</th>
                <th className="text-left py-3 px-4 font-medium">Data de Admissão</th>
                <th className="text-left py-3 px-4 font-medium">Salário</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-right py-3 px-4 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {Array.from({ length: 8 }).map((_, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        {['JS', 'MC', 'RP', 'AS', 'LG', 'FB', 'CT', 'VP'][index]}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">
                          {[
                            'João Silva', 
                            'Maria Costa', 
                            'Rafael Pereira', 
                            'Amanda Santos', 
                            'Lucas Gomes', 
                            'Fernanda Barros',
                            'Carlos Torres',
                            'Vanessa Pires'
                          ][index]}
                        </p>
                        <p className="text-xs text-gray-500">
                          {[
                            'joao.silva@contabiware.com', 
                            'maria.costa@contabiware.com', 
                            'rafael.pereira@contabiware.com', 
                            'amanda.santos@contabiware.com', 
                            'lucas.gomes@contabiware.com', 
                            'fernanda.barros@contabiware.com',
                            'carlos.torres@contabiware.com',
                            'vanessa.pires@contabiware.com'
                          ][index]}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {[
                      'Desenvolvedor', 
                      'Analista de RH', 
                      'Contador', 
                      'Marketing Digital', 
                      'Vendedor', 
                      'Suporte Técnico',
                      'Gerente de Projetos',
                      'Designer'
                    ][index]}
                  </td>
                  <td className="py-3 px-4">
                    {['TI', 'RH', 'Financeiro', 'Marketing', 'Vendas', 'Suporte', 'TI', 'Marketing'][index]}
                  </td>
                  <td className="py-3 px-4">
                    {[
                      '15/03/2021', 
                      '22/05/2020', 
                      '10/01/2019', 
                      '05/08/2022', 
                      '30/11/2021', 
                      '14/04/2023',
                      '28/02/2020',
                      '17/07/2022'
                    ][index]}
                  </td>
                  <td className="py-3 px-4">
                    R$ {['5.800,00', '4.500,00', '6.200,00', '3.900,00', '4.100,00', '3.500,00', '7.200,00', '4.300,00'][index]}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      index % 3 === 0
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : index % 3 === 1
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                    }`}>
                      {index % 3 === 0 ? 'Ativo' : index % 3 === 1 ? 'Férias' : 'Licença'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1 rounded-full hover:bg-muted text-blue-600">
                        <Edit size={18} />
                      </button>
                      <button className="p-1 rounded-full hover:bg-muted text-red-600">
                        <Trash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-500">Mostrando 1-8 de 45 resultados</p>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded border border-border hover:bg-muted">Anterior</button>
            <button className="px-3 py-1 rounded bg-primary text-white">1</button>
            <button className="px-3 py-1 rounded border border-border hover:bg-muted">2</button>
            <button className="px-3 py-1 rounded border border-border hover:bg-muted">3</button>
            <button className="px-3 py-1 rounded border border-border hover:bg-muted">4</button>
            <button className="px-3 py-1 rounded border border-border hover:bg-muted">Próximo</button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Departamentos</h2>
          {[
            { name: 'TI', count: 12, percentage: 26 },
            { name: 'Financeiro', count: 8, percentage: 18 },
            { name: 'Marketing', count: 7, percentage: 16 },
            { name: 'Vendas', count: 10, percentage: 22 },
            { name: 'RH', count: 5, percentage: 11 },
            { name: 'Suporte', count: 3, percentage: 7 },
          ].map((dept, index) => (
            <div key={index} className="mb-3 last:mb-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{dept.name}</span>
                <span className="text-sm text-gray-500">{dept.count} funcionários</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${dept.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Status dos Funcionários</h2>
          <div className="space-y-3">
            {[
              { status: 'Ativos', count: 34, color: 'bg-green-500' },
              { status: 'Férias', count: 6, color: 'bg-amber-500' },
              { status: 'Licença', count: 3, color: 'bg-blue-500' },
              { status: 'Afastados', count: 2, color: 'bg-red-500' },
            ].map((status, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                <div className="flex items-center">
                  <div className={`h-3 w-3 rounded-full ${status.color}`}></div>
                  <span className="ml-2">{status.status}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-medium">{status.count}</span>
                  <span className="text-xs text-gray-500">{Math.round((status.count / 45) * 100)}%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm">Total de Funcionários</span>
              <span className="font-bold">45</span>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Próximos Eventos</h2>
          <div className="space-y-3">
            {[
              { date: '22/10/2023', title: 'Férias - Carlos Torres', days: 3 },
              { date: '30/10/2023', title: 'Aniversário da empresa', days: 11 },
              { date: '05/11/2023', title: 'Admissão - Novo Dev', days: 17 },
              { date: '10/11/2023', title: 'Avaliação de Desempenho', days: 22 },
            ].map((event, index) => (
              <div key={index} className="flex items-center p-3 bg-muted/50 rounded-md">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white ${
                  index % 4 === 0 
                    ? 'bg-amber-500' 
                    : index % 4 === 1 
                    ? 'bg-blue-500' 
                    : index % 4 === 2 
                    ? 'bg-green-500' 
                    : 'bg-purple-500'
                }`}>
                  {event.date.split('/')[0]}
                </div>
                <div className="ml-3">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-xs text-gray-500">{event.date}</p>
                </div>
                <span className="ml-auto text-xs font-medium">
                  {event.days <= 7 
                    ? <span className="text-red-600">Em {event.days} dias</span> 
                    : <span className="text-gray-500">Em {event.days} dias</span>}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-2">
            <button className="text-primary text-sm hover:underline w-full text-center">
              Ver todos os eventos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funcionarios;
