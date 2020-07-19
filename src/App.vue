<template>
  <div id="app">    
    <Navbar />
    <transition enter-active-class="animate__animated animate__rotateInDownLeft" leave-active-class="animate__animated animate__rotateInUpLeft">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data() {
    return {
     
    }
  },
  components: {
    Navbar, Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Krub:wght@400;700&display=swap');
*, html, body {
  box-sizing: border-box;
  font-family: 'Krub', sans-serif;
  text-align: center;
}

h1{
  padding: 2rem;
  font-weight: bold;
}

</style>
