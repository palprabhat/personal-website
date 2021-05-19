import { urls } from "../constants/urls.const";
export const getExternalUrl = (projectName: string): string => {
  let url = "";
  switch (projectName) {
    case "bouncyball":
      url = urls.miniGames_bouncyBall_live;
      break;
    case "weather-app":
      url = urls.project_weatherApp_live;
      break;
    default:
      url = "/404";
      break;
  }

  return url;
};
