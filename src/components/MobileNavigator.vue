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
.mobile-navigation {
  display: none;
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 1;
  background: #ffffff;
  height: 56px;
  .nav-items {
    display: flex;
    justify-content: space-around;
  }
  .nav-items__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #dddddd;
    padding: 9px 0px;
    font-size: 10px;
    line-height: 13px;
    gap: 2px;
    img {
      height: 21px;
    }
  }
}

@media (max-width: 991.98px) {
  .mobile-navigation {
    display: block;
  }
}
</style>
