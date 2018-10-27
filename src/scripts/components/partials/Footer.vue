<template>
    <footer class="block trans-slow bg-black py-6">
      <div class="container w-auto text-xs md:text-sm">
        <FooterTop></FooterTop>
        <FooterBottom></FooterBottom>
      </div>
    </footer>
</template>

<script>
import FooterTop from "./footer/FooterTop.vue";
import FooterBottom from "./footer/FooterBottom.vue";
export default {
  components: {
    FooterTop,
    FooterBottom
  }
};
</script>
