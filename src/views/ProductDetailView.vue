<template>
  <div class="hello">
    <Slider />
    <div class="mt-10 mx-10">
      <v-row>
        <v-col cols="12" md="12">
          <v-card class="mx-auto mt-10" max-width="344">
            <v-img
              :src="productsData.image"
              height="200px"
            ></v-img>
            <v-card-title>{{productsData.product_name}}</v-card-title>
            <v-card-subtitle>{{productsData.description}}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="purple darken-4" text>
                {{ productsData.price }} Baht ({{ productsData.amount }} ชิ้น)
              </v-btn>
              <v-btn color="green darken-3" text>
                <v-icon color="green darken-3">mdi-cart-heart</v-icon> Buy
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productsData: [],
      
    }
  },

  created() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      this.axios
        .get(`http://localhost:3000/api/v1/products/${this.$route.params.id}`)
        .then((response) => {
          this.productsData = response.data.data;
          console.log(this.productsData.image);
        });
    },
  }

}
</script>

<style>

</style>