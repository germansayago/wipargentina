<template>
  <nav class="navbar is-dark is-transparent is-fixed-top" role="navigation" aria-label="main navigation" id="nav">
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

      <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
        <div class="navbar-start">
          <nuxt-link to="#cta" class="navbar-item">
            Cta
          </nuxt-link>
          <nuxt-link to="#join" class="navbar-item">
            Join
          </nuxt-link>
          <nuxt-link to="#onTop" class="navbar-item">
            On Top
          </nuxt-link>
          <nuxt-link to="#values" class="navbar-item">
            Values
          </nuxt-link>
          <nuxt-link to="#contact" class="navbar-item">
            Contact
          </nuxt-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <nuxt-link to="">
              <span class="icon is-large">
                <i class="fab fa-lg fa-facebook"></i>
              </span> 
            </nuxt-link>
            <nuxt-link to="">
              <span class="icon is-large">
                <i class="fab fa-lg fa-instagram"></i>
              </span> 
            </nuxt-link>
            <nuxt-link to="">
              <span class="icon is-large">
                <i class="fab fa-lg fa-linkedin"></i>
              </span> 
            </nuxt-link>
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
  },
  mounted() {
    this.$nextTick(function(){
      window.addEventListener("scroll", function(){
        var navbar = document.getElementById("nav")
        var nav_classes = navbar.classList
        if(document.documentElement.scrollTop >= 240) {
          if (nav_classes.contains("is-scroll") === false) {
            nav_classes.toggle("is-scroll");
          }
        }
        else {
          if (nav_classes.contains("is-scroll") === true) {
            nav_classes.toggle("is-scroll");
          }
        }
      })
    })
  },
}
</script>

<style lang="scss">
  .navbar{
    height: 120px;
    -moz-transition: height 0.5s ease;
    -webkit-transition: height 0.5s ease;
    -o-transition: height 0.5s ease;
    transition: height 0.5s ease;
    &.is-transparent{
      background-color: transparent;
    }
    &.is-scroll{
      background-color: #222;
      height: 50px;
    }
  }

  @media (max-width: 767px) {
    .navbar {
      height: 50px;
    }
  }
</style>