<template>
    <div id="home" class="bg-red fixed pin w-screen h-screen flex flex-col justify-center items-center">
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