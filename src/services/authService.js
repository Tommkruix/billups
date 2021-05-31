const tokenKey = "token";

export async function login(username) {
  localStorage.setItem(tokenKey, username);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const user = localStorage.getItem(tokenKey);
    return user;
  } catch (ex) {
    return null;
  }
}

const auth = {
  login,
  logout,
  getCurrentUser,
};

export default auth;
