import Vue from "vue";

let v = new Vue({
    el: "#app",
    delimiters: ['${', '}'],
    template: `
        <h1 class="bg-grey">Johan in de huis!</h1>
    `
});