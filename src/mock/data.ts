// src/mock/data.ts
import { Api } from '../types/apiTypes';

export const apiList: Api[] = [
  {
    id: 1,
    name: 'Usuários API',
    description: 'Gerencia operações relacionadas a usuários.',
    version: '1.0.0',
    endpoint: '/api/usuarios',
    documentation: 'https://docs.exemplo.com/usuarios',
    status:'online'
  },
  {
    id: 2,
    name: 'Produtos API',
    description: 'Gerencia operações relacionadas a produtos.',
    version: '2.1.0',
    endpoint: '/api/produtos',
    documentation: 'https://docs.exemplo.com/produtos',
    status:'online'
  },
  // Adicione mais APIs conforme necessário
];
