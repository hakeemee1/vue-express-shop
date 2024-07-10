<template>
  <v-container>
    <v-btn color="primary" @click="addProduct" class="mb-5">
      <v-icon left>mdi-plus</v-icon> Add Product
    </v-btn>
    <v-row>
      <v-col cols="12" md="6" v-for="(item, index) in productsItem" :key="index">
        <v-card>
          <v-card-title> {{ item.product_name }} </v-card-title>
          <v-card-subtitle> Quantity: {{ item.amount }} </v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <v-img
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818"
                  contain
                ></v-img>
              </v-col>
              <v-col cols="8" class="text-right pt-5">
                <v-btn color="primary" class="mr-5" @click="editProduct">
                  <v-icon left>mdi-pencil</v-icon>
                  Edit
                </v-btn>
                <v-btn color="error" @click="deleteProduct">
                  <v-icon left>mdi-delete</v-icon>
                  Delete
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {
  data() {
    return {
      productsItem: [],
    };
  },
  created() {
      this.getAllProducts();
  },
  methods: {
    async getAllProducts() {
      this.axios.get("http://localhost:3000/api/v1/products").then((response) => {
        this.productsItem = response.data.data;
        console.log(this.productsItem);
      })
        
    },
    editProduct() {
      // ฟังก์ชันสำหรับแก้ไขสินค้า
      console.log("Edit product");
    },
    deleteProduct() {
      // ฟังก์ชันสำหรับลบสินค้า
      console.log("Delete product");
    },
  },
};
</script>
  
  <style scoped>
/* เพิ่มสไตล์ที่ต้องการ */
</style>
  