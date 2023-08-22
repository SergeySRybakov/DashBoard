import { apiClient } from "./api-client";

class DashboardService {
  async loadSavings() {
    const info = await apiClient.get("loadSavings.php");
    const { data } = await apiClient.get("loadSavings.php");
    console.log(data);
    console.log(info);
    return JSON.parse(data.dashes);
  }

  SaveEditings(data) {
    return apiClient.post("save.php", data);
  }
}

export const dashboardService = new DashboardService();
