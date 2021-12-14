<template>
  <div class="balance-container">
    <div>Available balance</div>
    <span class="balance-container__balance">
      <span class="balance-container__balance-currency">S$</span>
      <span class="balance-container__balance-amount">3,000</span>
    </span>
  </div>
</template>
<style lang="scss">
.balance-container {
  margin-bottom: 34px;
}
.balance-container__balance {
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-top: 18px;
  &-currency {
    width: 40px;
    height: 24px;
    background: #01d167;
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    padding: 4px;
  }
  &-amount {
    color: #222222;
    font-size: 26px;
    line-height: 16px;
    font-weight: bold;
  }
}
</style>
