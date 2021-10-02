import leaflet from "leaflet";
import axios from "axios";

const token = process.env.VUE_APP_TOKEN
const apiKey = process.env.VUE_APP_API_KEY
const apiMapbox = process.env.VUE_APP_API_MAPBOX
const geoAPi = process.env.VUE_APP_GEO_API

export const loadMap = (map) => {

  leaflet
    .tileLayer(
      `${apiMapbox}?access_token=${token}`,
      {
        attribution:
          'Map data ',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: token,
      }
    )
    .addTo(map);
}

export const getInfoIp = async (ip = '') => {
  try {
    const response = await axios.get(`${geoAPi}?apiKey=${apiKey}&ipAddress=${ip}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return err
  }
};
