<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
     

      <v-toolbar-title>Tech SHOP</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-cart-arrow-right</v-icon>
      </v-btn>

      <v-app-bar-title>HAIMI</v-app-bar-title>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>