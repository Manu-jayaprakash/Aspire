<template>
  <el-aside width="340px">
    <nav>
      <div class="nav-header">
        <img src="@/assets/logo.svg" alt="logo" />
        <p class="nav-header__text">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>
      <div class="nav-items">
        <NavLinks
          v-for="item in linksList"
          :key="item"
          :caption="item.caption"
          :icon="item.icon"
          class="nav-items__link"
        />
      </div>
    </nav>
  </el-aside>
</template>
<script>
import NavLinks from "./NavLinks.vue";
export default {
  components: { NavLinks },
  data() {
    return {
      linksList: [
        {
          caption: "Home",
          icon: "home-icon",
        },
        {
          caption: "Cards",
          icon: "card-icon",
        },
        {
          caption: "Payments",
          icon: "payments-icon",
        },
        {
          caption: "Credit",
          icon: "credit-icon",
        },
        {
          caption: "Settings",
          icon: "account-icon",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
@import "../css/components/navigator.scss";
</style>
