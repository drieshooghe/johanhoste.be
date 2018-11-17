<template>
    <div id="contact" class="container w-auto scroll-content">
        <PageTitle></PageTitle>
        <div class="flex flex-wrap">

          <div class="w-full lg:w-1/2  mb-8 lg:mb-16 order-1">
              <div class="font-black"><h3>{{$store.getters.getContactInfo('name')}}</h3></div>
              <div>
                <a v-bind:href="$store.getters.getContactInfo('directionsurl')" target="_blank" class="link link--inline mb-4">
                  <div class="link__label mb-2 text-black">{{$store.getters.getContactInfo('street')}}&nbsp;{{$store.getters.getContactInfo('no')}}</div><br>
                  <div class="link__label text-black">{{$store.getters.getContactInfo('zipcode')}}&nbsp;{{$store.getters.getContactInfo('place')}}</div>
                </a>
              </div>
              <div>
                <a v-bind:href="$store.getters.getContactInfo('phonenumber') | phoneLink" class="link link--inline mb-4">
                  <div class="link__label mb-2 text-black">{{$store.getters.getContactInfo('phonenumber')}}</div>
                </a>
              </div>
              <div>
                <a v-bind:href="$store.getters.getContactInfo('email') | mailLink" class="link link--inline mb-4">
                  <div class="link__label mb-2 text-black">{{$store.getters.getContactInfo('email')}}</div>
                </a>
              </div>
              <div>BTW&nbsp;{{$store.getters.getContactInfo('vatcode')}}</div>
          </div>

        <div class="w-full lg:w-1/2 mb-8 lg:mb-16 order-3 lg:order-2 flex">
          <iframe class="w-full flex-1" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJjzwV21w9w0cRVA7ffqJblBE&key=AIzaSyAGTMotadcGmjjO5pvL13OTW3b4IiYXObk" allowfullscreen></iframe>
        </div>

          <div class="w-full order-2 lg:order-3">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf47xonTjrxE1o9-W5rGmTPh3YBkhkd9b0F7uWhqcjEqOsWgQ/viewform?embedded=true" height="947" frameborder="0" marginheight="0" marginwidth="0" class="w-full">Loading...</iframe>
          </div>

        

        </div>
        </div>
</template>

<script>
import PageTitle from "./partials/PageTitle.vue";

export default {
  name: "contact",
  components: {
    PageTitle
  },
  filters: {
    phoneLink: value => {
      if (!value) return "";
      return "tel:" + value.replace(/ /g, "");
    },
    mailLink: value => {
      if (!value) return "";
      return "mailto:" + value;
    }
  }
};
</script>