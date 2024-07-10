<template>
  <v-container class="fill-height" fluid>
    <v-row>
      <v-col cols="12" md="6" class="my-auto">
        <v-card>
          <v-card-title> Create an Account </v-card-title>
          <v-card-subtitle>
            Please fill in the details to register
          </v-card-subtitle>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="username"
                :rules="usernameRules"
                label="Username"
                prepend-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                prepend-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
                prepend-icon="mdi-lock"
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                :rules="[(v) => v === password || 'Passwords do not match']"
                label="Confirm Password"
                type="password"
                prepend-icon="mdi-lock"
              ></v-text-field>
              <v-btn block color="primary">Register</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="blue--text text--darken-2">
        <v-container class="d-flex align-center justify-center fill-height">
          <div>
            <v-img src="path-to-your-image.png" contain></v-img>
            <div class="text-center">
              <h3>Join us and start your journey.</h3>
              <p>Get access to the best features by creating an account.</p>
            </div>
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
      username: "",
      email: "",
      password: "",
      confirmPassword: "",

      usernameRules: [(v) => !!v || "Username is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [(v) => !!v || "Password is required"],

    };
  },
  name: "Register",
  methods: {
    passCheck() {},
  },
};
</script>
  
  <style scoped>
.fill-height {
  height: 100vh;
}
</style>
  