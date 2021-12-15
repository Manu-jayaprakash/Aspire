<template>
  <el-row class="w-100">
    <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="col-dark">
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
</template>
<script>
import Carousel from "../components/Carousel";
import CardDetails from "../components/CardDetails";
import CardControls from "../components/CardControls";
import RecentTransactions from "../components/RecentTransactions";
export default {
  components: {
    CardControls,
    RecentTransactions,
    Carousel,
    CardDetails,
  },
};
</script>
