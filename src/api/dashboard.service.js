import { apiClient } from "./api-client";

class DashboardService {
  async loadSavings() {
    const { data } = await apiClient.get("loadSavings.php");
    console.log(data);
    return JSON.parse(data);
  }

  SaveEditings(data) {
    return apiClient.post("save.php", data);
  }
}

export const dashboardService = new DashboardService();
