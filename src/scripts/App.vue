<template>
  <div id="app" class="font-sans bg-white w-screen max-w-full">
    <div class="min-h-screen">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/partials/Footer.vue";
export default {
  name: "app",
  components: {
    Footer
  }
};
</script>