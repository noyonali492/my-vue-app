<template>
    <div>
        <h2 style="color: red; text-align: center;">Posts</h2><hr>
        <div v-for="post in posts" :key="post.id">
            <h3 style="color: yellow;">{{ post.title }}</h3>
            <p>{{ $snippet(post.body) }}</p><hr>

            
        </div>
    </div>
</template>

<script>
 import axios from 'axios';
export default({
    name:'JsonPost',
   data(){
    return{
        posts:[]
    }
   },
   created(){
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(Response =>{
            this.posts = Response.data
     })
     .catch(Error =>{
        alert('data not found');
     })
   }
})
</script>
