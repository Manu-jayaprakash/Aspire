<template>
  <div class="accordion-wrapper">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item name="1">
        <template #title>
          <div class="collapse-header">
            <span class="collapse-header__name">
              <img src="@/assets/card-details.svg" alt="card" />
              Card details
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
          <div>No Data</div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const activeName = ref();

    return {
      activeName,
    };
  },
});
</script>
<style lang="scss">
@media (max-width: 991.98px) {
  .card-details {
    margin-top: 24px;
  }
}
</style>
