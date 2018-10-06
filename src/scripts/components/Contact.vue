<template>
    <div id="contact" class="block absolute">
      <PageTitle></PageTitle>
      <div><span>{{$store.getters.getContactInfo('street')}}</span>&nbsp;<span>{{$store.getters.getContactInfo('no')}}</span></div>
    </div>
</template>

<script>
import PageTitle from "./partials/PageTitle.vue";

export default {
  name: "contact",
  components: {
    PageTitle
  }
};
</script>