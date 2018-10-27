<template>
    <div id="services" class="container w-auto scroll-content">
      <PageTitle></PageTitle>
      <div v-html="$store.getters.getPageContent(this.$options.name)"></div>
    </div>
</template>

<script>
import PageTitle from "./partials/PageTitle.vue";

export default {
  name: "services",
  components: {
    PageTitle
  }
};
</script>