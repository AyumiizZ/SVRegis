<template>
  <v-app-bar fixed color="white">
    <router-link class="ma-2 noline" to="/">
      <v-btn text> home </v-btn>
    </router-link>
    <v-spacer></v-spacer>
    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text>
          Register
          <v-icon> mdi-chevron-down </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(menu, index) in RegisMenus" :key="index">
          <v-list-item-title>
            <router-link class="ma-2 noline" :to="menu.path">
              <v-btn text> {{ menu.title }} </v-btn>
            </router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text>
          Search
          <v-icon> mdi-chevron-down </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(menu, index) in searchMenus" :key="index">
          <v-list-item-title>
            <router-link class="ma-2 noline" :to="menu.path">
              <v-btn text> {{ menu.title }} </v-btn>
            </router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <router-link
      class="ma-2 noline"
      to="/signin"
      v-if="!$store.state.isUserLoggedIn"
    >
      <v-btn text> Sign In </v-btn>
    </router-link>
    <router-link class="ma-2 noline" to="/signout" v-else>
      <v-btn text> Sign Out </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "HomeView",
  methods: {},
  data() {
    return {
      appTitle: "Awesome App",
      sidebar: false,
      searchMenus: [
        { title: "My Applicant", path: "/applicant" },
        { title: "My Responsible", path: "/responsible" },
        { title: "My Approver", path: "/approver" },
      ],
      RegisMenus: [
        { title: "Domain Register", path: "/domain-regis" },
        { title: "Web Host Request", path: "/host-req" },
        { title: "Web Host Register", path: "/host-regis" },
      ],
    };
  },
};
</script>
