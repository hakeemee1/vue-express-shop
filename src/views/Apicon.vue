<template>
  <div>
    <h1>APICON</h1>
    <v-btn color="success" @click="newItem()">NewItem</v-btn>
     <v-row>
    <v-col cols="3" v-for="(item,index) in apidata" :key="index">
      <v-card width="350">
        <v-img
          width="350" 
          src="https://www.thmeow.com/wp-content/uploads/2023/04/340337469_943703920416756_3638615782888507973_n-1300x975-600x450.jpg" />
        <v-card-title primary-title>
          {{item.name}} {{item.address}}
        </v-card-title>
        <v-card-actions>
          <v-btn color="success" @click="editItem(item)">Edit</v-btn>
          <v-btn color="error" @click="delItem(item._id)">Del</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
     </v-row>
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
                name="name"
                label="name"
                id="name"
                v-model="postdata.name"
              ></v-text-field>
            </v-col>
              <v-col cols="6">
              <v-text-field
                name="address"
                label="address"
                id="address"
                v-model="postdata.address"
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
      dialogedit: false,
      apidata:[],
      id: '',
      postdata: {  // ชุดที่เอาไว้ส่งข้อมูล
        username: '',
        password: '',
        name: '',
        address: '',
        moneypag: 1234
      },
      postdefault: {  // ชุดที่เอาไว้ล้างข้อมูล
        username: '',
        password: '',
        name: '',
        address: '',
        moneypag: 1234
      },
    }
  },
  computed:{
    savemode () {
      return this.id == '' ? 'New Item' : "Edit Item"
    }
  },
  created() {
    this.getData()
  },
  methods: {
    newItem() {
      this.id = ''
      this.postdata = {...this.postdefault}
      this.dialogedit = true
    },
    editItem(item) {
      this.id = item._id
      this.postdata = {...item}
      this.dialogedit = true
    },
    closeItem(){
      this.id = ''
      this.postdata = {...this.postdefault}
      this.dialogedit = false
    },
    saveSelect() {
      if(this.id != ''){
        this.savePutData()
      }else this.savePostData()
    },
    async savePostData (){
      try {
        const {data} = await this.axios.post('http://localhost:3000/api/v1/products/',this.postdata,{ 
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Token")}`,
            },
            })
            console.log(data);
            alert('Create Complete')
            this.getData()
            this.closeItem()
      } catch (error) {
        console.log(error);
        alert('error')
      }
    },
    async savePutData (){
      try {
        const {data} = await this.axios.put('http://localhost:3000/api/v1/products/'+this.id,this.postdata,{ 
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Token")}`,
            },
            })
            console.log(data);
            alert('Update Complete')
            this.getData()
            this.closeItem()
      } catch (error) {
        console.log(error);
        alert('error')
      }
    },
    async delItem(item){
      if(confirm('Delete it ?')){
       try {
        const {data} = await this.axios.delete('http://localhost:3000/api/v1/products/'+item, { 
            headers: {
              authorization: `Bearer ${localStorage.getItem("Token")}`,
            },
            })
            console.log(data);
            alert('Delete Complete')
            this.getData()
      } catch (error) {
        console.log(error);
        alert('error')
      }
      }
    },
    getData () {
      this.axios.get('http://localhost:3000/api/v1/products/',{ 
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Token")}`,
            },
      }
      ).then((response)=>{
        console.log(response.data)
        this.apidata = response.data
      })
    }
  },
}
</script>

<style>

</style>