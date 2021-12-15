<template>
  <div class="mobile-navigation">
    <div class="nav-items">
      <NavLinks
        v-for="item in linksList"
        :key="item"
        :caption="item.caption"
        :icon="item.icon"
        class="nav-items__link"
      />
    </div>
  </div>
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
          icon: "logo-mob",
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
          icon: "credit-mob",
        },
        {
          caption: "Settings",
          icon: "account-mob",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../css/components/mobile-navigator.scss";
</style>
