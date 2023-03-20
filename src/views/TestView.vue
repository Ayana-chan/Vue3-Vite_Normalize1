<script setup>
import SingleUpload from '../components/upload/singleUpload.vue';
import { policy } from '../components/upload/policy';

const { proxy } = getCurrentInstance();

const counterStore = useCounterStore();
// 对store进行响应式的解构赋值
const { count } = storeToRefs(counterStore);
// 函数不能使用storeToRefs解构赋值
const increment = counterStore.increment;

let ossUrl = ref('');

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
  <div>{{ count }}</div>
  <el-button type="primary" size="default" @click="increment"
    >Increment</el-button
  >
  <br /><br />
  <div
    class="header animate__animated animate__fadeInDown"
    v-show="count % 2 === 0"
  >
    Animate.css
  </div>
  <br />
  <div class="hvr-fade">Hover.css</div>
  <br />
  <SingleUpload v-model="ossUrl"></SingleUpload>
  <p>{{ ossUrl }}</p>
</template>
