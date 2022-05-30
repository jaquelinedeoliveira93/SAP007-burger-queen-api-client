export const setToken = (token) => localStorage.Item('token', token);
export const setID = (id) => localStorage.Item('id', id);

export const getToken = () => localStorage.getItem('token');
export const getID = () => localStorage.getItem('id');

export const deleteToken = () => localStorage.deleteItem('token');
export const deleteID = () => localStorage.deleteItem('id');
