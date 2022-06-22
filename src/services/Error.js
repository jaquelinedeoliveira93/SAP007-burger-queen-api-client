export function ErrorLogin(response) {
  switch (response.status) {
    case 400:
      return 'E-mail ou senha incorretos';
    default:
      return 'Algo deu errado, tente novamente'
  }
}

export function ErrorRegister(response) {
  switch (response.status) {
    case 400:
      return 'Preencha todos os campos';
    case 403:
      return 'E-mail já cadastrado';
    default:
      return 'Algo deu errado, tente novamente';
  }
}

export function ErrorHall(response) {
  switch (response.status) {
    case 401:
      return 'Usuário não autenticado';
    default:
      return 'Algo deu errado, tente novamente';
  }
}

