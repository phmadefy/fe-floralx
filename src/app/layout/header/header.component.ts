import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToolsService } from 'src/app/services/tools.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [ApiService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  Menu: any = [
    {
      id: 'feed',
      title: 'Feed',
      route: 'feed',
      icon: '',
      items: [
        {
          id: 'feed-pg-inicial',
          title: 'Página Inicial',
          route: '/feed',
          icon: '',
        },
        {
          id: 'feed-pg-add-post',
          title: 'Adicionar Post',
          route: 'posts/new',
          icon: '',
        },
      ],
    },
    {
      id: 'dashboard',
      title: 'Dashboard',
      route: 'dashboard',
      icon: '',
    },
    {
      id: 'incentivos',
      title: 'Incentivos',
      route: 'incentivos',
      icon: '',
      items: [
        {
          id: 'incentivos-ativos',
          title: 'Incentivos Ativos',
          route: 'incentivos-ativos',
          icon: '',
        },
        {
          id: 'incentivos-inativos',
          title: 'Incentivos inativos',
          route: 'incentivos-inativos',
          icon: '',
        },
        {
          id: 'meus-incentivos',
          title: 'Meus Incentivos',
          route: 'meus-incentivos',
          icon: '',
        },
        {
          id: 'gallery',
          title: 'Galeria de Fotos e Videos',
          route: 'gallery',
          icon: '',
        },
      ],
    },
    {
      id: 'floral',
      title: 'Floral',
      route: 'floral',
      icon: '',
      items: [
        {
          id: 'meu-floral',
          title: 'Meu Floral',
          route: 'meu-floral',
          icon: '',
        },
        {
          id: 'transferencias-pendentes',
          title: 'Transferências Pendentes',
          route: 'transferencias-pendentes',
          icon: '',
        },
        {
          id: 'transferir-floral',
          title: 'Transferir Floral',
          route: 'transferir-floral',
          icon: '',
        },
        {
          id: 'resgatar-floral',
          title: 'Resgatar Floral',
          route: 'resgatar-floral',
          icon: '',
        },
      ],
    },
    {
      id: 'nfts',
      title: 'NFTs',
      route: 'nfts',
      icon: '',
      items: [
        {
          id: 'meus-nfts',
          title: 'Meus NFTs',
          route: 'meus-nfts',
          icon: '',
        },
        {
          id: 'todos-nfts',
          title: 'Todos NFTs',
          route: 'todos-nfts',
          icon: '',
        },
        {
          id: 'transferencias-pendentes-nfts',
          title: 'Tranferências Pendentes',
          route: 'transferencias-pendentes-nfts',
          icon: '',
        },
        {
          id: 'transferir-nfts',
          title: 'Transferir NFTs',
          route: 'transferir-nfts',
          icon: '',
        },
      ],
    },
    {
      id: 'fale-conosco',
      title: 'Fale Conosco',
      route: 'fale-conosco',
      icon: '',
    },
    {
      id: 'admin',
      title: 'Admin',
      route: 'admin',
      subtitle: 'Administração',
      items: [
        {
          id: 'admin-incentivos',
          title: 'Incentivos',
          route: 'admin/incentives',
          icon: 'fa-solid fa-flag',
          items: [
            {
              id: 'admin-incentivos-todos',
              title: 'Todos Incentivos',
              route: '/',
            },
            {
              id: 'admin-incentives-add',
              title: 'Adicionar Incentivo',
              route: '/add',
            },
            {
              id: 'admin-incentives-terms-of-use',
              title: 'Termos de Uso',
              route: '/terms-of-use',
            },
            {
              id: 'admin-incentives-terms-of-use-add',
              title: 'Adicionar Termo de Uso',
              route: '/terms-of-use/add',
            },
            {
              id: 'admin-incentives-cycle',
              title: 'Ciclos de Incentivo',
              route: '/incentives-cycle',
            },
          ],
        },
        {
          id: 'admin-caixas',
          title: 'Caixas',
          route: '/cash-box',
          queryParams: { tab: 'active' },
          icon: 'fa-solid fa-building-columns',
        },
        {
          id: 'admin-nfts',
          title: 'NFT',
          route: 'admin/nfts',
          icon: 'fa-solid fa-panorama',
          items: [
            {
              id: 'admin-nfts-todos',
              title: 'Todos NFTs',
              route: '/',
              queryParams: { tab: 'all' },
            },
            {
              id: 'admin-nfts-add',
              title: 'Cadastrar NFTs',
              route: '/add',
            },
            {
              id: 'admin-cassificacao-nfts',
              title: 'Classificação NFTs',
              route: '/classifications',
              queryParams: { tab: 'active' },
            },
            {
              id: 'admin-nfts-tipos',
              title: 'Tipos de NFTs',
              route: '/types',
            },
            {
              id: 'admin-nfts-transfer',
              title: 'Transferir Propriedade de NFTs',
              route: '/transfer',
            },
            {
              id: 'admin-nfts-transfer-auth',
              title: 'Autorizar Transferências de NFTs',
              route: '/transfer-auth',
            },
          ],
        },
        {
          id: 'admin-floral',
          title: 'Floral',
          route: 'admin/floral',
          icon: 'fa-solid fa-fan',
          items: [
            {
              id: 'admin-floral-extrato',
              title: 'Extrato de Movimentação',
              route: 'admin/floral-extrato',
            },
            {
              id: 'admin-floral-resgate-pending',
              title: 'Resgates Pendentes',
              route: 'admin/floral-resgate-pendente',
            },
            {
              id: 'admin-floral-resgate-approve',
              title: 'Resgates Aprovados',
              route: 'admin/floral-resgate-aprovados',
            },
            {
              id: 'admin-floral-resgate-rejects',
              title: 'Resgates Rejeitados',
              route: 'admin/floral-resgate-rejeitados',
            },
            {
              id: 'admin-floral-deposit-caixa',
              title: 'Depósito de Floral Caixa Casabella',
              route: 'admin/floral-deposit-caixa',
            },
            {
              id: 'admin-floral-transfer',
              title: 'Tranferência Floral (Caixa / Usuário)',
              route: 'admin/floral-transfer',
            },
            {
              id: 'admin-floral-transfer-auth',
              title: 'Autorizar Tranferência de Floral',
              route: 'admin/floral-transfer-auth',
            },
          ],
        },
        {
          id: 'admin-patrocinio',
          title: 'Patrocinador',
          route: 'admin-patrocinio',
          icon: 'fa-solid fa-circle-dollar-to-slot',
          items: [
            {
              id: 'admin-patrocinio-actives',
              title: 'Patrocínios Ativos',
              route: 'admin/patrocinio-ativos',
            },
            {
              id: 'admin-patrocinio-inactives',
              title: 'Patrocínios Inativos',
              route: 'admin/patrocinio-inativos',
            },
            {
              id: 'admin-patrocinio-add',
              title: 'Adicionar Patrocinador',
              route: 'admin/patrocinio-add',
            },
          ],
        },
        {
          id: 'admin-fale-conosco',
          title: 'Fale Conosco',
          route: 'admin/fale-conosco',
          icon: 'fa-solid fa-ticket',
        },
        {
          id: 'admin-chat',
          title: 'Chat',
          route: 'admin/chat',
          icon: 'fa-solid fa-message',
        },
        {
          id: 'admin-termos',
          title: 'Termos',
          route: 'admin/termos',
          icon: 'fa-solid fa-file-lines',
        },
        {
          id: 'admin-audit',
          title: 'Auditoria',
          route: 'admin/auditoria',
          icon: 'fa-solid fa-clipboard-check',
        },
        {
          id: 'admin-floral-nft-devolution',
          title: 'Devolução de Floral/NFT',
          route: 'admin/devolucao-floral-nft',
          icon: 'fa-solid fa-right-left',
          items: [
            {
              id: 'admin-nft-devolution-caixa',
              title: 'Devolução de NFT ao Caixa',
              route: 'admin/devolucao-nft-caixa',
            },
            {
              id: 'admin-floral-devolution-caixa',
              title: 'Devolução de Floral ao Caixa',
              route: 'admin/devolucao-floral-caixa',
            },
          ],
        },
        {
          id: 'admin-reports',
          title: 'Relatórios',
          route: 'admin/reports',
          icon: 'fa-solid fa-file-invoice',
          items: [
            {
              id: 'admin-report-floral',
              title: 'Relatórios de Floral',
            },
            {
              id: 'admin-report-floral-resgated',
              title: 'Florais Resgatados',
              route: 'admin/report-floral-resgated',
            },
            {
              id: 'admin-report-floral-sald-caixa',
              title: 'Saldo de Florais nos Caixas',
              route: 'admin/report-floral-saldo-caixas',
            },
            {
              id: 'admin-report-floral-circulate',
              title: 'Total de Florais em Circulação',
              route: 'admin/report-floral-circulate',
            },
            {
              id: 'admin-report-floral-add-in-system',
              title: 'Total de Aporte de Floral no Sistema',
              route: 'admin/report-floral-add-in-system',
            },
            {
              id: 'admin-report-floral-taxa',
              title: 'Recebidos em Taxas Floral',
              route: 'admin/report-floral-taxa',
            },
            {
              id: 'admin-report-receive-tax-transfer',
              title: 'Recebidos em Taxa Transf. Entre Contas',
              route: 'admin/report-receive-tax-transfer',
            },

            {
              id: 'admin-report-nft',
              title: 'Relatórios de NFT',
            },
            {
              id: 'admin-report-nft-resgated',
              title: 'NFTs Resgatados',
              route: 'admin/report-nft-resgated',
            },
            {
              id: 'admin-report-nft-history',
              title: 'Histórico do NFT',
              route: 'admin/report-nft-history',
            },
            {
              id: 'admin-report-total-nft-resgat',
              title: 'Total de NFTS a Resgatar',
              route: 'admin/report-total-nft-resgat',
            },
            {
              id: 'admin-report-nft-add-campaing',
              title: 'NFTs Cadastradas para Campanha',
              route: 'admin/report-nft-add-campaing',
            },
            {
              id: 'admin-report-nft-in-db',
              title: 'NFTs Disponiveis no Banco de Dados',
              route: 'admin/report-nft-in-db',
            },
            {
              id: 'admin-report-total-nft-circulated',
              title: 'Total de NFTs em Circulação',
              route: 'admin/report-total-nft-circulated',
            },

            {
              id: 'admin-report-campaing',
              title: 'Relatórios de Campanhas',
            },
            {
              id: 'admin-report-campaing-people-in-incentivos',
              title: 'Pessoas Inscritas nos Incentivos',
              route: 'admin/report-campaing-people-in-incentivos',
            },
            {
              id: 'admin-report-campaing-people-downoad-terms',
              title: 'Pessoas que Baixaram Regulamentos',
              route: 'admin/report-campaing-people-downoad-terms',
            },
            {
              id: 'admin-report-campaing-total-subscribes-winers',
              title: 'Total de Campanhas, Inscritos e Ganhadores',
              route: 'admin/report-campaing-total-subscribes-winers',
            },

            {
              id: 'admin-report-users',
              title: 'Relatórios de Usuários',
            },
            {
              id: 'admin-report-users-add-in-platform',
              title: 'Números de Cadatrados na Plataforma',
              route: 'admin/report-users-add-in-platform',
            },
            {
              id: 'admin-report-users-frequence',
              title: 'Frequência de Acessos de Usuários',
              route: 'admin/report-users-frequence',
            },
          ],
        },
        {
          id: 'admin-users',
          title: 'Usuários',
          route: '/admin/users',
          icon: 'fa-solid fa-user',
          items: [
            {
              id: 'admin-users-active',
              title: 'Usuários Ativos',
              route: '/',
              queryParams: { tab: 'active' },
            },
            {
              id: 'admin-users-inactive',
              title: 'Usuários Inativos',
              route: '/',
              queryParams: { tab: 'suspend' },
            },
            {
              id: 'admin-users-pending',
              title: 'Cadastros Pendentes',
              route: '/',
              queryParams: { tab: 'waiting approve' },
            },
            {
              id: 'admin-user-add',
              title: 'Cadastrar Usuário',
              route: '/add',
            },

            {
              id: 'admin-users-access-group',
              title: 'Grupo de Acesso e Segmentos',
              route: '/segment-access-group',
            },
            {
              id: 'admin-users-permissions-access-group',
              title: 'Permissões de Grupos de Acessos',
              route: '/permissions-access-group',
            },
            {
              id: 'admin-users-office-sector',
              title: 'Cargo e Setores',
              route: '/office-sectors',
            },
            // {
            //   id: 'admin-users-city-state',
            //   title: 'Cidades e Estados',
            //   route: '/cities-states',
            // },
            {
              id: 'admin-users-import-defaulters',
              title: 'Importar inadimplentes',
              route: '/import-defaulters',
            },
            {
              id: 'admin-users-imports',
              title: 'Importar Usuários',
              route: '/imports',
            },
          ],
        },
        {
          id: 'admin-settings',
          title: 'Configurações',
          route: '/settings',
          icon: 'fa-solid fa-sliders',
        },
      ],
    },
  ];

  params: any = {};

  constructor(public tools: ToolsService, private service: ApiService) {}

  ngOnInit() {
    // this.service.getSettings().then((res) => {
    //   for (const item of res) {
    //     this.params[item.parameter] = item.value;
    //   }
    // });
  }
}
