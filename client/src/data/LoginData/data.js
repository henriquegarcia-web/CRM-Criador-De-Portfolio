import BgImage from '../../assets/BgImage_02.jpg';

export const LoginData = {
  bgImage: BgImage,
  bgOpacity: '0.2',
  inputsLogin: [
    {
      id: 'InputLoginEmail',
      placeholder: 'Seu e-mail',
      iconClass: 'far fa-envelope'
    },
    {
      id: 'InputLoginSenha',
      placeholder: 'Sua senha',
      iconClass: 'fas fa-lock'
    }
  ],
  inputsRegister: [
    {
      id: 'InputRegisterName',
      placeholder: 'Nome completo',
      iconClass: 'far fa-user'
    },
    {
      id: 'InputRegisterEmail',
      placeholder: 'E-mail',
      iconClass: 'far fa-envelope'
    },
    {
      id: 'InputRegisterSenha',
      placeholder: 'Senha',
      iconClass: 'fas fa-lock'
    }
  ]
}