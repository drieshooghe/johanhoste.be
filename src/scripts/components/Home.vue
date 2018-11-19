<template>
    <div id="home">
      <div class="flex flex-col h-screen bg-cover-home justify-center items-center">
        <img src="static/img/header_logo.svg" class="w-24 md:w-48 lg:w-64 mb-8"/>
        <HomePageTitle></HomePageTitle>
        <div class="text-white font-light font-menu text-1xl lg:text-2xl text-center pb-3">{{$store.getters.getPageContent(this.$options.name)}}</div>
        <Navigation></Navigation>
      </div>
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