<template>
    <div id="disclaimer" class="block">
      <Header></Header>
      <transition name="disclaimer-anim" enter-active-class="slide-in" leave-active-class="slide-out">
        <div class="block container">
            <PageTitle></PageTitle>
            <div v-html="$store.getters.getPageContent(this.$options.name)"></div>
        </div>
      </transition>
    </div>
</template>

<script>
import PageTitle from "./partials/PageTitle.vue";
import Header from "./partials/Header.vue";

export default {
  name: "disclaimer",
  components: {
    PageTitle,
    Header
  }
};
</script>