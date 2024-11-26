<template>
    <div id="onlinefriends">
        <h2>Online Friends</h2>
       <div v-for="(friend,index) in friends" :key="index">
            <h2 v-if="friend.online">{{ friend.name }}</h2>
       </div>
    </div>
</template>

<script>

export default({
    name:'OnlineFriends',
    props:['friends'],
   data(){
    return{
        
    }
   }

})
</script>
