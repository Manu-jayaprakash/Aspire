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
@import "../css/components/card-accordion.scss";
</style>
