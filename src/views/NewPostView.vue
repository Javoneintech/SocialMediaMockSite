<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";



    const username = ref ('');
    const userimage = ref ('');
   const imagelink = ref('');
    const likes = ref('');
    const caption =ref('');


    const route = useRoute();
    const router = useRouter();


function addPost() {
let options = {
    method: 'POST',   //this is the syntax to post to an API
    body: JSON.stringify({
      username: username.value,
      userimage: userimage.value,
      postimage: imagelink.value,
      likes: likes.value,
      caption: caption.value,
        
      
    }),
  headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

      
}

    
    fetch('https://66ccd18b8ca9aa6c8cc8cbc0.mockapi.io/post',options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      router.push('/')
    });

   



}

</script>

<template>
  <div class="input-container">
    <div class="input-style">
      <label for="username">Username:</label>
      <input type="text" name="" id="username" v-model="username" />
    </div>
    <div class="input-style">
      <label for="user-image">User Image:</label>
      <input type="text" name="" id="user-image" v-model="userimage" />
    </div>
    <div class="input-style">
      <label vfor="image-link">Image Link:</label>
      <input type="text" name="" id="image-link" v-model="imagelink"/>
    </div>
    <div class="input-style">
      <label for="likes">Likes:</label>
      <input type="text" name="" id="likes" v-model="likes"/>
    </div>
    <div class="input-style">
      <label for="caption">Caption:</label>
      <input type="text" name="" id="caption" v-model="caption" />
    </div>
    <button class="input-style" @click="addPost()">SUBMIT</button>
  </div>
</template>

<style scoped>
.input-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 60vh;
}

.input-style{
    display: flex;
    flex-direction: column;
    text-align: center;
}

button{
    width: 70px;
    margin-left: 40px;
}


</style>
