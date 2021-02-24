<template>
  <aside class="menu">
    <p class="menu-label">Dashboard</p>
    <ul class="menu-list">
      <li>
        <a>Data</a>
        <ul>
          <li><a @click="requestView(Components.CAMPAIGN); setActive($event.target)">Campaigns</a></li>
          <li><a @click="requestView(Components.USER); setActive($event.target)">Users</a></li>
          <li><a @click="requestView(Components.CLIENT); setActive($event.target)">Clients</a></li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { Components } from "../types/enum";

export default {
  name: "AsideMenu",
  data() {
    return { 
    Components, 
    selectedElement: null };
  },
  methods: {
    requestView(view: Components) {
      this.$emit("view", view);
    },
    setActive(element: HTMLAnchorElement) {
      const active : HTMLAnchorElement | null = document.querySelector(".active");
      if (active !== null) active.classList.toggle("active")
      element.classList.toggle("active")
    }
  },
};
</script>

<style scoped>
aside {
    min-width: 20%;
    background: #222433;
    padding: 20px;
}
a {
    color: #FFFF !important;
    font-weight: 700;
    font-family: Poppins;
    margin: 0 0 5px 0;
}

.menu-list a:hover {
    background-color: #2F3042;
    border-radius: 10px;
    width: 100%;
    max-width: 250px;
}

.active {
  background-color:#0177FB;
  border-radius: 10px;
  width: 100%;
  max-width: 100px;
}

.menu-list a.active {
    background-color:#0177FB;
    width: 100%;
    max-width: 250px;
}

  @media only screen and (max-width: 900px) {
    .menu-list a.active, .menu-list a:hover {
    max-width: 300px;
    }
  }

</style>