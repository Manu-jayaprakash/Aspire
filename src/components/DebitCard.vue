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
    <!-- <div class="debit-card__show-number">
      <img src="@/assets/eye.svg" alt="eye" />
      <span>Show card number</span>
    </div> -->
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
  position: relative;
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
  &__show-number {
    position: absolute;
    color: #01d167;
    background: #fff;
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
    display: flex;
    padding: 5px 10px;
    top: -26px;
    gap: 6px;
    right: 26px;
    cursor: pointer;
  }
}
@media (max-width: 991.98px) {
  .debit-card {
    &__show-number {
      position: fixed;
      top: 128px;
      right: 33px;
      border-radius: 6px 6px 0px 0px;
    }
  }
}
</style>
