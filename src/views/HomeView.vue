<script setup>
const { proxy } = getCurrentInstance();

const cnt = ref(0);

onMounted(() => {
  
  proxy.$http
    .httpRequest({
      url: '/mockBasicTest',
      method: 'get',
    })
    .then((res) => {
      console.log('mockBasicTest_1');
      console.log(res.data.data);
    });
    
  proxy.$http.baseAxiosTest.getTestStr().then((res) => {
      console.log('mockBasicTest_2');
      console.log(res.data.data);
    });
});
</script>

<template>
  <div>{{ cnt }}</div>
  <el-button type="primary" size="default" @click="cnt++">Increment</el-button>
  <div
    class="header animate__animated animate__fadeInDown"
    v-show="cnt % 2 === 0"
  >
    Animate.css
  </div>
  <br />
  <div class="hvr-fade">Hover.css</div>
</template>
