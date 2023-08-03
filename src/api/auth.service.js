import { apiClient } from "./api-client";

class AuthService {
    signUp(data) {
        return apiClient.post("registr.php", data)
    }
    logIn(data) {
        return apiClient.post("autoris.php", data)
    }
}

export const authService = new AuthService();