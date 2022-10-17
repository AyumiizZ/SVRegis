<template>
  <v-app class="overflow-hidden">
    <Header></Header>
    <v-main style="padding: 64px 0px 0px 0px" class="grey lighten-3">
      <v-container fluid grid-list-md>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import "@/assets/styles/global.css";
</style>
