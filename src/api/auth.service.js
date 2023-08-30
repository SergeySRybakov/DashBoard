import { apiClient } from "./api-client";

class AuthService {
  signUp(data) {
    console.log(data);
    return apiClient.post("register.php", data);
  }

  logIn(data) {
    console.log(data);
    return apiClient.post("auth.php", data);
  }
}

export const authService = new AuthService();
