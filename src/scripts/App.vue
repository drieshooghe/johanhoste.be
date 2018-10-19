<template>
  <div id="app" class="font-sans bg-white w-screen max-w-full">
    <div class="flex flex-col min-h-screen">
      <Header v-if="this.$router.currentRoute.name !== 'home'"></Header>
      <div class="scroll-container">
      <transition name="scroll">
        <router-view/>
      </transition>
      </div>
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