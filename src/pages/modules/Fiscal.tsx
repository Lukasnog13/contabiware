
import React from 'react';

const Fiscal = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Departamento Fiscal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card p-4 rounded-lg border border-border">
          <h3 className="font-medium mb-2">Obrigações Pendentes</h3>
          <p className="text-2xl font-bold text-amber-500">4</p>
          <p className="text-sm text-gray-500">Vencimento nos próximos 7 dias</p>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <h3 className="font-medium mb-2">Impostos do Mês</h3>
          <p className="text-2xl font-bold text-primary">R$ 12.567,80</p>
          <p className="text-sm text-gray-500">+3% em relação ao mês anterior</p>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <h3 className="font-medium mb-2">Documentos Fiscais</h3>
          <p className="text-2xl font-bold">183</p>
          <p className="text-sm text-gray-500">Emitidos nos últimos 30 dias</p>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border border-border">
        <h2 className="text-xl font-bold mb-4">Obrigações Fiscais</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4">Obrigação</th>
                <th className="text-left py-2 px-4">Competência</th>
                <th className="text-left py-2 px-4">Vencimento</th>
                <th className="text-left py-2 px-4">Valor</th>
                <th className="text-left py-2 px-4">Status</th>
                <th className="text-left py-2 px-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {[
                { obrigacao: 'DARF PIS', competencia: '02/2023', vencimento: '25/03/2023', valor: 'R$ 2.345,67', status: 'Pendente' },
                { obrigacao: 'DARF COFINS', competencia: '02/2023', vencimento: '25/03/2023', valor: 'R$ 6.789,12', status: 'Pendente' },
                { obrigacao: 'DARF IRPJ', competencia: '02/2023', vencimento: '31/03/2023', valor: 'R$ 3.456,78', status: 'Pendente' },
                { obrigacao: 'GPS', competencia: '02/2023', vencimento: '20/03/2023', valor: 'R$ 8.901,23', status: 'Pendente' },
                { obrigacao: 'DARF CSLL', competencia: '01/2023', vencimento: '28/02/2023', valor: 'R$ 2.567,89', status: 'Pago' },
              ].map((item, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted">
                  <td className="py-2 px-4">{item.obrigacao}</td>
                  <td className="py-2 px-4">{item.competencia}</td>
                  <td className="py-2 px-4">{item.vencimento}</td>
                  <td className="py-2 px-4">{item.valor}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${item.status === 'Pago' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <button className="text-primary hover:text-primary-dark mr-2">Gerar Guia</button>
                    <button className="text-primary hover:text-primary-dark">Pagar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-card p-4 rounded-lg border border-border">
        <h2 className="text-xl font-bold mb-4">Declarações</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-border rounded-md p-4">
            <h3 className="font-medium">SPED Fiscal</h3>
            <p className="text-sm text-gray-500 mb-2">Competência: 02/2023</p>
            <p className="text-sm text-gray-500 mb-2">Prazo: 25/03/2023</p>
            <div className="mt-2">
              <button className="px-3 py-1 bg-primary text-white rounded-md hover:bg-primary-dark text-sm">
                Gerar Arquivo
              </button>
            </div>
          </div>
          
          <div className="border border-border rounded-md p-4">
            <h3 className="font-medium">SPED Contribuições</h3>
            <p className="text-sm text-gray-500 mb-2">Competência: 02/2023</p>
            <p className="text-sm text-gray-500 mb-2">Prazo: 15/04/2023</p>
            <div className="mt-2">
              <button className="px-3 py-1 bg-primary text-white rounded-md hover:bg-primary-dark text-sm">
                Gerar Arquivo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiscal;
