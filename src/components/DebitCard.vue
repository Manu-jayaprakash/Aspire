<template>
  <div class="debit-card" :class="{ freezed: cardData.isFreezed }">
    <img class="debit-card__logo" src="@/assets/card-logo.svg" alt="logo" />
    <p class="debit-card__customer-name">{{ cardData.name }}</p>
    <p class="debit-card__number">
      <span class="debit-card__number-hidden">{{ text }}</span>
      {{ formatCardNumber(cardData.number) }}
    </p>
    <div class="debit-card__info">
      <p class="debit-card__date">{{ cardData.date }}</p>
      <p class="debit-card__cvv">CVV: ***</p>
    </div>
    <img class="debit-card__logo" src="@/assets/visa-logo.svg" alt="logo" />
  </div>
</template>
<script>
export default {
  props: {
    cardData: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      text: ".... .... .... ",
    };
  },
  methods: {
    formatCardNumber(num) {
      const lastFourDigits = num.split(" ")[3];
      return lastFourDigits;
    },
  },
};
</script>
<style lang="scss">
@import "../css/components/debitcard.scss";
</style>
