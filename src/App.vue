<template>
  <div id="app">
    <nav-bar :profile="getUserProfile" :status="getUserStatus"/>
    <div class="">
       <router-view/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
   computed:{
     ...mapGetters([
        'getUserProfile',
         'getUserStatus' 
     ])
   }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap');
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}

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
