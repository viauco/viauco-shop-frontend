<template>
<div class="section" v-if="queryPageCount > 1">
  <div class="container">
    <div class="columns is-centered is-multiline">
      <div class="column is-one-quarter" v-for="product in arrProduct" :key="product.id">
        <VmProduct :product="product" />
      </div>
      <div class="section" v-if="arrProduct.length === 0">
        <div class="container">
          <p>{{ $t('NoProductLabel') }}</p>
        </div>
      </div>
    </div>
    <div class="container" v-if="queryPageCount > 1">
      <div class="columns is-centered is-multiline">
        <el-pagination
          :page-size="queryLimit"
          layout="prev, pager, next"
          :total="queryTotal"
          @size-change="OnPageChange"
          @current-change="OnPageChange">
        </el-pagination>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'ProductListSearch',
  
  components: { 
    VmProduct: () => import('@/components/product/ProductSummary')
  },
  
  computed: {
    products () {
      return this.$store.state.product.products;
    },
    q() {
      return this.$route.query.q
    },
    searchProducts() {
      let q = this.q;
      if( !q || q.length <= 0 ){ return this.products }
      let query = q.toLowerCase();
      var regex = new RegExp(query, 'i')
      return _.filter(this.products,(item) => {
        return (item.title && item.title.search(regex) > -1) || 
                (item.price && (item.price.toString()).search(regex) > -1) || 
                (item.sapo && item.sapo.search(regex) > -1) || 
                (item.description && item.description.search(regex) > -1);
      });
    },
    queryPage() {
      let page = this.$route.query.page ? parseInt( this.$route.query.page ) : 1;
      this.page = page;
      return page 
    },
    queryLimit() {
      let limit = this.$route.query.limit ? parseInt( this.$route.query.limit ) : 20;
      return limit
    },
    queryOffset() {
      return (this.queryPage -1 ) * this.queryLimit
    },
    queryEnd() {
      return this.queryOffset + this.queryLimit
    },
    queryTotal() {
      return this.searchProducts.length
    },
    queryPageCount() {
      return this.queryLimit > 0 ? Math.ceil(this.queryTotal/this.queryLimit) : 0
    },
    arrProduct () {
      return this.searchProducts.slice(this.queryOffset, this.queryEnd);
    },
    
  },
  methods:{
    OnPageChange(p) {
      this.$router.push( this.localePath({name: 'index', query:{
        page: p,
        limit: this.queryLimit,
        q: this.q
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
