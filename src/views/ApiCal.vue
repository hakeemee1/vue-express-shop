<template>
    <div>
      <h1>Users:</h1>
      <ul>
        <li v-for="user in users" :key="user._id">
          Username: {{ user.username }}, Email: {{ user.email }}, Password: {{ user.password }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: [],
        
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get('http://localhost:3000/api/v1/register')
          .then((response) => {
            // เข้าถึง array ข้อมูลที่อยู่ภายใน response.data.data
            this.users = response.data.data.map(item => ({
              username: item.username,
              email: item.email,
              password: item.password,
              _id: item._id // เก็บ _id เพื่อใช้เป็น key ใน v-for
            }));
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  