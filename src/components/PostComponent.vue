<script setup>
const props = defineProps(['post'])
</script>

<template>
<div class="post-container">
    <div class="user-header">
        <img class="profile-image" :src="post.userimage" alt="">
        <h3 class="user-name">{{post.username}}</h3>
    </div>
    <div >
        <img class="post-image" :src="post.postimage" alt="Post Image">
    </div>
    <div class="post-likes">
        <p>{{post.likes}} Likes</p>
    </div>
    <div class="post-caption">
        <p><span class="username-post">{{post.username}}:</span>{{post.caption}}</p>
        
    </div>

</div>
</template>

<style scoped>
.post-container{
    
    width: 500px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    border-radius: 22px;
    box-shadow: 10px 10px 10px rgb(167, 78, 78);

}

.user-header{
    margin-top: 15px;
    margin-left: 15px;
    height: 50px;
    display: flex;
    
}

.profile-image{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 30px;
}
.user-name{
    padding-bottom: 10px;
}

.post-image{
   width: 500px;
}

.post-likes{
    margin-left: 10px;
    font-weight: bolder;

}

.post-caption{
    display: flex;
    margin-left: 10px;
    margin-bottom: 20px;
    /* height: 100px; */
}

.username-post{
    font-weight: bolder;
    margin-right: 5px;
}

</style>
