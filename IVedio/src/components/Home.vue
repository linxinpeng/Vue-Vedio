<template>
  <div class="i-home">
    <x-header>
      <div slot="right">视频</div>
      <div>首页</div>
      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header>
    <tab active-color="#35495e" bar-active-color="#35495e">
      <tab-item v-for="(item,index) in list" :key="index" :selected="index===0">{{item}}</tab-item>
    </tab>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      list:['推荐','电视剧','电影','综艺','娱乐','咨询','动漫']
    }
  }
}
</script>
<style lang="scss">

</style>
