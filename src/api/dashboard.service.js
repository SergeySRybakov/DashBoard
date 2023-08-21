import { apiClient } from "./api-client";

class DashboardService {
    async loadSavings() {
        const {data} = await apiClient.get("loadSavings.php")
        return JSON.parse(data.dashes)
    }
    SaveEditings(data) {
        return apiClient.post("save.php", data)
    }
}

export const dashboardService = new DashboardService();
