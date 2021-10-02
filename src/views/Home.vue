<template>
  <div class="wrapper-search">
    <h1 class="title">IP Address Tracker</h1>
    <div class="wrapper-input">
      <input
        type="text"
        v-model="textIp"
        placeholder="Search for any IP address or domain"
        @keyup.enter="getInfo"
      />
      <button @click="getInfo" :disabled="isLoading">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
  <IpInfo :ip-info="info" />
  <!-- Map -->
  <div id="mapid"></div>
  <Spinner :is-loading="isLoading" />
</template>

<script>
import Spinner from "../components/spinner";
import IpInfo from "../components/IpInfo";
import { loadMap, getInfoIp } from "../services/map.services";
import leaflet from "leaflet";
export default {
  components: {
    Spinner,
    IpInfo,
  },
  name: "Home",
  data() {
    return {
      textIp: "8.8.8.8",
      map: null,
      info: {},
      isLoading: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    setMarker({ lat, lng }) {
      const icon = leaflet.icon({
        iconUrl: require("../assets/images/icon-location.svg"),
        iconSize: [40, 40],
      });
      leaflet.marker([lat, lng], { icon }).addTo(this.map);
      this.map.setView([lat, lng], 13);
    },
    load() {
      this.textIp = "104.107.220.0";
      this.map = leaflet.map("mapid");
      loadMap(this.map);
      this.getInfo();
    },

    async getInfo() {
      try {
        if (this.textIp.trim().length === 0)
          return this.$toast.default("Por favor  ingrse una ip válida");
        this.isLoading = true;
        const response = await getInfoIp(this.textIp);
        this.isLoading = false;
        this.textIp = "";
        const { isp, ip, location } = response;
        this.info = {
          isp,
          ip,
          ...location,
        };
        this.setMarker(this.info);
      } catch (error) {
        console.log(error);
        this.$toast.error("Error inesperado");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
  margin: 20px;
}
.wrapper-input {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 38px;
  input {
    border-radius: 8px 0 0 8px;
    border: none;
    font-size: 18px;
    min-width: 480px;
    padding: 15px;
    &:focus {
      outline: none;
    }
  }
  button {
    background-color: #000000;
    border-radius: 0 8px 8px 0;
    border: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 18px;
    padding: 15px;
    transition: 0.3s;
    &:hover {
      background-color: #3f3f3f;
      color: #ffffff;
    }
  }
}
#mapid {
  margin-top: -80px;
  height: calc(100vh - 270px);
}

@media (max-width: 575.98px) {
  .wrapper-input {
    input {
      min-width: 280px;
      font-size: 14px;
    }
    button {
      font-size: 14px;
    }
  }
  #mapid {
    margin-top: -280px;
    height: calc(100vh - 270px);
  }
}
</style>