
import React from 'react';

const RH = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Recursos Humanos</h1>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
            Nova Vaga
          </button>
          <button className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-muted">
            Novo Processo Seletivo
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card p-4 rounded-lg border border-border">
          <h3 className="font-medium mb-2">Total de Funcionários</h3>
          <p className="text-2xl font-bold text-primary">42</p>
          <p className="text-sm text-gray-500">5 departamentos</p>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <h3 className="font-medium mb-2">Vagas Abertas</h3>
          <p className="text-2xl font-bold text-green-500">7</p>
          <p className="text-sm text-gray-500">3 departamentos</p>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <h3 className="font-medium mb-2">Férias Pendentes</h3>
          <p className="text-2xl font-bold text-amber-500">5</p>
          <p className="text-sm text-gray-500">Para os próximos 30 dias</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card p-4 rounded-lg border border-border">
          <h2 className="text-xl font-bold mb-4">Processos Seletivos</h2>
          <div className="space-y-3">
            {[
              { cargo: 'Desenvolvedor Frontend', departamento: 'TI', vagas: 2, candidatos: 15, status: 'Em Andamento' },
              { cargo: 'Analista Contábil', departamento: 'Financeiro', vagas: 1, candidatos: 8, status: 'Em Andamento' },
              { cargo: 'Gerente Comercial', departamento: 'Comercial', vagas: 1, candidatos: 12, status: 'Entrevistas' },
              { cargo: 'Assistente Administrativo', departamento: 'Administrativo', vagas: 2, candidatos: 22, status: 'Finalizado' },
            ].map((processo, index) => (
              <div key={index} className="border border-border rounded-md p-3 hover:bg-muted">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{processo.cargo}</h3>
                    <p className="text-sm text-gray-500">{processo.departamento} • {processo.vagas} vaga(s)</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    processo.status === 'Finalizado' 
                      ? 'bg-green-100 text-green-800' 
                      : processo.status === 'Entrevistas' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-amber-100 text-amber-800'
                  }`}>
                    {processo.status}
                  </span>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-sm">{processo.candidatos} candidatos</p>
                  <button className="text-primary hover:text-primary-dark text-sm">
                    Ver detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <h2 className="text-xl font-bold mb-4">Aniversariantes do Mês</h2>
          <div className="space-y-3">
            {[
              { nome: 'Ana Silva', cargo: 'Analista Financeiro', departamento: 'Financeiro', data: '15/03' },
              { nome: 'Carlos Oliveira', cargo: 'Desenvolvedor Backend', departamento: 'TI', data: '22/03' },
              { nome: 'Mariana Santos', cargo: 'Gerente de Marketing', departamento: 'Marketing', data: '28/03' },
            ].map((aniversariante, index) => (
              <div key={index} className="flex items-center p-3 border border-border rounded-md hover:bg-muted">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                  {aniversariante.nome.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium">{aniversariante.nome}</h3>
                  <p className="text-sm text-gray-500">{aniversariante.cargo} • {aniversariante.data}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-card p-4 rounded-lg border border-border">
        <h2 className="text-xl font-bold mb-4">Solicitações Pendentes</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4">Funcionário</th>
                <th className="text-left py-2 px-4">Tipo</th>
                <th className="text-left py-2 px-4">Data</th>
                <th className="text-left py-2 px-4">Status</th>
                <th className="text-left py-2 px-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {[
                { funcionario: 'Roberto Almeida', tipo: 'Férias', data: '12/03/2023', status: 'Pendente' },
                { funcionario: 'Juliana Costa', tipo: 'Reembolso', data: '10/03/2023', status: 'Análise' },
                { funcionario: 'Pedro Mendes', tipo: 'Ausência', data: '08/03/2023', status: 'Pendente' },
                { funcionario: 'Camila Ribeiro', tipo: 'Alteração de Cargo', data: '05/03/2023', status: 'Análise' },
                { funcionario: 'Fábio Sousa', tipo: 'Férias', data: '01/03/2023', status: 'Aprovado' },
              ].map((solicitacao, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted">
                  <td className="py-2 px-4">{solicitacao.funcionario}</td>
                  <td className="py-2 px-4">{solicitacao.tipo}</td>
                  <td className="py-2 px-4">{solicitacao.data}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      solicitacao.status === 'Aprovado' 
                        ? 'bg-green-100 text-green-800' 
                        : solicitacao.status === 'Análise' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-amber-100 text-amber-800'
                    }`}>
                      {solicitacao.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <button className="text-primary hover:text-primary-dark mr-2">Aprovar</button>
                    <button className="text-red-500 hover:text-red-700">Rejeitar</button>
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

export default RH;
