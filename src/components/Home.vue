<template>
  <div>
    <h1>Quantization platform</h1>
    <h2 class="confs">Future Operation Conf</h2>
    <div class="buttons-container">
    <button @click="goToContinueDataUpdateSet">Continue Data Update Set</button>
    <button @click="goToRegAnalysisConf">Reg Analysis Conf</button>
    <button @click="goToMinDataUpdateSet">Min Data Update Set</button>
    </div>
    <h2 class="operation">Operation</h2>

  </div>
</template>

<script>
export default {
  name:'HomePage',
  methods: {
    goToContinueDataUpdateSet() {
      this.$router.push('/conf/continue_data_update_set');
    },
    goToRegAnalysisConf() {
      this.$router.push('/conf/reg_analysis_conf_list');
    },
    goToMinDataUpdateSet() {
      this.$router.push('/conf/min_data_update_set');
    }
  }
}
</script>
<style>
.buttons-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.buttons-container button {
  margin-bottom: 10px;
}

.confs{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
}

.operation{
  display:flex;
  flex-direction: column;
  align-items: flex-start;

}
</style>