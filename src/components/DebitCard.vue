<template>
  <div class="debit-card" :class="{ freezed: cardData.isFreezed }">
    <img class="debit-card__logo" src="@/assets/card-logo.svg" alt="logo" />
    <p class="debit-card__customer-name">{{ cardData.name }}</p>
    <p class="debit-card__number">{{ cardData.number }}</p>
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
};
</script>
<style lang="scss">
.debit-card {
  width: 414px;
  height: 248px;
  background: #536dff;
  border-radius: 8px;
  padding: 24px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 2px 6px #00000014);
  &.freezed {
    opacity: 0.5;
    background: grey !important;
  }
  &__logo {
    margin-left: auto;
  }
  &__customer-name {
    font-size: 24px;
    line-height: 20px;
  }
  &__number {
    font-size: 14px;
    line-height: 19px;
  }
  &__info {
    display: flex;
    gap: 30px;
  }
  &__date,
  &__cvv {
    font-size: 13px;
    line-height: 18px;
  }
}
</style>
