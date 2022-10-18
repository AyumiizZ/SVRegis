<template>
  <div>
    <div class="py-2">
      <h1 class="text-h4 font-weight-bold">New Domain Register Form</h1>
      <v-divider class="my-2" />
    </div>
    <v-card elevation="4">
      <AddDomain></AddDomain>
      <v-row no-gutters class="mx-4 pb-3">
        <v-btn color="error">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary">Submit</v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import AddDomain from "@/components/AddDomain.vue";
export default {
  name: "addCase",
  components: {
    AddDomain,
  },
  methods: {
    disableClick(e) {
      e.preventDefault();
      e.stopPropagation();
    },
  },
  data() {
    return {
      // pid: null,
      // visitedDate: null,
      // type: null,
      // typeItems: ["Tumor", "Non-tumor", "Aesthetic", "Others"],
      // onset: null,
      // onsetSuffix: null,
      // onsetSuffixItems: ["Hours", "Day", "Month", "Year"],
      // diagnosis: null,
      // diagnosisItems: [
      //   "Unspecified",
      //   "Cleft palate",
      //   "Cleft hard and soft palate with cleft lip",
      //   "Cleft soft palate",
      //   "Cleft lip",
      //   "Cleft hard palate",
      // ],
      // noneOps: null,
      // phyExam: null,
      // ops: null,
      // opsDate: null,
      // opsNote: null,
      // bloodLoss: null,
      // opsTime: null,
      // complication: null,
      // opsOthers: null,
    };
  },
};
</script>

<style>
.container--fluid {
  max-width: 1185px;
}
</style>
