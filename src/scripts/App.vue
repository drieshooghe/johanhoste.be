<template>
  <div id="app">
    <p>
      <router-link v-bind:to="'/'">Home</router-link>
      <router-link v-bind:to="'/diensten'">Diensten</router-link>
      <router-link v-bind:to="'/getuigenissen'">Getuigenissen</router-link>
      <router-link v-bind:to="'/over-mij'">Over mij</router-link>
      <router-link v-bind:to="'/contact'">Contact</router-link>
    </p>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>