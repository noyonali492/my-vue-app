<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <NavBar></NavBar>

  <HookPart></HookPart>
  <JsonPost></JsonPost>
  <h2>Body</h2>
  <AllFriends :friends="friends" @delete="deleteFriend"></AllFriends>
  <OnlineFriends :friends="friends"></OnlineFriends>
  <FooterNoyon></FooterNoyon>
</template>

<script>
import FooterNoyon from './components/FooterNoyon.vue';
import NavBar from './components/NavBar.vue';
import AllFriends from './components/AllFriends.vue';
import OnlineFriends from './components/OnlineFriends.vue';
import HookPart from './components/HookPart.vue';
import JsonPost from './components/JsonPost.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterNoyon,
    AllFriends,
    OnlineFriends,
    HookPart,
    JsonPost
  },
  data(){
    return{
      friends:[
            {name:'A', online:true},
            {name:'B', online:true},
            {name:'C', online:false},
            {name:'D', online:true},
        ]
    }
  },
  methods:{
    deleteFriend(payload){
      console.log(payload);
      this.friends = this.friends.filter(friend =>{
        return friend.name !== payload.name
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
