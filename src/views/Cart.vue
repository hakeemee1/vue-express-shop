<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Shopping Cart</h1>
      </v-col>
      <v-col cols="12" md="8">
        <v-row v-for="(item, i) in cartItems" :key="i">
          <v-col cols="12" md="4">
            <v-img :src="item.product_id.image" height="150px"></v-img>
          </v-col>
          <v-col cols="12" md="8">
            <v-card class="mx-auto mt-10" outlined>
              <v-card-title>{{ item.product_id.product_name }}</v-card-title>
              <v-card-subtitle>{{ item.product_id.price }} Baht</v-card-subtitle>
              <v-card-text>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="item.quantity"
                      label="Quantity"
                      type="number"
                      min="1"
                      class="quantity-field"
                      disabled
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto mt-10" outlined>
          <v-card-title>Order Summary</v-card-title>
          <v-card-text>
            <p>Total Price: {{ totalPrice }} Baht</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="green darken-3" @click="confirmOrder">Confirm Order</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cartItems: []
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.product_id.price * item.quantity, 0);
    }
  },
  methods: {
    fetchCartItems() {
      axios.get('http://localhost:3000/api/v1/orders')
        .then(response => {
          this.cartItems = response.data.data;
        })
        .catch(error => {
          console.error('There was an error fetching the cart items!', error);
        });
    },
    confirmOrder() {
      // ฟังก์ชันสำหรับยืนยันการสั่งซื้อ
      alert('Order confirmed!');
    }
  },
  created() {
    this.fetchCartItems();
  }
};
</script>

<style scoped>
.quantity-field {
  width: 100px;
}
</style>
