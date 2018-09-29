<template>
    <header class="bg-green py-6">
      <div class="container flex justify-between">
        <div class="">JH</div>
        <nav>
            <ul class="list-reset flex font-light uppercase text-2xl">
              <li><router-link v-bind:to="'/diensten'" active-class="navbtn-active" class="navbtn trans"><div class="navbtn-label trans">Diensten</div></router-link></li>
              <li><router-link v-bind:to="'/getuigenissen'" active-class="navbtn-active" class="navbtn trans"><div class="navbtn-label trans">Getuigenissen</div></router-link></li>
              <li><router-link v-bind:to="'/over-mij'" active-class="navbtn-active" class="navbtn trans"><div class="navbtn-label trans">Over mij</div></router-link></li>
              <li><router-link v-bind:to="'/contact'" active-class="navbtn-active" class="navbtn -mr-4 trans"><div class="navbtn-label trans">Contact</div></router-link></li>
            </ul>
        </nav>
      </div>
    </header>
</template>