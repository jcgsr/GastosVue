<template>
  <div class="form-group container">
    <h2 class="animate__animated animate__bounceIn">{{ titulo }}</h2>
    <label>Login</label>
    <input type="text" name="username" v-model="input.username" placeholder="Login" />
    <label>Senha</label>
    <input type="password" name="password" v-model="input.password" placeholder="Senha" />
    <button type="button" v-on:click="login()" class="btn btn-primary">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Vue Gastos",
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.contaGastos.username &&
          this.input.password == this.$parent.contaGastos.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "form" });
        } else {
          alert("Usuário e/ou senha está incorreta");
        }
      } else {
        alert("Usuário e senha devem ser preenchidos.");
      }
    }
  }
};
</script>

<style scoped>
h2 {
  padding: 3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 3rem;
}

p {
  max-width: 60%;
  margin: 0 auto;
  text-align: center;
}

.container input {
  display: flex;
  margin-bottom: 1rem;
}
</style>