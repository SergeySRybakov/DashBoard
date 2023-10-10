import { apiClient } from "./api-client";

class DashboardService {
  async loadSavings() {
    const { data } = await apiClient.get("loadDashboard.php");
    return JSON.parse(data);
  }

  SaveEditings(data) {
    return apiClient.post("saveDashboard.php", data);
  }
}

export const dashboardService = new DashboardService();
