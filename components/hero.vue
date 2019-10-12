<template>
  <section class="hero" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <h1>{{ name }}</h1>
  </section>
</template>

<script>
import backgroundUrl from '~/assets/images/wipargentina-1.jpg'

export default {
  data() {
    return {
      name: 'Hero',
      backgroundUrl
    }
  }
}
</script>

<style lang="scss" scope>
  .hero{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
</style>
