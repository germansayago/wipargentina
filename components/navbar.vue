<template>
  <nav class="navbar is-dark is-fixed-top is-primary" role="navigation" aria-label="main navigation" id="nav">
    <div class="container">
      <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="@/assets/images/wip-white.svg" width="80" height="28">
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="isOpen = !isOpen"
        v-bind:class="{'is-active': isOpen}">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': isOpen }">
        <div class="navbar-end">
          <div class="navbar-item">
            <a href="https://www.facebook.com/wipargentina" class="icon is-large" target="_blank">
              <i class="fab fa-lg fa-facebook-square"></i>            
            </a>
            <a href="https://www.instagram.com/wipargentina/" class="icon is-large" target="_blank">
              <i class="fab fa-lg fa-instagram"></i>            
            </a>
            <a href="https://www.linkedin.com/company/wipargentina" class="icon is-large" target="_blank">
              <i class="fab fa-lg fa-linkedin"></i>            
            </a>
            <a href="https://twitter.com/wipargentina" class="icon is-large" target="_blank">
              <i class="fab fa-lg fa-twitter-square"></i>            
            </a>
            <a href="https://wa.me/543586018552" class="icon is-large" target="_blank">
              <i class="fab fa-lg fa-whatsapp"></i>            
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss">

</style>