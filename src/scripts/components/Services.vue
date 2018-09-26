<template>
    <div id="services">
      <Header></Header>
      <div class="container">
        <h1>{{title}}</h1>
      </div>
    </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "services",
  components: {
    Header
  },
  data: function() {
    return {
      title: "Diensten"
    };
  }
};
</script>