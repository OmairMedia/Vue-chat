<template>
  <div class="container">

       <div class="chat-container text-left">
               <div class="message px-4 py-4 my-4 mx-4" v-for="message in messages" :key="message.id">
                   <h6> <b> <i style="color:#219AD3">{{message.user}}</i> - <i>{{message.time}}</i> </b></h6>
                   <p>{{message.message}}</p>
               </div>
       </div> 
 
       <div class="send-message">
            <b-form-input id="msg-field" v-model="msg" type="text" placeholder="Type Message"></b-form-input>
            <b-button id="send-btn" class="btn btn-success" @click="sendMsg()" @keyup.enter="sendMsg()">Send</b-button>
       </div>
      
  </div>
</template>

<script>
import fb from '../plugins/firebase';
import moment from 'moment';

export default {
    name:'chat',
    data(){
        return{
            messages:[],
            msg:''
        }
    },
    methods:{
        sendMsg()
        {
            const field = document.querySelector('#msg-field');
            
            this.messages = []
            const user = fb.auth().currentUser;
            const db = fb.firestore();
            
            const data = {
                user: user.displayName,
                time: moment().format('MMMM Do YYYY, h:mm:ss a'),
                message: this.msg
            }

            db.collection("chat").add(data).then().catch(err => console.error(err.message));
 
            field.value = '';
            
            const container = document.querySelector('.chat-container');
            // Scroll down
            container.scrollTop = container.scrollHeight;
            

        }
    },
    computed: {
        loadMessages() 
        {
           const db = fb.firestore();
        //    db.collection("chat")
        //     .onSnapshot((doc) => {
        //         console.log("Current data: ", doc.data());
        //         this.messages = doc.data();
        //     });
            
            db.collection('chat')
                .onSnapshot((snapshot) => {
                    console.log(snapshot)
                    snapshot.forEach((data)=>{
                        this.messages.push(data)
                        
                    })
                }, (error) => {
                    console.error(error)
            });


            return this.messages

        },
        
    },
    mounted()
    {
          const db = fb.firestore();
          const chatref = db.collection('chat');
                chatref.orderBy("time", "asc").onSnapshot((snapshot) => {
                    snapshot.forEach((doc)=>{
                        this.messages.push(doc.data())
                        
                    })
                }, (error) => {
                    console.error(error)
            });
    }

}
</script>

<style>
.chat-container 
{
    overflow-y: scroll;
    scroll-behavior: smooth;
    min-height:80vh;
    max-height:80vh;
    display:flex;
    flex-direction: column;
    background: url('../../public/download.jpg') ;
}

.message {
    color:#555555;
    background-color: #FFFFFF;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    max-width:800px;
}

.send-message 
{
    display:flex;
    flex-direction:row;
}

.send-message #send-btn,#msg-field {
    display:inline;
}


</style>