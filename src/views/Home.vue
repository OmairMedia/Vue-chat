<template>
  <div class="home">
      <section class="section-01">
         <div class="container">
            <div class="row">
               <div class="col-6"></div>
               <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-left">
                 
                     <h2>Simple. Secure. Reliable messaging.</h2>
                     <h4>With WhatsApp, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.</h4>
                      <br>
                     <b-button variant="dark" size="lg" to="/login">Get Started Now !</b-button>
               </div>
            </div>
         </div>
      </section>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
     
  }
}
</script>

<style>

.section-01 {
   width:100%;
   height:90vh;
   background-image: url('../assets/showcase.jpg');
   background-size:cover;
   display:flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
}

</style>