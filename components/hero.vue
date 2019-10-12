<template lang="pug">
  div.hero
    h1 Hello {{ name }}
</template>

<script>
export default {
  data() {
    return {
      name: 'Hero'
    }
  }
}
</script>

<style lang="scss">
  .hero{
    background-color: red;    
    min-height: 300px;
    h1{
      background-color: green;
    }
  }
</style>