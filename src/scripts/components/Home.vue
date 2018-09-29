<template>
    <div id="home" class="container">
      <PageTitle></PageTitle>
      <Navigation></Navigation>
      <div>{{$store.getters.getPageContent(this.$options.name)}}</div>
    </div>
</template>

<script>
import Navigation from "./partials/HomeNav.vue";
import PageTitle from "./partials/PageTitle.vue";
export default {
  name: "home",
  components: {
    Navigation,
    PageTitle
  }
};
</script>