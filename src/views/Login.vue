<template>
  <v-container class="fill-height" fluid>
    <v-row>
      <v-col cols="12" md="6" class="my-auto">
        <v-card>
          <v-card-title> Log in to your Account </v-card-title>
          <v-card-subtitle>
            Welcome back! Select a method to log in
          </v-card-subtitle>
          <v-card-text>
            <v-btn block color="primary" class="mb-4">
              <v-icon left>mdi-google</v-icon>
              Google
            </v-btn>
            <v-btn block color="primary" class="mb-4">
              <v-icon left>mdi-facebook</v-icon>
              Facebook
            </v-btn>
            <v-form>
              <v-text-field
                v-model="loginForm.username"
                label="Username"
                prepend-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                v-model="loginForm.password"
                label="Password"
                type="password"
                prepend-icon="mdi-lock"
              ></v-text-field>
              <v-checkbox label="Remember me"></v-checkbox>
              <v-btn block color="primary" @click="login">Log in</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="$router.push({ name: 'register' })"
              >Don’t have an account? Create an account</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="blue--text text--darken-2">
        <v-container class="d-flex align-center justify-center fill-height">
          <div>
            <v-img
              src="https://i.pinimg.com/564x/49/dc/0c/49dc0cbe930fdaf2765b16ae7882d973.jpg"
              class=""
              contain
            ></v-img>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        const { data } = await this.axios.post(
          "http://localhost:3000/api/v1/login",
          this.loginForm
        );
        console.log(data);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        this.$router.push({ name: "home" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
