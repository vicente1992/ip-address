<template>
  <div v-if="ipInfo" class="wrapper-info">
    <div class="info">
      <h4 class="title">IP Address</h4>
      <span class="result">{{ ipInfo.ip }}</span>
    </div>
    <div class="info separador">
      <h4 class="title">Location</h4>
      <span class="result">{{ ipInfo.region }}</span>
    </div>
    <div class="info">
      <h4 class="title">Timezone</h4>
      <span class="result">{{ ipInfo.timezone }}</span>
    </div>
    <div class="info ips">
      <h4 class="title">ISP</h4>
      <span class="result">{{ ipInfo.isp }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ipInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-info {
  background-color: #fff;
  border-radius: 8px;
  margin: 0 auto;
  max-width: 1070px;
  min-height: 155px;
  position: relative;
  z-index: 1000;
  margin-top: -75px;
  padding: 0 35px;
  display: flex;
  align-items: center;
  justify-content: stretch;
  .info {
    width: 245px;
    min-height: 65px;
    border-right: solid 1px hsl(0, 0%, 59%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    .title {
      text-transform: uppercase;
      color: hsl(0, 0%, 59%);
      font-size: 14px;
      margin-bottom: 10px;
    }
    .result {
      font-size: 20px;
      color: #000000;
      font-weight: 700;
    }
  }
  .ips {
    border-right: none;
  }
}
@media (max-width: 575.98px) {
  .wrapper-info {
    flex-direction: column;
    max-width: 280px;
    .info {
      border-right: none;
      margin: 10px 0;
    }
  }
}
</style>
