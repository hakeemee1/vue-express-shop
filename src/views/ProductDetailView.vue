<template>
  <div class="hello">
    <Slider />
    <div class="mt-10 mx-10">
      <v-row>
        <v-col cols="12" md="8">
          <v-card class="mx-auto mt-10" max-width="344">
            <v-img :src="productsData.image" height="200px"></v-img>
            <v-card-title>{{ productsData.product_name }}</v-card-title>
            <v-card-subtitle>{{ productsData.description }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="purple darken-4" text>
                {{ productsData.price }} Baht ({{ productsData.amount }} ชิ้น)
              </v-btn>
              <v-btn color="" @click="productOrder.quantity++">
                <v-icon color="green darken-3">mdi-plus</v-icon>
                {{ productOrder.quantity }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="mx-auto mt-10" outlined>
            <v-card-title>Order Summary</v-card-title>
            <v-card-title>
              <p>Total Price: {{ totalPrice }} Baht</p>
            </v-card-title>
            <v-card-actions>
              <v-btn
                :disabled="dialog"
                :loading="dialog"
                class="white--text"
                color="purple darken-2"
                @click="orderProduct"
                >Confirm Order</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-dialog v-model="dialog" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
              กำลังทำการสั่งซื้อ
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productsData: [],
      dialog: false,
      productOrder: {
        customer_id: this.$route.params.id,
        quantity: 1,
      },
    };
  },
  watch: {
    async dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 800);
    },
  },
  computed: {
    totalPrice() {
      return this.productsData.price * this.productOrder.quantity;
    },
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.axios
        .get(`http://localhost:3000/api/v1/products/${this.$route.params.id}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((response) => {
          this.productsData = response.data.data;
        });
    },
    async orderProduct() {
      try {
        await this.axios
          .post(
            `http://localhost:3000/api/v1/products/${this.$route.params.id}/orders`,
            this.productOrder,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            }
          )
          .then( (response) => {
            this.dialog = true
            alert("ยืนยันการสั่งซื้อหรือไม่ ?");
            console.log(response.data);
            
            
          });
          this.$router.push("/home");
      } catch (error) {
        console.log(error);
      }
    },
  
  },
};
</script>

<style>
.mt-10 {
  margin-top: 10px;
}
.mx-10 {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
