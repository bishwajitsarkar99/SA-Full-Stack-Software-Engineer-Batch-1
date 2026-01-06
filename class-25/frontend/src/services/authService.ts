import api from "./api";

export const authService = {
  register: (data: any) => api.post("/auth/register", data),
  
  loginSession: (data: any) => api.post("/auth/login/session", data),
  
  loginJWT: (data: any) => api.post("/auth/login/jwt", data),
  
  logout: () => {
    localStorage.removeItem("auth_token");
    return api.post("/auth/logout");
  }
};
