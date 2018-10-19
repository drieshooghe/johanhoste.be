<template>
    <div id="testimonials" class="container scroll-content">
      <PageTitle></PageTitle>
      <div v-html="$store.getters.getPageContent(this.$options.name)"></div>
    </div>
</template>

<script>
import PageTitle from "./partials/PageTitle.vue";

export default {
  name: "testimonials",
  components: {
    PageTitle
  }
};
</script>