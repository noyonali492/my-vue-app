<template>
    <div id="allfriends">
        <h2>All Friends</h2>
       <div v-for="(friend,index) in friends" :key="index">
            <h2>{{ friend.name }}</h2>
       </div>
    </div>
</template>

<script>

export default({
    name:'AllFriends',
    props:['friends'],
   data(){
    return{
        
    }
   }

})
</script>
