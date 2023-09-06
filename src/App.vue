<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import NavBar from "./components/NavBar.vue"
import Footer from './components/Footer.vue';

const router = useRouter()


</script>

<template>
  <div class="wrapper">

  <header>
    <NavBar/>
  </header>

  <RouterView />
  </div>
  <Footer/>
</template>

<style>

#app {
  font-family: 'Montserrat';

}

@media (min-width: 1200px) {
  .wrapper {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    min-height: 91vh;
  }
}

@media (max-width: 1200px) {
  .wrapper {
    min-height: 93vh;
  }
}


.p-component {
  font-family: 'Montserrat';
  font-size: large;
}

</style>