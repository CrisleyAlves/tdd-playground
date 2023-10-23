import axios from "axios";
import { DUMMY_ENDPOINT } from "../config/endpoints";

const AuthService = {
  async authenticate(params) {
    return await axios.post(DUMMY_ENDPOINT, params)
  },
  async createAccount(params) {
    return await axios.post(DUMMY_ENDPOINT, params)
  }
}

export default AuthService;
