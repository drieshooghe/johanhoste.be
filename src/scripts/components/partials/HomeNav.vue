<template>
    <div class="mt-12">
      <nav>
        <router-link v-bind:to="'/diensten'" class="home-navbtn trans"><div class="navbtn-label uppercase trans">Diensten</div></router-link>
        <router-link v-bind:to="'/getuigenissen'" class="home-navbtn trans"><div class="navbtn-label uppercase trans">Getuigenissen</div></router-link>
        <router-link v-bind:to="'/over-mij'" class="home-navbtn trans"><div class="navbtn-label uppercase trans">Over mij</div></router-link>
        <router-link v-bind:to="'/contact'" class="home-navbtn trans"><div class="navbtn-label uppercase trans">Contact</div></router-link>
      </nav>
    </div>
</template>