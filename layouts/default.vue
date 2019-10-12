<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>
<script>
import Navbar from '@/components/navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  body{
    background-color: orange;
  }
</style>

