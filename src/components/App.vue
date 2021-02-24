

<template>
  <div class="root">
    <main class="main">
      <AsideMenu @view="receiveViewEmitter" />
      <section class="container">
        <DataBoard
          v-if="loaded"
          :currentComponent="currentComponent"
          :loaded="loaded"
          :campaigns="campaigns"
          :users="users"
          :clients="clients"
        />
        <div class="spinner" v-else-if="!loaded">
          <BounceLoader :color="spinnerColor"/>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import DataBoard from "@/components/DataBoard.vue";
import AsideMenu from "@/components/AsideMenu.vue";
import { ApiClient } from "@/api-client";
import { Campaign, Client, User } from "@/types/types";
import { Components } from "../types/types";
import BounceLoader from 'vue-spinner/src/BounceLoader.vue';

export default {
  name: "App",
  components: { DataBoard, AsideMenu, BounceLoader },
  data() {
    return {
      apiClient: {} as ApiClient,
      loaded: true,
      campaigns: [] as Campaign[],
      clients: [] as Client[],
      users: [] as User[],
      currentComponent: Components.CAMPAIGN,
      spinnerColor: "#0177FB",
    };
  },
  methods: {
    getCampaigns() {
      this.loaded = false;
      this.apiClient
        .requestCampaigns()
        .then((res: Campaign[]) => (this.campaigns = res))
        .then(() => (this.loaded = true))
        .then(() => (this.currentComponent = Components.CAMPAIGN));
    },
    getUsers() {
      this.loaded = false;
      this.apiClient
        .requestUsers()
        .then((res: User[]) => (this.users = res))
        .then(() => (this.loaded = true))
        .then(() => (this.currentComponent = Components.USER));
    },
    getClients() {
      this.loaded = false;
      this.apiClient
        .requestClients()
        .then((res: Client[]) => (this.clients = res))
        .then(() => (this.loaded = true))
        .then(() => (this.currentComponent = Components.CLIENT));
    },
    receiveViewEmitter(view: Components) {
      if (view == Components.CAMPAIGN) this.getCampaigns();
      if (view == Components.USER) this.getUsers();
      if (view == Components.CLIENT) this.getClients();
    },
  },
  mounted() {
    this.apiClient = new ApiClient();
    this.getCampaigns();
  },
};
</script>

<style>
html { 
    background: #222433;
}
body {
  background: #222433;
}

.main {
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 10px 10px 10px 0;
}

.container {
  background: #1e1d2b;
  border-radius: 20px;
  min-height: 100%;
  margin: 10px;
}
.spinner {
  height: 95vh;
}

.v-spinner {
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

  @media only screen and (max-width: 900px) {
    .main {
      flex-direction: column;
    }
  }
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>