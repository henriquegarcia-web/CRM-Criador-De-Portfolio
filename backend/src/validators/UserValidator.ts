const { checkSchema } = require('express-validator')

class UserValidator {
  signUp() {
    checkSchema({
      name: {
        trim: true,
        isLength: {
          options: { min: 2 }
        },
        errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
      },
      email: {
        isEmail: true,
        errorMessage: 'E-mail inválido'
      },
      password: {
        isLength: {
          options: { min: 2 }
        },
        errorMessage: 'Senha precisa ter pelo menos 2 caracteres'
      }
    })
  }
}

export { UserValidator }
