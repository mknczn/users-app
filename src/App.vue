<script setup lang="ts">
import MainPage from './components/MainPage.vue';
import UserList from './components/UserList.vue';
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

let component2 = computed(function () {
  return store.state.component2;
});

</script>

<template>
  <img alt="Vue logo" src="./assets/Logo placeholder.png" />

  <!-- <MainPage msg="Lorem ipsum" /> 
  //This could leave the Toggle users button to be visible after list display -->

  <header v-show="!component2">
    <div class="wrapper">
      <MainPage msg="Lorem ipsum" />
    </div>
  </header>

  <main v-show="component2">
    <UserList />
  </main>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
