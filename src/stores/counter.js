// 所有操作放在函数里，尽量避免直接对变量赋值
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});


// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     count: 1,
//   }),
//   // getters: {
//   //   doubleCount(state) {
//   //     return state.count * 2;
//   //   },
//   // },
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });
