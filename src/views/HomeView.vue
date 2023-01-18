<script setup>
const cnt=ref(0)
</script>

<template>
    <div>{{ cnt }}</div>
    <el-button type="primary" size="default" @click="cnt++">Increment</el-button>
    <div class="header animate__animated animate__fadeInDown" v-show="cnt%2===0">
        adsadds
    </div>

</template>