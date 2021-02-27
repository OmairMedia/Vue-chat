<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Vue-chat</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      
            <b-nav-item to="/login">Login</b-nav-item>
            <b-nav-item to="/signup">Signup</b-nav-item>
       
   

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="signOut()">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import fb from '../plugins/firebase'
export default {
   name:'navBar',
   data()
   {
       return{
          
       }
   },
   computed: {
       loggedIn(){
         let status = false;  
         fb.auth().onAuthStateChanged((user)=>{
             if(user)
             {
                 status = true
             }else{
                 status = false
             }
         })

         return status;
       },
   },
   methods:{
       
       signOut(){
           fb.auth().signOut().then(()=>{
               this.$router.push('/login')
           }).catch((err)=>{console.error(err.message)})
       }
   }
}
</script>

<style>

</style>