<template>
    <div>
        <h2 style="color: red; text-align: center;">Posts</h2><hr>
        
        <input type="text" v-model="searchTerm" placeholder="search">
        <div v-for="post in filterSearch" :key="post.id">
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
        posts:[],
        searchTerm: ''
    }
   },
   computed:{
        filterSearch(){
           return this.posts.filter(pos=>{
                return pos.title.match(this.searchTerm)
            })
        }
   },



   created(){
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(Response =>{
            this.posts = Response.data
     })
     .catch((error) => {
    console.error('Error fetching data:', error); // Log the error
    alert('Data not found');
    });
   }
})
</script>
