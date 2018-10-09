<template>
    <div id="about" class="block absolute container pt-6 lg:pt-12">
      <PageTitle></PageTitle>
      <div v-html="$store.getters.getPageContent(this.$options.name)"></div>
    </div>
</template>

<script>
import PageTitle from "./partials/PageTitle.vue";

export default {
  name: "about",
  components: {
    PageTitle
  }
};
</script>