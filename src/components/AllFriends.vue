<template>
    <div id="allfriends">
       <h2>All Friends</h2>
       <div v-for="(friend,index) in friends" :key="index">
        <h6 @click="unfriend(friend.name)">{{ friend.name }}</h6>
       </div>
    </div>
</template>

<script>

export default{
    name:'AllFriends',
    props:['friends'],
   data(){
    return{
        
        }
    },
    methods:{
        unfriend(name){
            this.$emit('delete',{name})
        }
    }
   
}
</script>
