<template>
  <div class="home">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from '@/components/Nav';
export default {
  name: 'Home',
  components: {
    Nav

  }
}
</script>
<style lang="scss">
.home {
  height: 100vh;
  overflow-y: scroll;
  display: flex;
}
</style>
