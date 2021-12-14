<template>
  <Splide
    class="card-carousel"
    :options="{ arrows: false, padding: { right: 20, left: 10 }, gap: 0 }"
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
.card-carousel {
  .splide__pagination {
    bottom: -28px;
    &__page {
      background: #01d167;
      opacity: 20%;
      border-radius: 8px;
      margin-right: 8px;
      &.is-active {
        opacity: 100%;
        background: #01d167;
        width: 16px;
      }
    }
  }
  .splide__slide.is-active {
    .debit-card {
      background: #01d167;
    }
  }
}
</style>
