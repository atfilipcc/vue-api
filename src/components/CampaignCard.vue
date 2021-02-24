<template>
  <tr class="table-row">
    <th>{{ campaign.id }}</th>
    <td>{{ campaign.name }}</td>
    <td>{{ campaign.budget }}</td>
    <td>{{ campaign.campaignManager.name }}</td>
    <td>{{ campaign.startDate }}</td>
    <td>{{ campaign.endDate }}</td>
  </tr>
</template>

<script lang="ts">
export default {
  name: "CampaignCard",
  props: {
    campaign: Object,
  },
};
</script>

<style scoped>
td {
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
</style>