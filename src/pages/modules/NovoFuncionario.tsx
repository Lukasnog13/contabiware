
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Image, Upload } from 'lucide-react';

const NovoFuncionario = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    dataNascimento: '',
    genero: '',
    estadoCivil: '',
    // Endereço
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    // Dados Profissionais
    cargo: '',
    departamento: '',
    dataAdmissao: '',
    salario: '',
    tipoContrato: '',
    regime: '',
    // Dados Bancários
    banco: '',
    agencia: '',
    conta: '',
    tipoConta: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio de dados
    console.log('Dados do funcionário:', formData);
    // Avança para a etapa de conclusão
    setCurrentStep(4);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/funcionarios" className="p-2 rounded-full hover:bg-muted">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Novo Funcionário</h1>
          <p className="text-gray-500">Cadastre um novo colaborador no sistema</p>
        </div>
      </div>
      
      <div className="card">
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div 
                  className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    currentStep === step
                      ? 'bg-primary text-white'
                      : currentStep > step
                      ? 'bg-green-500 text-white'
                      : 'bg-muted text-gray-500'
                  }`}
                >
                  {currentStep > step ? <CheckCircle size={20} /> : step}
                </div>
                <span className={`text-sm mt-2 ${currentStep === step ? 'font-medium' : 'text-gray-500'}`}>
                  {
                    step === 1 ? 'Dados Pessoais' :
                    step === 2 ? 'Dados Profissionais' :
                    step === 3 ? 'Dados Bancários' :
                    'Conclusão'
                  }
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-3 max-w-3xl mx-auto">
            <div className="absolute h-0.5 bg-muted top-0 left-5 right-5" />
            <div 
              className="absolute h-0.5 bg-primary top-0 left-5 transition-all" 
              style={{ width: `${(currentStep - 1) * 33.33}%` }} 
            />
          </div>
        </div>

        {currentStep === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome Completo</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="input w-full"
                      placeholder="Nome completo do funcionário"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input w-full"
                      placeholder="email@empresa.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cpf" className="block text-sm font-medium mb-1">CPF</label>
                    <input
                      type="text"
                      id="cpf"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleChange}
                      className="input w-full"
                      placeholder="000.000.000-00"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium mb-1">Telefone</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="input w-full"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="dataNascimento" className="block text-sm font-medium mb-1">Data de Nascimento</label>
                    <input
                      type="date"
                      id="dataNascimento"
                      name="dataNascimento"
                      value={formData.dataNascimento}
                      onChange={handleChange}
                      className="input w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="genero" className="block text-sm font-medium mb-1">Gênero</label>
                    <select
                      id="genero"
                      name="genero"
                      value={formData.genero}
                      onChange={handleChange}
                      className="input w-full"
                    >
                      <option value="">Selecione</option>
                      <option value="M">Masculino</option>
                      <option value="F">Feminino</option>
                      <option value="O">Outro</option>
                      <option value="N">Prefiro não informar</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="estadoCivil" className="block text-sm font-medium mb-1">Estado Civil</label>
                    <select
                      id="estadoCivil"
                      name="estadoCivil"
                      value={formData.estadoCivil}
                      onChange={handleChange}
                      className="input w-full"
                    >
                      <option value="">Selecione</option>
                      <option value="solteiro">Solteiro(a)</option>
                      <option value="casado">Casado(a)</option>
                      <option value="divorciado">Divorciado(a)</option>
                      <option value="viuvo">Viúvo(a)</option>
                      <option value="uniao">União Estável</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="cep" className="block text-sm font-medium mb-1">CEP</label>
                    <input
                      type="text"
                      id="cep"
                      name="cep"
                      value={formData.cep}
                      onChange={handleChange}
                      className="input w-full"
                      placeholder="00000-000"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="logradouro" className="block text-sm font-medium mb-1">Logradouro</label>
                    <input
                      type="text"
                      id="logradouro"
                      name="logradouro"
                      value={formData.logradouro}
                      onChange={handleChange}
                      className="input w-full"
                      placeholder="Rua, Avenida, etc"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="numero" className="block text-sm font-medium mb-1">Número</label>
                    <input
                      type="text"
                      id="numero"
                      name="numero"
                      value={formData.numero}
                      onChange={handleChange}
                      className="input w-full"
                      placeholder="123"
                    />
                  </div>
                  <div>
                    <label htmlFor="complemento" className="block text-sm font-medium mb-1">Complemento</label>
                    <input
                      type="text"
                      id="complemento"
                      name="complemento"
                      value={formData.complemento}
                      onChange={handleChange}
                      className="input w-full"
                      placeholder="Apto, Bloco, etc"
                    />
                  </div>
                  <div>
                    <label htmlFor="bairro" className="block text-sm font-medium mb-1">Bairro</label>
                    <input
                      type="text"
                      id="bairro"
                      name="bairro"
                      value={formData.bairro}
                      onChange={handleChange}
                      className="input w-full"
                      placeholder="Bairro"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cidade" className="block text-sm font-medium mb-1">Cidade</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      className="input w-full"
                      placeholder="Cidade"
                    />
                  </div>
                  <div>
                    <label htmlFor="estado" className="block text-sm font-medium mb-1">Estado</label>
                    <select
                      id="estado"
                      name="estado"
                      value={formData.estado}
                      onChange={handleChange}
                      className="input w-full"
                    >
                      <option value="">Selecione</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="border border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <div className="h-32 w-32 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Image size={48} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">Foto do Funcionário</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Arraste uma imagem ou clique para fazer upload de uma foto.
                </p>
                <button className="btn-outline flex items-center text-sm">
                  <Upload size={16} className="mr-2" />
                  Escolher Arquivo
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  JPG, PNG ou GIF. Tamanho máximo de 1MB.
                </p>
              </div>
              
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-medium">Documentos</h3>
                <div className="bg-muted/50 p-3 rounded-md">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                      <Upload size={20} />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="font-medium">RG / CNH</p>
                      <p className="text-xs text-gray-500">Documento de identificação</p>
                    </div>
                    <button className="btn-outline text-xs py-1 px-2">
                      Upload
                    </button>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-3 rounded-md">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                      <Upload size={20} />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="font-medium">Comprovante de Residência</p>
                      <p className="text-xs text-gray-500">Até 3 meses</p>
                    </div>
                    <button className="btn-outline text-xs py-1 px-2">
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {currentStep === 2 && (
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-lg font-medium mb-4">Dados Profissionais</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cargo" className="block text-sm font-medium mb-1">Cargo</label>
                <input
                  type="text"
                  id="cargo"
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="Cargo do funcionário"
                  required
                />
              </div>
              <div>
                <label htmlFor="departamento" className="block text-sm font-medium mb-1">Departamento</label>
                <select
                  id="departamento"
                  name="departamento"
                  value={formData.departamento}
                  onChange={handleChange}
                  className="input w-full"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="TI">TI</option>
                  <option value="RH">RH</option>
                  <option value="Financeiro">Financeiro</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Vendas">Vendas</option>
                  <option value="Suporte">Suporte</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dataAdmissao" className="block text-sm font-medium mb-1">Data de Admissão</label>
                <input
                  type="date"
                  id="dataAdmissao"
                  name="dataAdmissao"
                  value={formData.dataAdmissao}
                  onChange={handleChange}
                  className="input w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="salario" className="block text-sm font-medium mb-1">Salário Base</label>
                <input
                  type="text"
                  id="salario"
                  name="salario"
                  value={formData.salario}
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="R$ 0,00"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="tipoContrato" className="block text-sm font-medium mb-1">Tipo de Contrato</label>
                <select
                  id="tipoContrato"
                  name="tipoContrato"
                  value={formData.tipoContrato}
                  onChange={handleChange}
                  className="input w-full"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="CLT">CLT</option>
                  <option value="PJ">PJ</option>
                  <option value="Estágio">Estágio</option>
                  <option value="Temporário">Temporário</option>
                </select>
              </div>
              <div>
                <label htmlFor="regime" className="block text-sm font-medium mb-1">Regime de Trabalho</label>
                <select
                  id="regime"
                  name="regime"
                  value={formData.regime}
                  onChange={handleChange}
                  className="input w-full"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="integral">Integral (40h)</option>
                  <option value="parcial30">Parcial (30h)</option>
                  <option value="parcial20">Parcial (20h)</option>
                  <option value="remoto">Remoto</option>
                  <option value="hibrido">Híbrido</option>
                </select>
              </div>
            </div>
            
            <h3 className="text-lg font-medium mt-8 mb-4">Benefícios</h3>
            
            <div className="space-y-3">
              {['Vale Transporte', 'Vale Refeição', 'Vale Alimentação', 'Plano de Saúde', 'Plano Odontológico', 'Seguro de Vida'].map((beneficio, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`beneficio-${index}`}
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <label htmlFor={`beneficio-${index}`} className="ml-2 block text-sm">
                    {beneficio}
                  </label>
                </div>
              ))}
            </div>
            
            <h3 className="text-lg font-medium mt-8 mb-4">Jornada de Trabalho</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="horarioEntrada" className="block text-sm font-medium mb-1">Horário de Entrada</label>
                <input
                  type="time"
                  id="horarioEntrada"
                  className="input w-full"
                />
              </div>
              <div>
                <label htmlFor="horarioSaida" className="block text-sm font-medium mb-1">Horário de Saída</label>
                <input
                  type="time"
                  id="horarioSaida"
                  className="input w-full"
                />
              </div>
            </div>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-md mt-6">
              <h4 className="text-amber-800 dark:text-amber-400 font-medium mb-2">Observações</h4>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Lembre-se que todos os dados profissionais devem estar de acordo com o contrato de trabalho e a legislação vigente.
              </p>
            </div>
          </div>
        )}
        
        {currentStep === 3 && (
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-lg font-medium mb-4">Dados Bancários</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="banco" className="block text-sm font-medium mb-1">Banco</label>
                <select
                  id="banco"
                  name="banco"
                  value={formData.banco}
                  onChange={handleChange}
                  className="input w-full"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="001">Banco do Brasil</option>
                  <option value="104">Caixa Econômica Federal</option>
                  <option value="033">Santander</option>
                  <option value="341">Itaú</option>
                  <option value="237">Bradesco</option>
                  <option value="260">Nubank</option>
                  <option value="336">C6 Bank</option>
                  <option value="077">Inter</option>
                </select>
              </div>
              <div>
                <label htmlFor="agencia" className="block text-sm font-medium mb-1">Agência</label>
                <input
                  type="text"
                  id="agencia"
                  name="agencia"
                  value={formData.agencia}
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="Número da agência"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="conta" className="block text-sm font-medium mb-1">Conta</label>
                <input
                  type="text"
                  id="conta"
                  name="conta"
                  value={formData.conta}
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="Número da conta com dígito"
                  required
                />
              </div>
              <div>
                <label htmlFor="tipoConta" className="block text-sm font-medium mb-1">Tipo de Conta</label>
                <select
                  id="tipoConta"
                  name="tipoConta"
                  value={formData.tipoConta}
                  onChange={handleChange}
                  className="input w-full"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="corrente">Conta Corrente</option>
                  <option value="poupanca">Conta Poupança</option>
                  <option value="salario">Conta Salário</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-medium">Documentos Adicionais</h3>
              
              <div className="bg-muted/50 p-4 rounded-md">
                <h4 className="font-medium mb-2">Documentos para Folha de Pagamento</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Anexe os documentos necessários para o processamento da folha de pagamento.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-card rounded-md">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                        <Upload size={20} />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">Carteira de Trabalho</p>
                        <p className="text-xs text-gray-500">CTPS (Digital ou Física)</p>
                      </div>
                    </div>
                    <button className="btn-outline text-xs py-1 px-2">
                      Upload
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-card rounded-md">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                        <Upload size={20} />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">PIS/PASEP</p>
                        <p className="text-xs text-gray-500">Documento com número de registro</p>
                      </div>
                    </div>
                    <button className="btn-outline text-xs py-1 px-2">
                      Upload
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-card rounded-md">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                        <Upload size={20} />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">Comprovante Bancário</p>
                        <p className="text-xs text-gray-500">Para confirmação dos dados bancários</p>
                      </div>
                    </div>
                    <button className="btn-outline text-xs py-1 px-2">
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md mt-6">
              <h4 className="text-blue-800 dark:text-blue-400 font-medium mb-2">Importante</h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Os dados bancários são essenciais para o pagamento de salários e benefícios. Certifique-se de que todas as informações estão corretas.
              </p>
            </div>
          </div>
        )}
        
        {currentStep === 4 && (
          <div className="max-w-xl mx-auto text-center py-8">
            <div className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 mx-auto mb-6">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Cadastro Concluído com Sucesso!</h2>
            <p className="text-gray-500 mb-8">
              O novo funcionário foi cadastrado no sistema e já pode ser gerenciado na plataforma.
            </p>
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-md text-left">
                <h3 className="font-medium mb-2">Próximos Passos</h3>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Enviar credenciais de acesso ao funcionário
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Configurar benefícios e descontos aplicáveis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Adicionar ao processamento da próxima folha de pagamento
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Registrar no sistema de ponto eletrônico
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center mt-6">
                <Link to="/funcionarios" className="btn-outline w-full sm:w-auto">
                  Voltar para Funcionários
                </Link>
                <Link to="/funcionarios/novo" className="btn-primary w-full sm:w-auto">
                  Cadastrar Outro Funcionário
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {currentStep < 4 && (
          <div className="flex justify-between mt-8 pt-4 border-t border-border">
            <button
              onClick={handlePrevious}
              className="btn-outline"
              disabled={currentStep === 1}
            >
              Voltar
            </button>
            
            {currentStep < 3 ? (
              <button onClick={handleNext} className="btn-primary">
                Próximo
              </button>
            ) : (
              <button onClick={handleSubmit} className="btn-primary">
                Finalizar Cadastro
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NovoFuncionario;
