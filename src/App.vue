<template>
  <div id="app">
    <Navbar />
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__rotateInDownLeft"
      leave-active-class="animate__animated animate__rotateOutDownLeft"
    >
      <router-view @authenticated="setAuthenticated"></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      contaGastos: {
        username: "jovane",
        password: "8888"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "home" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    }
  },
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;700&display=swap");

*,
html,
body {
  box-sizing: border-box;
  font-family: "Libre Franklin", sans-serif;
  text-align: center;
}

h1 {
  padding: 2rem;
  font-weight: bold;
}
</style>
