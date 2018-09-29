<template>
    <div id="testimonials">
      <Header></Header>
      <div class="container">
         <PageTitle></PageTitle>
      </div>
    </div>
</template>

<script>
import Header from "./partials/Header.vue";
import PageTitle from "./partials/PageTitle.vue";

export default {
  name: "testimonials",
  components: {
    Header,
    PageTitle
  }
};
</script>