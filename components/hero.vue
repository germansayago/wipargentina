<template>
  <section class="hero is-link is-fullheight" :style="{ backgroundImage: `url(${backgroundUrl})` }">   
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">¿Inauguramos mañana?</h1>
        <h2 class="title is-2">Vender por internet nunca fue tan fácil</h2>
        <h3 class="subtitle is-3">¿Estás listo para surfear esta ola?</h3>
        <div class="cta has-text-white">
          <i class="fas fa-3x fa-angle-down"></i>
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

  @media screen and (max-width: 767px) {
    .hero-body{
      font-size: .9rem;
      .is-1{
        font-size: 2.4rem;
      }
      .is-2{
        font-size: 2rem;
      }
      .is-3{
        font-size: 1.6rem;
      }
    }
  }
</style>
