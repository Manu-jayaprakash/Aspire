<template>
  <div class="card-controls">
    <div class="card-controls__options">
      <div
        class="card-controls__option"
        v-for="option in options"
        :key="option.id"
        @click="option.clickFunction"
      >
        <img :src="require(`@/assets/${option.img}.svg`)" :alt="option.text" />
        <div class="card-controls__option-text">{{ option.text }}</div>
      </div>
    </div>
  </div>
  <el-dialog v-model="centerDialogVisible" title="Warning" width="31%" center>
    <span>
      You are about to delete the card. Please confirm if you want to proceed.
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirmDelete">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      options: [
        {
          id: 1,
          text: "Freeze card",
          img: "freeze-card",
          clickFunction: this.freezeCard,
        },
        {
          id: 2,
          text: "Set spend limit",
          img: "spend-limit",
          clickFunction: "",
        },
        {
          id: 3,
          text: "Add to GPay",
          img: "g-pay",
          clickFunction: "",
        },
        {
          id: 4,
          text: "Replace card",
          img: "replace-card",
          clickFunction: "",
        },
        {
          id: 5,
          text: "Cancel card",
          img: "deactivate-card",
          clickFunction: this.cancelCard,
        },
      ],
      centerDialogVisible: false,
    };
  },
  computed: {
    ...mapGetters("cards", {
      activeCard: "getActiveCardIndex",
      freezedCards: "getFreezedCardIndex",
    }),
  },
  methods: {
    freezeCard() {
      this.$store.commit({
        type: "cards/toggleCardFreeze",
        index: this.activeCard,
      });
    },
    cancelCard() {
      this.centerDialogVisible = true;
    },
    confirmDelete() {
      this.centerDialogVisible = false;
      this.$store.commit({
        type: "cards/cancelCard",
        index: this.activeCard,
      });
    },
  },

  watch: {
    activeCard(val) {
      if (this.freezedCards.includes(val)) {
        this.options[0].text = "Unfreeze card";
      } else {
        this.options[0].text = "Freeze card";
      }
    },
    freezedCards() {
      if (this.freezedCards.includes(this.activeCard)) {
        this.options[0].text = "Unfreeze card";
      } else {
        this.options[0].text = "Freeze card";
      }
    },
  },
};
</script>
<style lang="scss">
.card-controls {
  background: #edf3ff;
  border-radius: 16px;
  max-width: 414px;
  margin-top: 56px;
  padding: 20px 28px;
  &__options {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  &__option {
    cursor: pointer;
    font-size: 13px;
    line-height: 14px;
    color: #0c365a;
    max-width: 60px;
    &-text {
      margin-top: 7px;
    }
  }
}
@media (max-width: 991.98px) {
  .card-controls {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
}
</style>
