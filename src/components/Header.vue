<template>
  <div>
    <b-nav tabs>
      <b-nav-item><router-link to="/">Home</router-link></b-nav-item> |
      <b-nav-item><router-link to="/about">About</router-link></b-nav-item> |
      <b-nav-item><router-link to="/appointments">Appointments</router-link></b-nav-item> |
      <b-nav-item><router-link to="/customers">Customers</router-link></b-nav-item>
    </b-nav>
  </div>
</template>

<script></script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
