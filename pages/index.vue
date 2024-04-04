<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <h1 class="center">Lobb Project</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="3">
        <h2>{{ `${dayName} ${date} ${monthName}` }}</h2>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card variant="tonal" class="my-card py-4 custom-card">
          <router-link to="/animeDetails">
            <v-img
              :src="animeData.thumbNailImage"
              height="300px"
              width="600px"
              class="custom-img"
            ></v-img>
          </router-link>
          <v-card-title class="d-flex justify-center">{{
            animeData.title
          }}</v-card-title>
          <v-row>
            <v-col lg="6">
              <v-avatar rounded="1" size="67">
                <v-img
                  :src="animeData.logo"
                  :alt="animeData.title"
                /> </v-avatar
            ></v-col>
            <v-col lg="6">
              <v-card-title class="d-flex justify-end">
                <v-btn variant="tonal" rounded @click="refreshPage()"
                  >Refresh
                </v-btn>
              </v-card-title></v-col
            >
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "IndexPage",
  data() {
    return {
      dayName: "",
      monthName: "",
      date: 0,
      year: 0,
      data: {},
    };
  },
  computed: {
    ...mapState("anime", ["animeData"]),
  },
  async mounted() {
    this.calculateDate();
    this.fetchTest();
    this.data = JSON.parse(JSON.stringify(this.animeData));
  },
  methods: {
    ...mapActions("anime", {
      fetchTest: "FETCH_ANIME_DATA",
    }),
    refreshPage() {
      this.fetchTest();
    },
    calculateDate() {
      var today = new Date();

      var dayOfWeek = today.getDay();

      var weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      this.dayName = weekdays[dayOfWeek];
      this.date = today.getDate();

      var month = today.getMonth();

      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      this.monthName = months[month];
      this.year = today.getFullYear();
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}

.custom-card {
  margin-bottom: 2rem;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>
