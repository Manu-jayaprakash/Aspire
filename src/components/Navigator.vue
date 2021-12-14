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
<style scoped>
nav {
  background: #0c365a;
  /* width: 340px; */
  height: 100%;
  /* position: fixed; */
  padding: 48px;
  color: #ffffff;
}
.nav-header__text {
  font-size: 15px;
  line-height: 20px;
  opacity: 0.3;
  margin-top: 19px;
}
.nav-items {
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  margin-top: 81px;
}
.nav-items__link {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}
</style>
