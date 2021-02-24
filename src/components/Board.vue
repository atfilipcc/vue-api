<template>
  <div class="wrapper">
    <div class="board">
      <div class="board__card-wrapper">
        <ClientCard
          v-show="currentComponent == Components.CLIENT"
          v-for="client in clients"
          :client="client"
          :key="client.id"
        />
      </div>

      <table v-show="currentComponent == Components.CAMPAIGN">
        <thead>
          <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Budget</th>
            <th>Manager</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
          <CampaignCard
            v-for="campaign in campaigns"
            :campaign="campaign"
            :key="campaign.id"
          />
         </tbody>
        </thead>
      </table>

      <div class="board__card-wrapper">
        <UserCard
          v-show="currentComponent == Components.USER"
          v-for="user in users"
          :user="user"
          :key="user.id"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CampaignCard from "@/components/CampaignCard.vue";
import ClientCard from "@/components/ClientCard.vue";
import UserCard from "@/components/UserCard.vue";
import { Components } from "../types/enum";

export default {
  name: "Board",
  props: {
    currentComponent: String,
    loaded: Boolean,
    campaigns: Array,
    clients: Array,
    users: Array,
  },
  components: { CampaignCard, ClientCard, UserCard },
  methods: {
    selectView(view: Components) {
      this.$emit("view", view);
    },
  },
  data() {
    return {
      Components,
    };
  },
};
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
}
.board {
  margin: 20px;
}

.board__card-wrapper {
  display: flex;
  flex-wrap: wrap;
}
table, td, th {
  text-align:center;
  width: 12%;
  padding: 10px;
  color: white;
  font-family: Poppins;
  font-weight: 300;
}

th {
    color: white !important;
    font-weight: 800 !important;
}

table {
  width: 100%;
  border-collapse: collapse;
}


</style>