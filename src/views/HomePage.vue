<template>
  <el-container class="home-page__container">
    <Navigator />
    <MobileNavigator />
    <el-main class="home-page__container-main">
      <div class="home-page__container-main-head">
        <Balance />
        <NewCard />
      </div>
      <el-card class="body-card">
        <el-row class="w-100">
          <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
            <Carousel />
            <CardControls />
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
            <CardDetails class="card-details" />
            <RecentTransactions class="recent-transactions">
              <div class="alltransaction">View all card transactions</div>
            </RecentTransactions>
          </el-col>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import Navigator from "../components/Navigator";
import MobileNavigator from "../components/MobileNavigator";
import Balance from "../components/Balance";
import NewCard from "../components/NewCard";
// import DebitCard from "../components/DebitCard";
import CardControls from "../components/CardControls";
import RecentTransactions from "../components/RecentTransactions";
import Carousel from "../components/Carousel";
import CardDetails from "../components/CardDetails";
export default {
  name: "Home",
  components: {
    Navigator,
    MobileNavigator,
    Balance,
    NewCard,
    CardControls,
    RecentTransactions,
    Carousel,
    CardDetails,
  },
};
</script>
<style lang="scss">
.home-page__container {
  height: 100%;
  &-main {
    &.el-main {
      padding: 60px;
      overflow-y: overlay;
    }
    &-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.body-card .el-card__body {
  padding: 60px 40px;
}
@media (max-width: 991.98px) {
  .el-aside {
    display: none;
  }
  .home-page__container-main.el-main {
    padding: 1px;
  }
  .body-card .el-card__body {
    padding: 0px;
  }
  .debit-card {
    width: 97%;
  }
  .home-page__container {
    .el-dialog {
      width: 80%;
    }
  }
}
</style>
