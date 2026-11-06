import axios from "axios";
import { Platform } from "react-native";

const LOCAL_API_URL = Platform.select({
  android: "http://10.161.154.247:3000",
  ios: "http://10.161.154.247:3000",
  default: "http://localhost:3000/api",
});

const api = axios.create({ baseURL: LOCAL_API_URL });
export default api;
