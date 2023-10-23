import axios from "axios";
import { DUMMY_ENDPOINT } from "../config/endpoints";

const MusicService = {
  async getMusics(params) {
    return await axios.get(DUMMY_ENDPOINT, { params })
  },
  async getMusicById(id) {
    return await axios.get(DUMMY_ENDPOINT, { params: { id } })
  },
  async addMusicToFavorites(id) {
    return await axios.post(DUMMY_ENDPOINT, { params: { id } })
  },
  async removeMusicFromFavorites(id) {
    return await axios.post(DUMMY_ENDPOINT, { params: { id } })
  },
  async getFavoritesMusics() {
    return await axios.get(DUMMY_ENDPOINT)
  },
  async getRecommendedMusics() {
    return await axios.get(DUMMY_ENDPOINT)
  }
}

export default MusicService;
