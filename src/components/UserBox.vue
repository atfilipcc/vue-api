<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="getImageUrl()" alt="User" />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ user.name }}</strong>
            <br />
            <span class="email">{{ user.email }}</span>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
export default {
  name: "UserBox",
  methods: {
    getImageUrl() {
      return require(`@/assets/static/images/faces/${this.user.image}`);
    },
  },
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.box {
  background-color: #2f3042;
  display: flex;
  flex-direction: row;
  margin: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
}

.image img {
  border-radius: 10px;
}

.content * {
  color: white;
  font-family: Poppins;
}

.email {
  display: inline-block;
  word-break: break-word;
}
</style>