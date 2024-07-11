<template>
  <div class="hello">
    <Slider />
    <div class="mt-10 mx-10">
      <v-row>
        <v-col cols="12" md="3" v-for="(item, i) in productsData" :key="i">
          <v-card class="mx-auto mt-10" max-width="344">
            <v-img
              src="https://images.unsplash.com/photo-1597762470488-3877b1f538c6?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="200px"
            ></v-img>
            <v-card-title>{{ item.product_name }}</v-card-title>
            <v-card-actions>
              <v-btn color="purple darken-4" text>
                {{ item.price }} Baht ({{ item.amount }} ชิ้น)
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
const Slider = () => import("../components/SliderPromo.vue");
export default {
  data() {
    return {
      productsData: [],
    };
  },
  created() {
    console.log("test");
    this.getProducts();
  },

  methods: {
    getProducts() {
      this.axios
        .get("http://localhost:3000/api/v1/products")
        .then((response) => {
          console.log(response.data.data);  
          this.productsData = response.data.data;
        });
    },
  },
  components: {
    Slider,
  },
};
</script>

<style></style>
