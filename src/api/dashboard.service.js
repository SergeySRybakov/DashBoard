import { apiClient } from "./api-client";

class DashboardService {
  async loadSavings() {
    const { data } = await apiClient.get("loadDashboard.php");
    console.log(data);
    return JSON.parse(data);
  }

  SaveEditings(data) {
    return apiClient.post("saveDashboard.php", data);
  }
}

export const dashboardService = new DashboardService();
