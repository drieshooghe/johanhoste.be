<template>
    <div id="contact" class="container w-auto scroll-content">
        <PageTitle></PageTitle>
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