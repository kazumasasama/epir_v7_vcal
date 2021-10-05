<template>
  <div>
    <b-navbar type="light" variant="light">
      <div class="container">
        <div class="logo">
          <img alt="epiR logo" src="../assets/epiRLogo70x40.png" />
        </div>
        <b-navbar-nav class="nav">
          <b-nav-item class="nav-item1">
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
          <b-nav-item>
            <router-link to="/appointments">Appointments</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/customers">Customers</router-link>
          </b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">JPN</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="アカウント" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script></script>

<style>
.nav {
  padding: 15px;
  text-align: right;
}
.nav-item1 {
  margin-left: 20px;
}
</style>
