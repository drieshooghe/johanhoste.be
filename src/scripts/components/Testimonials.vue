<template>
    <div id="testimonials" class="container w-auto scroll-content">

      <PageTitle></PageTitle>

      <div v-html="$store.getters.getPageContent(this.$options.name)"></div>

      <section>
        <div v-for="(testimonial, testimIndex) in this.testimonials" v-bind:key="testimonial.id" class="mb-12">
          <div>{{ testimonial.getContent() }}</div>
          <div class="text-right py-6"><span class="italic">{{ testimonial.getName() }}</span></div>
          <a v-for="(image, i) in testimonial.getImageCollection().getImages()" v-bind:key="image.id" v-bind:class="{ 'pl-4': i !== 0 }" class="inline-block">
            <img src="static/img/no-image.jpg" v-bind:id="image.id" v-bind:class="'js-lightbox-trigger-' + testimIndex">
          </a>
        </div>
      </section>

      <LightBox></LightBox>

    </div>
</template>

<script>
import PageTitle from "./partials/PageTitle.vue";
import LightBox from "./partials/LightBox.vue";
import * as PhotoSwipe from "photoswipe";
import * as PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";
export default {
  name: "testimonials",
  components: {
    PageTitle,
    LightBox
  },
  data() {
    return {
      testimonials: this.$store.getters.getTestimonials()
    };
  },

  async created() {
    /**
     * For each image of this testimonial fetch a thumbnail
     */
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
              w: 256, // width
              h: 172,
              q: 80 // quality
            })
          }
        )
          .then(res => res.text())
          .then(res => {
            document.getElementById(img.id).setAttribute("src", res);
          })
          .catch(error => console.error(error));
      }
    }

    /**
     * For each image of this testimonial fetch a hiresolution image and append it to the lightbox gallery
     */
    let promises = [];
    let imageCollections = [];
    for (let testim of this.testimonials) {
      let images = [];
      for (let img of testim.getImageCollection().getImages()) {
        promises.push(
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
              document
                .getElementById(img.id)
                .setAttribute("data-hires-src", res);
              images.push({
                src: res,
                w: 1080,
                h: 768
              });
              return true;
            })
            .catch(error => console.error(error))
        );
      }
      imageCollections.push(images);
    }

    /**
     * Render lightbox
     */
    Promise.all(promises).then(res => {
      for (let i in imageCollections) {
        let gallery = new PhotoSwipe(
          document.getElementsByClassName("pswp")[0],
          PhotoSwipeUI_Default,
          imageCollections[i],
          {
            index: 0,
            bgOpacity: 0.6
          }
        );
        let triggers = document.querySelectorAll(".js-lightbox-trigger-" + i);
        for (let t of triggers) {
          t.addEventListener("click", e => {
            // gallery.init();
          });
        }
      }
    });
  }
};
</script>