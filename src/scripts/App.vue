<template>
  <div id="app" class="font-sans bg-white w-screen h-screen flex flex-col">
    <div class="flex-shrink relative" v-bind:class="{'z-50': (this.$route.name !== 'home')}">
      <Header></Header>
    </div>
    <div class="flex-grow relative container">
      <transition name="router-anim" enter-active-class="slide-in" leave-active-class="slide-out">
        <router-view/>
      </transition>
    </div>
    <div class="flex-shrink w-screen trans-slow z-50" v-bind:class="{'bg-green': (this.$route.name !== 'home')}">
      <div class="container footer" v-bind:class="{'footer--home': (this.$route.name === 'home')}">
        <span class="footer__col">
          <span class="footer__label">©&nbsp;{{ new Date().getFullYear() }}&nbsp;{{ $store.getters.getContactInfo('name') }}</span>
        </span>&vert;
        <span class="footer__col">
          <a href="/disclaimer" class="link link--inline footer__link">
            <span class="link__label footer__label">Disclaimer</span>
          </a>
        </span>&vert;
        <span class="footer__col">
          Website by: 
          <a class="link link--inline footer__link" href="https://www.drieshooghe.com" target="_blank">
            <span class="link__label footer__label">Dries Hooghe</span>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/partials/Header.vue";
export default {
  name: "app",
  components: {
    Header
  },
  computed: {
    isHome: this.$router.name === "home"
  }
};
</script>