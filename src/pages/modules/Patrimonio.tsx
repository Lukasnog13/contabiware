
import React, { useState } from 'react';

const Patrimonio = () => {
  const [filtroStatus, setFiltroStatus] = useState('todos');
  
  const ativos = [
    { id: 1, codigo: 'MOV001', descricao: 'Mesa de Escritório', categoria: 'Móveis', dataAquisicao: '10/01/2020', valorAquisicao: 'R$ 1.250,00', valorAtual: 'R$ 850,00', status: 'Ativo' },
    { id: 2, codigo: 'INF001', descricao: 'Computador Dell i7', categoria: 'Informática', dataAquisicao: '15/03/2021', valorAquisicao: 'R$ 4.300,00', valorAtual: 'R$ 3.440,00', status: 'Ativo' },
    { id: 3, codigo: 'VEI001', descricao: 'Ford Ka 1.0', categoria: 'Veículos', dataAquisicao: '23/07/2019', valorAquisicao: 'R$ 38.000,00', valorAtual: 'R$ 25.600,00', status: 'Ativo' },
    { id: 4, codigo: 'MOV002', descricao: 'Cadeira Giratória', categoria: 'Móveis', dataAquisicao: '05/02/2020', valorAquisicao: 'R$ 450,00', valorAtual: 'R$ 290,00', status: 'Ativo' },
    { id: 5, codigo: 'INF002', descricao: 'Impressora HP Laser', categoria: 'Informática', dataAquisicao: '12/04/2018', valorAquisicao: 'R$ 1.800,00', valorAtual: 'R$ 720,00', status: 'Manutenção' },
    { id: 6, codigo: 'INF003', descricao: 'Notebook Lenovo', categoria: 'Informática', dataAquisicao: '28/09/2020', valorAquisicao: 'R$ 3.200,00', valorAtual: 'R$ 2.240,00', status: 'Baixado' },
  ];

  const ativosFiltrados = filtroStatus === 'todos' 
    ? ativos 
    : ativos.filter(ativo => ativo.status.toLowerCase() === filtroStatus);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Patrimônio</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
          Novo Ativo
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card p-4 rounded-lg border border-border">
          <h3 className="font-medium mb-2">Total de Ativos</h3>
          <p className="text-2xl font-bold text-primary">25</p>
          <p className="text-sm text-gray-500">5 categorias</p>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <h3 className="font-medium mb-2">Valor Total</h3>
          <p className="text-2xl font-bold">R$ 142.350,00</p>
          <p className="text-sm text-gray-500">Valor de aquisição</p>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <h3 className="font-medium mb-2">Depreciação Acumulada</h3>
          <p className="text-2xl font-bold text-amber-500">R$ 32.670,00</p>
          <p className="text-sm text-gray-500">23% do valor total</p>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border border-border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Ativos</h2>
          <div className="flex space-x-2">
            <select 
              className="p-2 border border-border rounded-md bg-background"
              value={filtroStatus}
              onChange={(e) => setFiltroStatus(e.target.value)}
            >
              <option value="todos">Todos os Status</option>
              <option value="ativo">Ativo</option>
              <option value="manutenção">Em Manutenção</option>
              <option value="baixado">Baixado</option>
            </select>
            <button className="p-2 border border-border rounded-md hover:bg-muted">
              Exportar
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4">Código</th>
                <th className="text-left py-2 px-4">Descrição</th>
                <th className="text-left py-2 px-4">Categoria</th>
                <th className="text-left py-2 px-4">Data Aquisição</th>
                <th className="text-left py-2 px-4">Valor Aquisição</th>
                <th className="text-left py-2 px-4">Valor Atual</th>
                <th className="text-left py-2 px-4">Status</th>
                <th className="text-left py-2 px-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {ativosFiltrados.map((ativo) => (
                <tr key={ativo.id} className="border-b border-border hover:bg-muted">
                  <td className="py-2 px-4">{ativo.codigo}</td>
                  <td className="py-2 px-4">{ativo.descricao}</td>
                  <td className="py-2 px-4">{ativo.categoria}</td>
                  <td className="py-2 px-4">{ativo.dataAquisicao}</td>
                  <td className="py-2 px-4">{ativo.valorAquisicao}</td>
                  <td className="py-2 px-4">{ativo.valorAtual}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      ativo.status === 'Ativo' 
                        ? 'bg-green-100 text-green-800' 
                        : ativo.status === 'Manutenção' 
                          ? 'bg-amber-100 text-amber-800' 
                          : 'bg-red-100 text-red-800'
                    }`}>
                      {ativo.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <button className="text-primary hover:text-primary-dark mr-2">Editar</button>
                    <button className="text-primary hover:text-primary-dark">Detalhes</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card p-4 rounded-lg border border-border">
          <h2 className="text-xl font-bold mb-4">Distribuição por Categoria</h2>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Gráfico de distribuição por categoria</p>
          </div>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <h2 className="text-xl font-bold mb-4">Depreciação Anual</h2>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Gráfico de depreciação anual</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patrimonio;
