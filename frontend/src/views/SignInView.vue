<template>
  <v-responsive class="py-6">
    <div class="text-center">
      <h2 class="text-h4 mb-3 font-weight-bold">Your Account</h2>
      <div
        class="mb-4 blue-grey darken-3 mx-auto"
        style="width: 80px; height: 4px"
      />
    </div>
    <v-card class="pa-3 mx-auto" style="max-width: 500px">
      <v-card-title>
        <v-divider />
        <div class="mx-2">Sign In</div>
        <v-divider />
      </v-card-title>
      <v-card-text>
        <v-text-field label="Username" outlined />
        <v-text-field
          label="Password"
          outlined
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
        />
        <v-select
          hide-details
          outlined
          :items="campus"
          label="Campus"
        ></v-select>
        <v-checkbox dense v-model="remember" label="Remember me"></v-checkbox>
        <router-link to="/" class="noline">
          <v-btn x-large block color="success"> Sign In </v-btn>
        </router-link>
        <div class="text-center mt-4 text-body-2">
          <a href="#"> Forgot your password? </a>
        </div>
      </v-card-text>
    </v-card>
  </v-responsive>
</template>

<script>
export default {
  name: "SignInView",

  data: () => ({
    remember: false,
    showPassword: false,
    campus: ["BKN", "KPS", "SRC"],
  }),
};
</script>
