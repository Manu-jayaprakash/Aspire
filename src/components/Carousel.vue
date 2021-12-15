<template>
  <span class="debit-card__show-number">
    <img src="@/assets/eye.svg" alt="eye" />
    <span>Show card number</span>
  </span>
  <Splide
    class="card-carousel"
    :options="splideOptions"
    @splide:pagination:updated="onSlideChange"
  >
    <SplideSlide v-for="card in cards" :key="card.id">
      <DebitCard :cardData="card" />
    </SplideSlide>
  </Splide>
</template>
<script>
import DebitCard from "./DebitCard";
import { mapGetters } from "vuex";
export default {
  components: { DebitCard },
  data() {
    return {
      splideOptions: {
        arrows: false,
        padding: { right: 0, left: 0 },
        gap: 0,
        breakpoints: { 991.98: { padding: { right: 20, left: 10 } } },
      },
    };
  },
  computed: {
    ...mapGetters("cards", { cards: "getCardData" }),
  },
  methods: {
    onSlideChange(event) {
      this.$store.commit({
        type: "cards/setActiveCardIndex",
        value: event.index,
      });
    },
  },
};
</script>
<style lang="scss">
@import "../css/components/carousel.scss";
</style>
