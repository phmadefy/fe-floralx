export const UFs = [
  { sigla: 'AC', description: 'Acre' },
  { sigla: 'AL', description: 'Alagoas' },
  { sigla: 'AP', description: 'Amapá' },
  { sigla: 'AM', description: 'Amazonas' },
  { sigla: 'BA', description: 'Bahia' },
  { sigla: 'CE', description: 'Ceará' },
  { sigla: 'DF', description: 'Distrito Federal' },
  { sigla: 'ES', description: 'Espirito Santo' },
  { sigla: 'GO', description: 'Goiás' },
  { sigla: 'MA', description: 'Maranhão' },
  { sigla: 'MS', description: 'Mato Grosso do Sul' },
  { sigla: 'MT', description: 'Mato Grosso' },
  { sigla: 'MG', description: 'Minas Gerais' },
  { sigla: 'PA', description: 'Pará' },
  { sigla: 'PB', description: 'Paraíba' },
  { sigla: 'PR', description: 'Paraná' },
  { sigla: 'PE', description: 'Pernambuco' },
  { sigla: 'PI', description: 'Piauí' },
  { sigla: 'RJ', description: 'Rio de Janeiro' },
  { sigla: 'RN', description: 'Rio Grande do Norte' },
  { sigla: 'RS', description: 'Rio Grande do Sul' },
  { sigla: 'RO', description: 'Rondônia' },
  { sigla: 'RR', description: 'Roraima' },
  { sigla: 'SC', description: 'Santa Catarina' },
  { sigla: 'SP', description: 'São Paulo' },
  { sigla: 'SE', description: 'Sergipe' },
  { sigla: 'TO', description: 'Tocantins' },
];

export const StatusUser = [
  { key: 'active', description: 'Ativo', descriptions: 'Ativos' },
  { key: 'suspend', description: 'Bloqueado', descriptions: 'Bloqueados' },
  {
    key: 'waiting approve',
    description: 'Pendente',
    descriptions: 'Pendentes',
  },
  {
    key: 'defaulter',
    description: 'Inadimplente',
    descriptions: 'Inadimplentes',
  },
];

export const Status = [
  { key: '1', description: 'Ativo' },
  { key: '0', description: 'Inativo' },
];

export const Gender = [
  { key: 'male', description: 'Masculino' },
  { key: 'female', description: 'Feminino' },
  { key: 'noAnswer', description: 'Prefiro não responder' },
  { key: 'others', description: 'Outros' },
];

export const OptionsCall = [
  { key: 'request', description: 'Solicitação' },
  { key: 'suggestion', description: 'Sugestão' },
  { key: 'doubt', description: 'Dúvida' },
  { key: 'others', description: 'Outros' },
];

export interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
}

export interface ChooseOptionsModalConfig {
  title: string;
  bindText?: string;
  bindValue?: string;
  endpoint?: string;
  filters?: any;
  selected?: any[];
}
