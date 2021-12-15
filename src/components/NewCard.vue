<template>
  <div class="new-card" @click="handleNewCard">
    <img src="@/assets/add-icon.svg" alt="add" />
    <span>New card</span>
  </div>
  <el-dialog v-model="dialogFormVisible" title="Create New Card">
    <el-form :model="form">
      <el-form-item label="Card Name : " :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
        <small class="form-error-message" v-if="formError">
          Please Enter a Valid Name
        </small>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleFormSubmit">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
      },
      formLabelWidth: "95px",
      formError: false,
    };
  },
  methods: {
    handleNewCard() {
      this.dialogFormVisible = true;
    },
    handleFormSubmit() {
      const format = /^[a-zA-Z][a-zA-Z\s]*$/;
      if (!format.test(this.form.name) || !this.form.name) {
        this.formError = true;
      } else {
        this.formError = false;
        this.dialogFormVisible = false;
        console.log(this.form.name);
        this.$store.commit({
          type: "cards/addNewCard",
          name: this.form.name,
        });
        this.form.name = "";
      }
    },
  },
};
</script>
<style lang="scss">
@import "../css/components/new-card.scss";
</style>
