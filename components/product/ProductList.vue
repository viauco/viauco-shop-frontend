<template>
  <div class="columns is-centered is-multiline">
    <div class="card column is-one-quarter" v-for="product in arrProduct" :key="product.id">
      <VmProduct :product="product" />
    </div>
    <div class="section" v-if="queryPageCount > 1">
      <el-pagination
        :page-size="queryLimit"
        layout="prev, pager, next"
        :total="queryTotal"
        @size-change="OnPageChange"
        @current-change="OnPageChange">
      </el-pagination>
    </div>
    <div class="section" v-if="arrProduct.length === 0">
      <p>{{ $t('NoProductLabel') }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductList',
  
  components: { 
    VmProduct: () => import('@/components/product/ProductSummary')
  },
  
  computed: {
    products () {
      return this.$store.state.product.products;
    },
    queryPage() {
      let page = this.$route.query.page ? parseInt( this.$route.query.page ) : 1;
      this.page = page;
      return page 
    },
    queryLimit() {
      let limit = this.$route.query.limit ? parseInt( this.$route.query.limit ) : 12;
      return limit
    },
    queryOffset() {
      return (this.queryPage -1 ) * this.queryLimit
    },
    queryEnd() {
      return this.queryOffset + this.queryLimit
    },
    queryTotal() {
      return this.products.length
    },
    queryPageCount() {
      return this.queryLimit > 0 ? Math.ceil(this.queryTotal/this.queryLimit) : 0
    },
    arrProduct () {
      return this.products.slice(this.queryOffset, this.queryEnd);
    }
  },
  methods:{
    OnPageChange(p) {
      this.$router.push( this.localePath({name: 'index', query:{
        page: p,
        limit: this.queryLimit
      }}))
    }
  }
};
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>
