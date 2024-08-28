<script setup>
import { ref } from 'vue';

const props = defineProps(["post"]);
const emits = defineEmits(['clicked']);

const liked = ref(false); // Track if the post is liked

const likeImage = () => {
    emits('clicked', props.post);
    if (liked.value) {
        props.post.likes--; // Subtract 1 if already liked
    } else {
        props.post.likes++; // Add 1 if not liked
    }
    liked.value = !liked.value; // Toggle the liked state
}
</script>

<template>
  <div class="post-container">
    <div class="user-header">
      <img class="profile-image" :src="post.userimage" alt="" />
      <h3 class="user-name">{{ post.username }}</h3>
    </div>
    <div>
      <img class="post-image" :src="post.postimage" alt="Post Image" />
    </div>
    <div class="post-likes">
      <p>{{ post.likes }} Likes</p>
      <img v-if="liked" @click="likeImage"
        class="likes-image"
        src="@/assets/red-heart.png"
        alt="Liked Image"
      />
      <img v-else @click="likeImage"
        class="likes-image"
        src="@/assets/white-heart.png"
        alt="Unliked Image"
      />
    </div>
    <div class="post-caption">
      <p>
        <span class="username-post">{{ post.username }}:</span
        >{{ post.caption }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.post-container {
  width: 500px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  border-radius: 22px;
  box-shadow: 10px 10px 10px rgb(167, 78, 78);
}

.user-header {
  margin-top: 15px;
  margin-left: 15px;
  height: 50px;
  display: flex;
}

.profile-image {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 30px;
}
.user-name {
  padding-bottom: 10px;
}

.post-image {
  width: 500px;
}

.post-likes {
  margin-left: 10px;
  font-weight: bolder;
  display: flex;
  justify-content: space-around;
}

.post-caption {
  display: flex;
  margin-left: 10px;
  margin-bottom: 20px;
}

.username-post {
  font-weight: bolder;
  margin-right: 5px;
}

.likes-image {
  background-color: lightgrey;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  align-self: center;
}
</style>
