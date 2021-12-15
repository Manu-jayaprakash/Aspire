<template>
  <div class="transactions">
    <div class="transaction" v-for="item in transactions" :key="item.id">
      <div class="transaction__icon" :class="item.icon">
        <img :src="require(`@/assets/${item.icon}.svg`)" alt="card" />
      </div>
      <div class="transaction__content">
        <p class="transaction__content-name">{{ item.name }}</p>
        <p class="transaction__content-date">{{ item.date }}</p>
        <p class="transaction__content-type">
          <span class="transaction__content-type-img">
            <img src="@/assets/business-and-finance.svg" alt="card" />
          </span>
          <span>{{ item.type }}</span>
        </p>
      </div>
      <div class="transaction__amount" :class="{ positive: item.isPositive }">
        <text>{{ item.amount }}</text>
        <img class="next-btn" src="@/assets/next.svg" alt="next" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transactions: [
        {
          id: 1,
          name: "Hamleys",
          date: "20 May 2020",
          type: "Refund on debit card",
          amount: "- S$ 150",
          isPositive: true,
          icon: "file-storage",
        },
        {
          id: 2,
          name: "Hamleys",
          date: "20 May 2020",
          type: "Charged to debit card",
          amount: "- S$ 150",
          isPositive: false,
          icon: "flights",
        },
        {
          id: 3,
          name: "Hamleys",
          date: "20 May 2020",
          type: "Charged to debit card",
          amount: "- S$ 150",
          isPositive: false,
          icon: "megaphone",
        },
        {
          id: 4,
          name: "Hamleys",
          date: "20 May 2020",
          type: "Charged to debit card",
          amount: "- S$ 150",
          isPositive: false,
          icon: "file-storage",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../css/components/transaction.scss";
</style>
