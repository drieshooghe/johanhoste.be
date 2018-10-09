<template>
    
    <div class="flex-shrink w-screen trans-slow z-50" v-bind:class="{'bg-green': (this.$route.name !== 'home')}">
      <div class="container footer text-xs md:text-sm" v-bind:class="{'footer--home': (this.$route.name === 'home')}">
        <div class="footer__col footer__col--left trans">
          <span class="footer__label">©&nbsp;{{ new Date().getFullYear() }}&nbsp;
              <span class="hidden md:inline">{{ $store.getters.getContactInfo('name') }}</span>
              <span class="inline md:hidden">J. Hoste</span>
           </span>
        </div>
        <div class="footer__col-separator"></div>
        <div class="footer__col footer__col--center trans">
          <a href="/disclaimer" class="link link--inline footer__link">
            <span class="link__label footer__label">Disclaimer</span>
          </a>
        </div>
        <div class="footer__col-separator"></div>
        <div class="footer__col footer__col--right trans">
          <a class="link link--inline footer__link" href="https://www.drieshooghe.com" target="_blank">
            Website by: 
              <span class="link__label footer__label">
                <span class="hidden md:block">Dries Hooghe</span>
                <span class="block md:hidden">DH</span>
              </span>
          </a>
        </div>
      </div>
    </div>

</template>
