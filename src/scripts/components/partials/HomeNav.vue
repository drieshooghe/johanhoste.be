<template>
    <div class="mt-12">
      <nav>
        <router-link :to="{ name: 'services' }" class="home-navbtn trans"><div class="navbtn-label uppercase trans">Diensten</div></router-link>
        <router-link :to="{ name: 'testimonials' }" class="home-navbtn trans"><div class="navbtn-label uppercase trans">Getuigenissen</div></router-link>
        <router-link :to="{ name: 'about' }" class="home-navbtn trans"><div class="navbtn-label uppercase trans">Over mij</div></router-link>
        <router-link :to="{ name: 'contact' }" class="home-navbtn trans"><div class="navbtn-label uppercase trans">Contact</div></router-link>
      </nav>
    </div>
</template>