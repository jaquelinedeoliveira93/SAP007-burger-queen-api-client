// cadstrando
export const createUser = (name, email, password) => {
  console.log(name, email, password)
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

// login
export const loginUser = (email, password) => {
  return fetch('https://lab-api-bq.herokuapp.com/auth', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Credentials': true,
      // 'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    /*.then(res => res.json())
    .then(data => {
      console.log(data)
    })*/
};
