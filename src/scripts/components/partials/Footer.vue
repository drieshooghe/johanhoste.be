<template>
    <footer class="block trans-slow bg-black py-6">
      <div class="container w-auto text-xs md:text-sm">
        <FooterTop></FooterTop>
        <FooterBottom></FooterBottom>
        <cookie-law theme="dark-lime" buttonText="Deze cookies zijn oké">
            <div slot="message">
              Deze website maakt gebruik van cookies om uw gebruikerservaring te optimaliseren. Wilt u meer weten over deze cookies? <router-link to="disclaimer"><span>Klik dan hier.</span> 🍪</router-link>
            </div>
        </cookie-law>
      </div>
    </footer>
</template>

<script>
import FooterTop from "./footer/FooterTop.vue";
import FooterBottom from "./footer/FooterBottom.vue";
import CookieLaw from "vue-cookie-law";

export default {
  components: {
    FooterTop,
    FooterBottom,
    CookieLaw
  }
};
</script>
