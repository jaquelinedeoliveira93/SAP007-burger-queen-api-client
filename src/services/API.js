import { getToken } from "./localStorege";

// cadastrar novo usuário
export const createUser = (name, email, password) => {
  return fetch('https://lab-api-bq.herokuapp.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: 'role',
      restaurant: 'Soberano Burger',
    }),
  });
};

// fazer login
export const loginUser = (email, password) => {
  return fetch('https://lab-api-bq.herokuapp.com/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};

// pegar os produtos
export const getProducts = () => {
  return fetch('https://lab-api-bq.herokuapp.com/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken('token')
    }
  });
};

// filtro menu por tipo
export const dataFilter = (data, type) => {
  return data.filter((element) => element.sub_type === type)
}

// enviar o pedido para a comanda
export const sendOrder = (client, table, products) => {
  return fetch('https://lab-api-bq.herokuapp.com/orders',{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken()
    },
    body: JSON.stringify({
      client: client,
      table: table,
      products: products,  
    })
  });
};

export const deleteProduct = (productId) => {
  return fetch('https://lab-api-bq.herokuapp.com/products/{productId}', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": getToken(),
    },
  });
};