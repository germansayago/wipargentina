<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- <a class="navbar-item" href="./">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a> -->
      <nuxt-link to="" class="navbar-item">
        <img src="@/assets/images/wip-color.svg" width="112" height="28">
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

    <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{'is-active': isOpen}">     
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button">
              facebook
            </a>
            <a class="button">
              instagram
            </a>
            <a class="button">
              linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  </div>
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