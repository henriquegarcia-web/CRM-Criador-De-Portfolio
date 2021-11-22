import UserImage from '../../assets/UserImage.jpg';

import {
  FiSettings,       //  Engrenagem
  FiLogOut,         //  Símbolo de sair
} from 'react-icons/fi';

export const UserData = {
  name: 'Henrique Garcia',
  email: 'https.henriquegarcia',
  senha: 'senha',
  image: UserImage,
  userMenu: [
    {
      id: 'out',
      title: 'Sair',
      icon: <FiLogOut />
    },
    {
      id: 'config',
      title: 'Configurações',
      icon: <FiSettings />
    },
  ]
}