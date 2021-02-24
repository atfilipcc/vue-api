<template>
  <div class="wrapper">
    <div class="board">
      <div class="board__card-wrapper">
        <ClientBox
          v-show="currentComponent == Components.CLIENT"
          v-for="client in clients"
          :client="client"
          :key="client.id"
        />
      </div>
      <div class="board__card-wrapper" v-show="currentComponent == Components.CAMPAIGN">
        <section class="table__filter-wrapper">
        <label for="filterTable" class="table__filter-label">Filter Table</label>
        <input id="filterTable" v-model="filterBy" class="table__filter-input" rows="4"/>
        </section>
      <table>
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
          <CampaignTableElement
            v-for="campaign in filteredCampaigns"
            :campaign="campaign"
            :key="campaign.id"
          />
         </tbody>
        </thead>
      </table>
      </div>

      <div class="board__card-wrapper">
        <UserBox
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
import CampaignTableElement from "@/components/CampaignTableElement.vue";
import UserBox from "@/components/UserBox.vue";
import ClientBox from "@/components/ClientBox.vue";
import { Components } from "../types/enum";
import { Campaign } from "../api-client";

export default {
  name: "DataBoard",
 components: { CampaignTableElement, UserBox, ClientBox  },
  props: {
    currentComponent: String,
    loaded: Boolean,
    campaigns: Array,
    clients: Array,
    users: Array,
  },
  methods: {
    selectView(view: Components) {
      this.$emit("view", view);
    },
  },
  watch: {
    filterBy() {
      this.filteredCampaigns = this.campaigns;
      this.filteredCampaigns = this.filteredCampaigns.filter(
        (campaign) => (campaign as Campaign).name.match(new RegExp(this.filterBy, "i"))
      );
    },
  },
  data() {
    return {
      Components,
      filteredCampaigns: this.campaigns,
      filterBy: "",
    };
  },
};
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
  padding: 10px;
}
.board {
  margin: 20px;
}

.board__card-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.table__filter-wrapper {
  display: flex;
  width: 100%;
  margin: 0 60px 20px 60px;
}

.table__filter-label {
  color: white;
  font-weight: bold;
  min-width: 100px;
}

.table__filter-input {
  margin: 0 0 0 20px;
  height: 40px;
  width: 100%;
  font-size: 16px;
  color: white;
  background-color: #2F3042;
  border-bottom: 3px solid #474966;;
  border-left: none;
  border-right: none;
}
table,
td,
th {
  text-align: center;
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