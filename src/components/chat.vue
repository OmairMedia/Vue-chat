<template>
  <div class="chat-container container">
       <div class="message-container text-left">
              <!-- <div class="message">
                   <h6> <i>Omair</i> - <i>5:51PM</i></h6>
                   <p>Hello World !</p>
              </div> -->

               <div class="message" v-for="message in messages" :key="message.id">
                   <h6> <i>Omair</i> - <i>{{message.time}}</i></h6>
                   <p>{{message.message}}</p>
              </div>
       </div>
       <div class="send-message">
            <b-form-input id="msg-field" v-model="msg" type="text" placeholder="Type Message"></b-form-input>
            <b-button id="send-btn" @click="sendMsg()">Send</b-button>
       </div>
  </div>
</template>

<script>
import fb from '../plugins/firebase'
import moment from 'moment'

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
            this.messages = []
            const user = fb.auth().currentUser;
            const db = fb.firestore();
            
            const data = {
                user: user.email,
                time: moment().format('MMMM Do YYYY, h:mm:ss a'),
                message: this.msg
            }

            db.collection("chat").add(data).then().catch(err => console.error(err.message));
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
                        console.log(data)
                    })
                }, (error) => {
                    console.error(error)
            });


            return this.messages

        }
    },
    mounted()
    {
          const db = fb.firestore();
          const chatref = db.collection('chat');
                chatref.orderBy("time", "asc").onSnapshot((snapshot) => {
                    snapshot.forEach((doc)=>{
                        
                        this.messages.push(doc.data())
                        console.log(doc.data())
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
    min-height:100vh;
    max-height:100vh;
    display:flex;
    flex-direction: column;

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