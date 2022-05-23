<script setup lang="ts"> 

import axios from "axios";
import { ref, Ref, onMounted } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";


interface GitUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
const error = ref(false) as Ref<boolean>;
const store = useStore();

let data = computed(function () {
  return store.state.data;
});

onMounted(() => {
  axios
    .get("https://api.github.com/users")
    .then((response) => {
      store.commit("setData", response.data.slice(0, 10));
    })
    .catch((error) => {
      error.value = true;
      console.log(error);
    });
});

function remove(id: number) {
  store.commit(
    "setData",
    data.value.filter((item: { id: number; }) => item.id !== id)
  );
}

</script>

<template>
  <div v-if="error" class="alert alert-primary mt-2" role="alert">
    Unable to Load Data
  </div>
  <div class="greetings">
    <h1 class="mt-5 mx-2 green">List of github users</h1>
  </div>

<div class="card-group">
  <div class="card" v-for="(item, index) in data" :key="index">
    <div class="card-body">
      <div class="bg-info rounded-circle">
        <img
          :src="item.avatar_url"
          class="rounded-circle"
          style="width: 100%"
        />
      </div>
      <h5 class="card-title">{{ item.login }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        <a :href="item.url">{{ item.url }}</a>
      </h6>

      <button
        type="button"
        @click="remove(item.id)"
        class="m-2 btn btn-primary"
      >
        Delete
      </button>
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.2rem;
}


@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}

.card-group {
    justify-content: center;
}

.card {
   min-width: 20rem;
   max-width: 20rem;
}
</style>
