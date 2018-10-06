<template>
    <div id="home" class="fixed pin w-screen h-screen flex flex-col justify-center items-center bg-cover-home">
      <img src="static/img/header_logo.svg" class="w-32 md:w-48 lg:w-64 mb-8"/>
      <HomePageTitle></HomePageTitle>
      <Navigation></Navigation>
      <div>{{$store.getters.getPageContent(this.$options.name)}}</div>
    </div>
</template>

<script>
import Navigation from "./partials/HomeNav.vue";
import HomePageTitle from "./partials/HomePageTitle.vue";
export default {
  name: "home",
  components: {
    Navigation,
    HomePageTitle
  }
};
</script>