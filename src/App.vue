<script setup>

</script>

<template>
  <header>
      <h1 class="title"><RouterLink to="/">INSTAGRAM</RouterLink></h1>        
     
   </header>
  <main>
<RouterView></RouterView> 

  </main>
  <footer>
        <RouterLink to="/newposts"><button>New Post</button></RouterLink>

  </footer>
</template>

<style scoped>
main{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title{
  text-align: center;
  background: linear-gradient(red, blue);
    -webkit-background-clip: text;
            background-clip: text;
    -webkit-text-fill-color: transparent;}

header{
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  

}    

h1{
  margin-right: 100px;
}

button{
  margin-left: 100px;
}

footer{
  position: fixed;
  bottom: 0%;
  width: 100%;
}


</style>