<template>
    <div id="testimonials" class="block">
      <Header></Header>
      <div class="container">
        <PageTitle></PageTitle>
        <div v-html="$store.getters.getPageContent(this.$options.name)"></div>
      </div>
    </div>
</template>

<script>
import PageTitle from "./partials/PageTitle.vue";
import Header from "./partials/Header.vue";

export default {
  name: "testimonials",
  components: {
    PageTitle,
    Header
  }
};
</script>