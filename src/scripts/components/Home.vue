<template>
    <div id="home" class="container">
      <h1>Johan Hoste</h1>
      <Navigation></Navigation>
    </div>
</template>

<script>
import Navigation from "./HomeNav.vue";
export default {
  name: "home",
  components: {
    Navigation
  }
};
</script>