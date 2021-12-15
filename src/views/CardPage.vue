<template>
  <el-container class="card-page__container">
    <Navigator />
    <MobileNavigator />
    <el-main class="card-page__container-main">
      <div class="card-page__container-main-head">
        <AvailableBalance />
        <NewCard />
      </div>
      <CardTabs />
    </el-main>
  </el-container>
</template>

<script>
import Navigator from "../components/Navigator";
import MobileNavigator from "../components/MobileNavigator";
import AvailableBalance from "../components/AvailableBalance";
import NewCard from "../components/NewCard";
import CardTabs from "../components/CardTabs";
export default {
  name: "Home",
  components: {
    Navigator,
    MobileNavigator,
    AvailableBalance,
    NewCard,
    CardTabs,
  },
};
</script>
<style lang="scss">
@import "../css/views/cardpage.scss";
</style>
