<template>

    <section class="flex flex-wrap md:text-center">

          <div class="py-1 w-full md:w-1/3 trans">
            <span class="text-white">©&nbsp;{{ new Date().getFullYear() }}&nbsp;{{ $store.getters.getContactInfo('name') }}</span>
          </div>

          <div class="py-1 w-full md:w-1/3 trans">
            <router-link :to="{ name: 'disclaimer' }" class="link">
              <span class="text-white">
                <span class="link__label link__label--dark">Disclaimer</span>
              </span>
            </router-link>
          </div>

          <div class="py-1 w-full md:w-1/3 trans">
            <a class="link" href="https://www.drieshooghe.com" target="_blank">
                <span class="text-white">
                    Website by: 
                    <span class="link__label link__label--dark">Dries Hooghe</span>
                </span>
            </a>
          </div>

       </section>
       
</template>
