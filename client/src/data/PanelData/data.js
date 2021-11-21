import {
  FiUser,           //  Usuário
  FiCoffee,         //  Xícara de café
  FiLink,           //  Link
  FiTrash,          //  Lixeira
  FiSettings,       //  Engrenagem
  FiSearch,         //  Lupa
  FiGlobe,          //  Globlo (Usado para linguagem)
  FiSidebar,        //  Usado como Header e Footer
  FiTrello,         //  Usado como Assets
  FiLayout,         //  Usado como Árvore Principal
  FiMaximize,       //  Usado para função de full-screen
  FiX,              //  Circulo com X
  FiHelpCircle,     //  Circulo com ?
  FiAlertTriangle,  //  Triângulo com !
  FiLogOut,         //  Símbolo de sair
  FiBell,           //  Sino para Notificações
} from 'react-icons/fi';

export const PanelData = {
  settings: [
    {
      id: 'settings',
      icon: <FiSettings />,
      action: ''
    },
    {
      id: 'fullscreen-mode',
      icon: <FiMaximize />,
      action: ''
    },
    {
      id: 'notifications',
      icon: <FiBell />,
      action: ''
    },
    {
      id: 'language',
      icon: <FiGlobe />,
      action: ''
    },
  ],
  menus: [
    {
      id: 'InputGeneral',
      title: 'General',
      subItems: [
        {
          title: 'Info. Pessoais',
          icon: <FiUser />
        },
        {
          title: 'Exp. Profissionais',
          icon: <FiCoffee />
        },
        {
          title: 'Links Externos',
          icon: <FiLink />
        }
      ]
    },
    {
      id: 'InputEstilizacao',
      title: 'Estilização',
      subItems: [
        {
          title: 'Árvore Principal',
          icon: <FiLayout />
        },
        {
          title: 'Header',
          icon: <FiSidebar />
        },
        {
          title: 'Assets',
          icon: <FiTrello />
        },
        {
          title: 'Footer',
          icon: <FiSidebar />
        }
      ]
    }
  ]
};