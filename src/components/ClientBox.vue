<template>
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{client.name}}</strong>
          <br>
         {{client.email}}
        </p>
      </div>
    </div>
  </article>
</div>
</template>

<script lang="ts">
export default {
  name: "ClientBox",
  props: { 
    client: Object,
  },
}
</script>

<style scoped>
.box {
  background-color: #2F3042;
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius:15px;
}

.content * {
  color: white;
  font-family: Poppins;
  
}

</style>