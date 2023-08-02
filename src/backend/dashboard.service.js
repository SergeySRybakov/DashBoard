import { apiClient } from "./api-client";

class DashboardService {
    loadSavings() {
        return apiClient.get("loadSavings.php")
    }
    SaveEditings(data) {
        return apiClient.post("save.php", data)
    }
}

export const dashboardService = new DashboardService();