<script>
export default {
  data() {
    return {
      listsuhu: [],
    };
  },
  methods: {
    async ambildata() {
      const response = await fetch("http://localhost:3000/getlist");
      const data = await response.json();
      this.listsuhu = data.Sensor_suhu;
      console.log(data);
    },
  },
};
</script>

<template>
  <table class="border-2 bg-red-500">
    <th>
      <tr class="border-2">
        <td>Waktu</td>
        <td>Suhu</td>
      </tr>
      <tr v-for="item in listsuhu" class="border-2">
        <td>{{ item.waktu }}</td>
        <td>{{ item.suhu }}</td>
      </tr>
    </th>
  </table>
  <div>
    <button class="bg-blue-600" @click="ambildata()"><b>Ambil Data</b></button>
  </div>
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