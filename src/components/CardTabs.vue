<template>
  <el-tabs v-model="activeName" class="card-tabs">
    <el-tab-pane label="My debit cards" name="debit-cards">
      <el-card class="body-card">
        <MyDebitCards />
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="All company cards" name="company-cards"> </el-tab-pane>
  </el-tabs>
</template>
<script>
import MyDebitCards from "../components/MyDebitCards";
export default {
  components: {
    MyDebitCards,
  },
  data() {
    return {
      activeName: "debit-cards",
    };
  },
};
</script>
<style lang="scss">
@import "../css/components/card-tabs.scss";
</style>
