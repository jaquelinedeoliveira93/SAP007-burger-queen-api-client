import { getToken } from './localStorege';
import {format, differenceInMinutes, minutesToHours } from 'date-fns';

const URL = 'https://lab-api-bq.herokuapp.com';

// PEGAR DADOS NA API
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

export const getProducts = () => {
  return fetch(`${URL}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken('token')
    }
  });
};

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

export const getOrders = () => {
  return fetch(`${URL}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken('token')
    }
  });
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

// FILTROS
export const menuFilter = (data, type) => {
  return data.filter((element) => element.sub_type === type)
}

export const orderFilter = (data, type) => {
  return data.filter((element) => element.status !== type);
};

export const orderReadyFilter = (data, type) => {
  return data.filter((element) => element.status === type);
};

// TEMPO DE PREPARAÇÃO DO PEDIDO
export const orderDate = (parameter) => {
  const date = new Date(parameter);
  const showDate = format(date, 'dd.MM.yy HH:mm');
  return showDate;
};

export const orderPreparationTime = (startOrder, endOrder) => {
  const createAt = new Date(startOrder);
  const finishingAt = new Date(endOrder);

  const totalPreparationTime = differenceInMinutes(finishingAt, createAt);
  if (totalPreparationTime < 60) {
    return `${totalPreparationTime} minutos`;
  }else{
    return `${minutesToHours(totalPreparationTime)} horas`;
  }
};
