<template>
  <div class="nav">
    <NavHeader />
    <NavList />
  </div>
</template>
<script>
import NavHeader from '@/components/NavHeader';
import NavList from '@/components/NavList';
export default {
  components: {NavList, NavHeader}
}
</script>
<style lang="scss">
.nav {
  width: 360px;
  padding: 10px;
  border-right: 1px solid #c4c4c4;
  height: 100%;
}
</style>
