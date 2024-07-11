<template>
  <div>
    <v-container>
      <v-btn color="primary" class="mb-5" @click="newItem()">
        <v-icon left>mdi-plus</v-icon> Add Product
      </v-btn>
      <v-row>
        <v-col
          cols="12"
          md="6"
          v-for="(item, index) in productsItem"
          :key="index"
        >
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
                  <v-btn color="primary" class="mr-5" @click="editItem(item)">
                    <v-icon left>mdi-pencil</v-icon>
                    Edit
                  </v-btn>
                  <v-btn color="error" @click="delItem(item._id)">
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
    <!-- ----------------------------------- -->
    <v-dialog
      v-model="dialogedit"
      max-width="500px"
     >
      <v-card>
        <v-card-title primary-title>
          {{savemode}}
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-text-field
                name="prouct_name"
                label="product_name"
                id="prouct_name"
                v-model="postNewProduct.product_name"
              ></v-text-field>
            </v-col>
              <v-col cols="6">
              <v-text-field
                name="price"
                label="Price"
                id="price"
                v-model="postNewProduct.price"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                name="amount"
                label="Amount"
                id="amount"
                v-model="postNewProduct.amount"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="closeItem()">cancel</v-btn>
          <v-btn color="info" text @click="saveSelect()">save</v-btn>
        </v-card-actions>
      </v-card>
     </v-dialog>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      productsItem: [],
      dialogedit: false,
      id: "",
      postNewProduct: {
        product_name: "",
        price: 0,
        amount: 0,
      },
      postNewProductDefault: {
        product_name: "",
        price: 0,
        amount: 0,
      },
    };
  },

  computed: {
    savemode() {
      return this.id == "" ? "New Item" : "Edit Item";
    },
  },
  created() {
    this.getAllProducts();
  },
  methods: {
    newItem() {
      this.id = "";
      this.postNewProduct = { ...this.postNewProductDefault };
      this.dialogedit = true;
    },
    editItem(item) {
      this.id = item._id;
      this.postNewProduct = { ...item };
      this.dialogedit = true;
    },
    closeItem() {
      this.id = "";
      this.postNewProduct = { ...this.postNewProductDefault };
      this.dialogedit = false;
    },
    saveSelect() {
      if (this.id != "") {
        this.savePutData();
      } else this.savePostData();
    },

    async savePostData() {
      try {
        const { data } = await this.axios.post(
          "http://localhost:3000/api/v1/products/",
          this.postNewProduct,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        console.log(data);
        alert("Create Complete");
        this.getData();
        this.closeItem();
      } catch (error) {
        console.log(error);
        alert("error");
      }
    },
    async savePutData() {
      try {
        const { data } = await this.axios.put(
          "http://localhost:3000/api/v1/products/" + this.id,
          this.postNewProduct,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        console.log(data);
        alert("Update Complete");
        this.getData();
        this.closeItem();
      } catch (error) {
        console.log(error);
        alert("error");
      }
    },

    async delItem(item) {
      if (confirm("Delete it ?")) {
        try {
          const { data } = await this.axios.delete(
            "http://localhost:3000/api/v1/products/" + item,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            }
          );
          console.log(data);
          alert("Delete Complete");
          this.getData();
        } catch (error) {
          console.log(error);
          alert("error");
        }
      }
    },
    async getAllProducts() {
      this.axios
        .get("http://localhost:3000/api/v1/products")
        .then((response) => {
          this.productsItem = response.data.data;
          console.log(this.productsItem);
        });
    },
  },
};
</script>
  
  <style scoped>
/* เพิ่มสไตล์ที่ต้องการ */
</style>
  