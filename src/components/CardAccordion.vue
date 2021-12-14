<template>
  <div class="recent-transaction">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item name="1">
        <template #title>
          <div class="collapse-header">
            <span class="collapse-header__name">
              <img src="@/assets/recent-transactions.svg" alt="transactions" />
              Recent transactions
            </span>
            <img
              class="more-btn"
              src="@/assets/down-arrow.svg"
              alt="arrow"
              :class="{ active: activeName }"
            />
          </div>
        </template>
        <div class="collapse-content">
          <Transaction />
        </div>
        <slot></slot>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import Transaction from "./Transaction";

export default defineComponent({
  components: { Transaction },
  setup() {
    const activeName = ref("1");

    return {
      activeName,
    };
  },
});
</script>
<style lang="scss">
.recent-transaction {
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 70px;

  //   border-top: none;
  .el-collapse-item__arrow {
    display: none;
  }
  .more-btn {
    transform: rotate(0deg);
    transition: transform 0.3s;
    user-select: none;
    align-self: center;
    &.active {
      transform: rotate(180deg);
    }
  }
  .el-collapse,
  .el-collapse-item__header,
  .el-collapse-item__wrap {
    border: none;
  }
  .el-collapse-item__header {
    height: 72px;
  }
  .collapse-header {
    background: #f5f9ff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 24px;
    font-size: 14px;
    line-height: 18px;
    color: #0c365a;
    &__name {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
  .collapse-content {
    padding: 12px 24px 0px 24px;
    border-radius: 8px;
  }
  .alltransaction {
    height: 50px;
    background: #ddffec;
    color: #01d167;
    text-align: center;
    padding: 16px 0px;
    font-weight: 500;
  }
  .el-collapse-item__content {
    padding-bottom: 0px;
  }
}
@media (max-width: 991.98px) {
  .recent-transaction {
    padding: 0px 24px;
    border: none;
    .el-collapse {
      border: 1px solid #f0f0f0;
    }
  }
}
</style>
