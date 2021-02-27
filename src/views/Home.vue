<template>
  <div class="home">
      <chat/> 
  </div>
</template>

<script>
// @ is an alias to /src
import chat from '../components/chat'

export default {
  name: 'Home',
  components: {
     chat
  }
}
</script>
