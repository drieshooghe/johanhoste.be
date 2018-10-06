<template>
  <div id="app" class="font-sans bg-white w-screen h-screen flex flex-col">
    <div class="z-50 flex-shrink" v-show="this.$route.name !== 'home'">
      <Header></Header>
    </div>
    <div class="z-40 flex-grow relative container">
      <transition name="router-anim" enter-active-class="slide-in" leave-active-class="slide-out">
      <router-view/>
    </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/partials/Header.vue";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>