// stores/counter.ts
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'Pinia',
  }),
  actions: {
    increment() {
      this.count++;
    },
    reset() {
      this.count = 0;
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});
