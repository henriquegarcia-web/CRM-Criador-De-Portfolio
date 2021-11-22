import BgImage from '../../assets/BgImage_02.jpg';

import { 
  FiLock,
  FiUser,
  FiMail,
  FiImage
} from 'react-icons/fi'

export const AccessData = {
  bgImage: BgImage,
  bgOpacity: '0.2',
  dataLogin: {
    title: 'LOGIN',
    action: 'Não tem uma conta?',
    actionTo: '/register',
    inputs: [
      {
        id: 'InputLoginEmail',
        type: 'input',
        placeholder: 'Seu e-mail',
        icon: <FiMail />
      },
      {
        id: 'InputLoginPassword',
        type: 'input',
        placeholder: 'Sua senha',
        icon: <FiLock />
      },
      {
        id: 'ButtonLogin',
        type: 'button',
        placeholder: 'Entrar',
        to: '/painel'
      }
    ]
  },
  dataRegister: {
    title: 'CADASTRO',
    action: 'Já tem uma conta?',
    actionTo: '/login',
    inputs: [
      {
        id: 'InputRegisterName',
        type: 'input',
        placeholder: 'Nome completo',
        icon: <FiUser />
      },
      {
        id: 'InputRegisterEmail',
        type: 'input',
        placeholder: 'E-mail',
        icon: <FiMail />
      },
      {
        id: 'InputRegisterPassword',
        type: 'input',
        placeholder: 'Senha',
        icon: <FiLock />
      },
      {
        id: 'InputRegisterImage',
        type: 'file',
        placeholder: 'Coloque uma foto',
        icon: <FiImage />
      },
      {
        id: 'ButtonRegister',
        type: 'button',
        placeholder: 'Criar conta',
        to: '/login'
      }
    ]
  }
}