<script>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  data() {
    return {
      nama: "",
    };
  },

  methods: {
    myFunction() {
      document.getElementById("myDialog").showModal();
    },

    Berubah() {
      this.nama = "beril";
    },

    async ambildata() {
      const response = await fetch("http://localhost:4000/pelolo");
      const data = await response.json();
      this.nama = data.randomWords;
      console.log(data);
    },
  },
};
</script>

<template>
  <header>

    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div style="display:block" class="wrapper">
      <HelloWorld msg="IT Telkom Surabaya" />

      <input type="text" v-model="nama" />

      {{ nama }}
      <button @click="Berubah()">Berubah</button>
      <button @click="ambildata()">Ambil Data</button>
      <button class="btn" @click="myFunction()">Show dialog</button>
      <!-- ini dialog -->
      <dialog id="myDialog">This is a dialog window</dialog>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.btn {
  margin: -23px 372px;
  background-color: purple
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>