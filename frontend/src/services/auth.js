export const TOKEN_KEY = "@unform-Token";
export const ID_USER = "@unform-id_user";
export const NAME_USER = "@unform-username";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ID_USER);
  localStorage.removeItem(NAME_USER);
};
