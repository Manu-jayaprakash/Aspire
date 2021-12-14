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
.transaction {
  display: flex;
  gap: 12px;
  line-height: 18px;
  font-size: 14px;
  color: #222222;
  border-bottom: 1px solid #f5f5f5;
  margin-top: 16px;
  &__icon {
    background: #009dff1a;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.flights {
      background: #00d6b51a;
    }
    &.megaphone {
      background: #f251951a;
    }
  }
  &__content {
    margin-bottom: 18px;
    &-name {
      margin: 0px;
      font-weight: 500;
    }
    &-date {
      color: #aaaaaa;
      margin: 4px 0px 12px 0px;
      font-size: 13px;
    }
    &-type {
      color: #325baf;
      margin: 0px;
      font-size: 12px;
      font-weight: 500;
      &-img {
        width: 24px;
        height: 20px;
        background: #325baf;
        display: inline-block;
        text-align: center;
        border-radius: 50%;
        margin-right: 8px;
        img {
          vertical-align: middle;
        }
      }
    }
  }
  &__amount {
    margin-left: auto;
    font-weight: bold;
    &.positive {
      color: #01d167;
    }
    .next-btn {
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>
