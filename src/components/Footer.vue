<script setup lang="ts">
  
  import { ref, type PropType } from 'vue';
  import Menubar from 'primevue/menubar';
  //import { useRouter } from 'vue-router'
  import {routes} from "@/router/index"
  import { capitalise } from '@/lib/helper';

  //const router = useRouter()
  const routers = routes.map( route => ({label: capitalise(route.name), icon: route.icon, to: route.path})) as any
  const items = ref(routers)

</script>
<template>
    <!-- Navbar !-->
    <div class="footer">
        <a href="https://github.com/frankieian" rel="noreferrer" target="_blank" class="icon">
            <image height="50" class="pi pi-github" style="font-size: 2.5rem;"/>
        </a>
        <a href="https://www.linkedin.com/in/frankie-ian-752914146/" rel="noreferrer" target="_blank" class="icon">
            <image height="50" class="pi pi-linkedin" style="font-size: 2.5rem;"/>
        </a>
    </div>
     <!-- Navbar -->
</template>

<style>

.footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
}
.footer .icon {
    margin-right: 1rem;
}

</style>