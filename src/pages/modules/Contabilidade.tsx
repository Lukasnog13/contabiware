
import React from 'react';

const Contabilidade = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Contabilidade</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
          Novo Lançamento
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card p-4 rounded-lg border border-border">
          <h3 className="font-medium mb-2">Receitas do Mês</h3>
          <p className="text-2xl font-bold text-green-500">R$ 87.342,00</p>
          <p className="text-sm text-gray-500">+12% em relação ao mês anterior</p>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <h3 className="font-medium mb-2">Despesas do Mês</h3>
          <p className="text-2xl font-bold text-red-500">R$ 52.123,00</p>
          <p className="text-sm text-gray-500">-5% em relação ao mês anterior</p>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <h3 className="font-medium mb-2">Resultado Líquido</h3>
          <p className="text-2xl font-bold text-primary">R$ 35.219,00</p>
          <p className="text-sm text-gray-500">+23% em relação ao mês anterior</p>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border border-border">
        <h2 className="text-xl font-bold mb-4">Lançamentos Recentes</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4">Data</th>
                <th className="text-left py-2 px-4">Descrição</th>
                <th className="text-left py-2 px-4">Conta</th>
                <th className="text-left py-2 px-4">Valor</th>
                <th className="text-left py-2 px-4">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {[
                { data: '15/03/2023', descricao: 'Pagamento de Salários', conta: '2.1.1.01', valor: 'R$ 23.450,00', tipo: 'Despesa' },
                { data: '14/03/2023', descricao: 'Venda de Produtos', conta: '1.1.2.03', valor: 'R$ 12.320,00', tipo: 'Receita' },
                { data: '12/03/2023', descricao: 'Aluguel', conta: '2.1.2.05', valor: 'R$ 3.500,00', tipo: 'Despesa' },
                { data: '10/03/2023', descricao: 'Prestação de Serviços', conta: '1.1.2.01', valor: 'R$ 8.750,00', tipo: 'Receita' },
                { data: '08/03/2023', descricao: 'Pagamento Fornecedores', conta: '2.1.3.02', valor: 'R$ 15.340,00', tipo: 'Despesa' },
              ].map((item, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted">
                  <td className="py-2 px-4">{item.data}</td>
                  <td className="py-2 px-4">{item.descricao}</td>
                  <td className="py-2 px-4">{item.conta}</td>
                  <td className="py-2 px-4">{item.valor}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${item.tipo === 'Receita' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {item.tipo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contabilidade;
