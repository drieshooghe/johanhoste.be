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