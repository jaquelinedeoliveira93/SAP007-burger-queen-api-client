const URL = 'https://lab-api-bq.herokuapp.com';
import { getToken } from './localStorege';
import {format, differenceInMinutes, minutesToHours } from 'date-fns';

// cadastrar novo usuário
export const createUser = (name, email, password) => {
  return fetch(`${URL}/users`, {
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
  return fetch(`${URL}/auth`, {
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
  return fetch(`${URL}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken('token')
    }
  });
};

// filtro menu por tipo
export const menuFilter = (data, type) => {
  return data.filter((element) => element.sub_type === type)
}

// enviar o pedido
export const sendOrder = (client, table, products) => {
  return fetch(`${URL}/orders`, {
    method: 'POST',
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

// pegar os pedidos
export const getOrders = () => {
  return fetch(`${URL}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken('token')
    }
  });
};

export const orderDate = (parameter) => {
  const date = new Date(parameter);
  const showDate = format(date, 'dd.MM.yyyy HH:mm');
  return showDate;
};

export const orderTime = (startOrder, endOrder) => {
  const createAt = new Date(startOrder);
  const finishingAt = new Date(endOrder);

  const totalPreparationTime = differenceInMinutes(finishingAt, createAt);
  if (totalPreparationTime < 60) {
    return `${totalPreparationTime} minutos`;
  }else{
    return `${minutesToHours(totalPreparationTime)} horas`;
  }
};

export const orderFilter = (data, type) => {
  return data.filter((element) => element.status != type);
};

export const updateOrderStatus = (id, status) => {
  return fetch (`${URL}/orders/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken('token'),
    },
    body: JSON.stringify({status})
  });
};