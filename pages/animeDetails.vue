<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-img
          :src="animeData.mainImage"
          height="1000px"
          width="2000px"
          class="custom-img"
          contain
        ></v-img>
      </v-col>
    </v-row>
    <div>
      {{ animeData.text }}
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "AnimeDetails",
  computed: {
    ...mapState("anime", ["animeData"]),
  },
  async mounted() {
    this.fetchTest();
  },
  methods: {
    ...mapActions("anime", {
      fetchTest: "FETCH_ANIME_DATA",
    }),
  },
};
</script>

<style scoped></style>
