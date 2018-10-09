<template>
  <div id="app" class="font-sans bg-white w-screen h-screen flex flex-col">
    <div class="flex-shrink relative" v-bind:class="{'z-50': (this.$route.name !== 'home')}">
      <Header></Header>
    </div>
    <div class="flex-grow relative overflow-y-scroll overflow-x-hidden">
      <transition name="router-anim" enter-active-class="slide-in" leave-active-class="slide-out">
        <router-view/>
      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/partials/Header.vue";
import Footer from "./components/partials/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>