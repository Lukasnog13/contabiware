
import React, { useState } from 'react';

const ProcessarFolha = () => {
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('2023');
  const [competencia, setCompetencia] = useState('');
  const [status, setStatus] = useState<'idle' | 'processing' | 'completed' | 'error'>('idle');

  const handleProcessar = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('processing');
    
    // Simulação de processamento
    setTimeout(() => {
      setStatus('completed');
      setCompetencia(`${mes}/${ano}`);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Processar Folha de Pagamento</h1>
      
      <div className="bg-card p-6 rounded-lg border border-border">
        <h2 className="text-xl font-bold mb-4">Parâmetros de Processamento</h2>
        
        <form onSubmit={handleProcessar} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Mês</label>
              <select 
                className="w-full p-2 border border-border rounded-md bg-background"
                value={mes}
                onChange={(e) => setMes(e.target.value)}
                required
              >
                <option value="">Selecione</option>
                <option value="01">Janeiro</option>
                <option value="02">Fevereiro</option>
                <option value="03">Março</option>
                <option value="04">Abril</option>
                <option value="05">Maio</option>
                <option value="06">Junho</option>
                <option value="07">Julho</option>
                <option value="08">Agosto</option>
                <option value="09">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
              </select>
            </div>
            
            <div>
              <label className="block mb-1 font-medium">Ano</label>
              <input 
                type="text" 
                className="w-full p-2 border border-border rounded-md bg-background"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
                pattern="[0-9]{4}"
                maxLength={4}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Tipo de Folha</label>
              <select className="w-full p-2 border border-border rounded-md bg-background" required>
                <option value="">Selecione</option>
                <option value="mensal">Mensal</option>
                <option value="ferias">Férias</option>
                <option value="13">13º Salário</option>
                <option value="rescisao">Rescisão</option>
              </select>
            </div>
            
            <div>
              <label className="block mb-1 font-medium">Departamento</label>
              <select className="w-full p-2 border border-border rounded-md bg-background">
                <option value="">Todos</option>
                <option value="1">Administrativo</option>
                <option value="2">Comercial</option>
                <option value="3">Financeiro</option>
                <option value="4">Operacional</option>
                <option value="5">TI</option>
              </select>
            </div>
          </div>
          
          <div className="pt-2">
            <button 
              type="submit" 
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === 'processing'}
            >
              {status === 'processing' ? 'Processando...' : 'Processar Folha'}
            </button>
          </div>
        </form>
      </div>
      
      {status === 'completed' && (
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h3 className="text-green-800 font-bold mb-2">Processamento Concluído!</h3>
          <p className="text-green-700">
            A folha de pagamento para a competência {competencia} foi processada com sucesso.
          </p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mr-2">
              Ver Relatório
            </button>
            <button className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50">
              Gerar Guias
            </button>
          </div>
        </div>
      )}
      
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
          <h3 className="text-red-800 font-bold mb-2">Erro no Processamento</h3>
          <p className="text-red-700">
            Ocorreu um erro ao processar a folha de pagamento. Por favor, verifique os parâmetros e tente novamente.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProcessarFolha;
