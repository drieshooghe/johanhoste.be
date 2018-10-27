<template>
    <div id="testimonials" class="container w-auto scroll-content">
      <PageTitle></PageTitle>
      <div v-html="$store.getters.getPageContent(this.$options.name)"></div>
      <section>
        <div v-for="testimonial in this.testimonials" v-bind:key="testimonial.id" class="mb-12">
          <div>{{ testimonial.getContent() }}</div>
          <div class="text-right py-6"><span class="italic">{{ testimonial.getName() }}</span></div>
          <div v-for="image in testimonial.getImageCollection().getImages()" v-bind:key="image.id">
            <img src="static/img/no-image.jpg" v-bind:id="image.id" class="cursor-pointer">
          </div>
        </div>
      </section>
    </div>
</template>

<script>
import PageTitle from "./partials/PageTitle.vue";
export default {
  name: "testimonials",
  components: {
    PageTitle
  },
  data() {
    return {
      testimonials: this.$store.getters.getTestimonials()
    };
  },

  async created() {
    for (let testim of this.testimonials) {
      for (let img of testim.getImageCollection().getImages()) {
        fetch(
          this.$store.state.api.host +
            "/api/cockpit/image?token=" +
            this.$store.state.api.token,
          {
            method: "post",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              src: img.path || img.id,
              w: 576, // width
              q: 80 // quality
            })
          }
        )
          .then(res => res.text())
          .then(res => {
            document.getElementById(img.id).setAttribute("src", res);
          })
          .catch(error => console.error(error));
        fetch(
          this.$store.state.api.host +
            "/api/cockpit/image?token=" +
            this.$store.state.api.token,
          {
            method: "post",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              src: img.path || img.id,
              w: 1080, // width
              q: 80 // quality
            })
          }
        )
          .then(res => res.text())
          .then(res => {
            document.getElementById(img.id).setAttribute("data-hires-src", res);
          })
          .catch(error => console.error(error));
      }
    }
  }
};
</script>