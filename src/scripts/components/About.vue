<template>
    <div id="about">
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
  name: "about",
  components: {
    Header,
    PageTitle
  }
};
</script>