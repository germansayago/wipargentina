<template>
  <section class="hero is-link is-fullheight" :style="{ backgroundImage: `url(${backgroundUrl})` }">   
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">¿Inauguramos mañana?</h1>
        <h2 class="title is-2">Vender por internet nunca fue tan fácil</h2>
        <h3 class="subtitle is-3">¿Estás listo para surfear esta ola?</h3>
        <div class="cta">
          <a href="#cta" class="has-text-white">
            <i class="fas fa-3x fa-angle-down"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import backgroundUrl from '~/assets/images/wipargentina-1.jpg'

export default {
  data() {
    return {
      backgroundUrl
    }
  },
  mounted() {
    var hero = document.querySelector('.hero');
    var navbar = document.querySelector('.navbar');    

    if (hero.style.position !== 'hero') {
      var heroTop = hero.offsetTop;
      document.addEventListener('scroll', function () {
        if(window.scrollY > 240) {
          navbar.classList.add('is-primary')
          navbar.classList.remove('is-spaced')
        } else {
          navbar.classList.remove('is-primary')
          navbar.classList.add('is-spaced')
        }
      });
    }

    if(window.scrollY > 240){
      navbar.classList.add('is-primary')
      navbar.classList.remove('is-spaced')
    }

    console.log(window.scrollY);
  }
}
</script>

<style lang="scss">
  .hero{
    text-align: center;
    margin-bottom: 30px;
    .cta {
      -webkit-animation: action 0.5s infinite  alternate;
      animation: action 0.5s infinite  alternate;
      margin-top: 50px;      
    }
    @-webkit-keyframes action {
      0% { transform: translateY(0); }
      100% { transform: translateY(-15px); }
    }
    @keyframes action {
      0% { transform: translateY(0); }
      100% { transform: translateY(-15px); }
    }      
  }
</style>
