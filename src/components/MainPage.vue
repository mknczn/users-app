<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

defineProps<{
  msg: string;
}>();
const store = useStore();

function setComponent() {
  store.commit("setComponent");
}

</script>

<template>
  <div class="main-page">    
    <button type="button" @click="setComponent()" class="m-2 btn btn-primary">
        Toggle user list
      </button>
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </h3>

  </div>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

@media (min-width: 1024px) {
  .main-page h1,
  .main-page h3 {
    text-align: center;
  }
}
</style>
