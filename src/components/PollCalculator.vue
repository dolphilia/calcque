<template>
  <div class="container mx-auto px-4">
    <div class="form-control">
      <label class="label">
        <span class="label-text">Total Votes:</span>
        <input type="number" min="0" v-model.number="totalVotes" class="input input-bordered input-primary w-full max-w-xs" />
      </label>
      <div v-for="(percentage, index) in percentages" :key="index" class="label">
        <label :for="'option' + index" class="label">
          <span class="label-text">Option {{ index + 1 }} (%):</span>
          <input :id="'option' + index" type="number" min="0" max="100" step="0.01" v-model.number="percentages[index]" class="input input-bordered input-primary w-full max-w-xs" />
        </label>
      </div>
      <ul class="list-disc pl-5 mt-4">
        <li v-for="(result, index) in results" :key="'result' + index" class="py-1">Option {{ index + 1 }}: {{ result }} votes</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const totalVotes = ref(0);
const percentages = ref([0, 0, 0, 0]);

const results = computed(() => {
  return percentages.value.map(p => Math.round(totalVotes.value * (p / 100)));
});
</script>

<style scoped>
.container {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.input {
  border: 2px solid #e2e8f0; /* Light gray border */
  color: #1e40af; /* Dark blue text */
}
.label-text {
  color: #475569; /* Cool gray text */
}
.list-disc {
  color: #334155; /* Dark gray text */
}
</style>
