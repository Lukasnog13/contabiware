
import { Link } from 'react-router-dom';
import { Calendar, DollarSign, FileDown, FileText, Printer, RefreshCw } from 'lucide-react';

const FolhaPagamento = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Folha de Pagamento</h1>
          <p className="text-gray-500">Gerencie os pagamentos dos funcionários</p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
          <Link to="/folha-pagamento/processar" className="btn-primary flex items-center">
            <RefreshCw size={16} className="mr-2" />
            Processar Folha
          </Link>
          <button className="btn-outline flex items-center">
            <Printer size={16} className="mr-2" />
            Imprimir
          </button>
        </div>
      </div>
      
      <div className="card">
        <div className="flex items-center flex-wrap gap-4 mb-6">
          <div>
            <label htmlFor="month" className="block text-sm font-medium mb-1">Mês</label>
            <select id="month" className="input min-w-[150px]">
              <option value="10">Outubro/2023</option>
              <option value="9">Setembro/2023</option>
              <option value="8">Agosto/2023</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="department" className="block text-sm font-medium mb-1">Departamento</label>
            <select id="department" className="input min-w-[150px]">
              <option value="">Todos</option>
              <option value="ti">TI</option>
              <option value="rh">RH</option>
              <option value="financeiro">Financeiro</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="status" className="block text-sm font-medium mb-1">Status</label>
            <select id="status" className="input min-w-[150px]">
              <option value="">Todos</option>
              <option value="aprovado">Aprovado</option>
              <option value="pendente">Pendente</option>
              <option value="pago">Pago</option>
            </select>
          </div>
          
          <div className="ml-auto">
            <label className="block invisible text-sm font-medium mb-1">Buscar</label>
            <input type="text" placeholder="Buscar funcionário..." className="input min-w-[250px]" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-muted">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Funcionário</th>
                <th className="text-left py-3 px-4 font-medium">Departamento</th>
                <th className="text-left py-3 px-4 font-medium">Salário Base</th>
                <th className="text-left py-3 px-4 font-medium">Descontos</th>
                <th className="text-left py-3 px-4 font-medium">Salário Líquido</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-right py-3 px-4 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {Array.from({ length: 6 }).map((_, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {['JS', 'MC', 'RP', 'AS', 'LG', 'FB'][index]}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">
                          {[
                            'João Silva', 
                            'Maria Costa', 
                            'Rafael Pereira', 
                            'Amanda Santos', 
                            'Lucas Gomes', 
                            'Fernanda Barros'
                          ][index]}
                        </p>
                        <p className="text-xs text-gray-500">
                          {[
                            'joao.silva@contabiware.com', 
                            'maria.costa@contabiware.com', 
                            'rafael.pereira@contabiware.com', 
                            'amanda.santos@contabiware.com', 
                            'lucas.gomes@contabiware.com', 
                            'fernanda.barros@contabiware.com'
                          ][index]}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {['TI', 'RH', 'Financeiro', 'Marketing', 'Vendas', 'Suporte'][index]}
                  </td>
                  <td className="py-3 px-4">
                    R$ {['5.800,00', '4.500,00', '6.200,00', '3.900,00', '4.100,00', '3.500,00'][index]}
                  </td>
                  <td className="py-3 px-4">
                    R$ {['1.740,00', '1.350,00', '1.860,00', '1.170,00', '1.230,00', '1.050,00'][index]}
                  </td>
                  <td className="py-3 px-4">
                    R$ {['4.060,00', '3.150,00', '4.340,00', '2.730,00', '2.870,00', '2.450,00'][index]}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      index % 3 === 0
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : index % 3 === 1
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                    }`}>
                      {index % 3 === 0 ? 'Pago' : index % 3 === 1 ? 'Pendente' : 'Aprovado'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1 rounded-full hover:bg-muted">
                        <FileText size={18} />
                      </button>
                      <button className="p-1 rounded-full hover:bg-muted">
                        <Printer size={18} />
                      </button>
                      <button className="p-1 rounded-full hover:bg-muted">
                        <FileDown size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-500">Mostrando 1-6 de 24 resultados</p>
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Calendário de Pagamentos</h2>
          <div className="space-y-3">
            {[
              { date: '30/10/2023', desc: 'Salários' },
              { date: '07/11/2023', desc: 'FGTS' },
              { date: '20/11/2023', desc: 'INSS' },
              { date: '20/11/2023', desc: 'IRRF' },
            ].map((item, index) => (
              <div key={index} className="flex items-center p-3 bg-muted/50 rounded-md">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Calendar size={18} />
                </div>
                <div className="ml-3">
                  <p className="font-medium">{item.desc}</p>
                  <p className="text-xs text-gray-500">Vencimento: {item.date}</p>
                </div>
                <span className="ml-auto text-sm">
                  {index === 0 
                    ? <span className="text-green-600">Próximo</span> 
                    : <span className="text-gray-500">Pendente</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Resumo Financeiro</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <DollarSign size={18} />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Total Bruto</p>
                  <p className="text-xs text-gray-500">Folha de Outubro</p>
                </div>
              </div>
              <span className="text-lg font-bold">R$ 420.500,00</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                  <DollarSign size={18} />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Total Descontos</p>
                  <p className="text-xs text-gray-500">INSS, IRRF, outros</p>
                </div>
              </div>
              <span className="text-lg font-bold">R$ 126.150,00</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <DollarSign size={18} />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Total Líquido</p>
                  <p className="text-xs text-gray-500">A pagar</p>
                </div>
              </div>
              <span className="text-lg font-bold">R$ 294.350,00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolhaPagamento;
