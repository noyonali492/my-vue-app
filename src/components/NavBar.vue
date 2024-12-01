<template>
    <div>
        <nav>
            <ul>
                <li> <router-link to="/">Home</router-link></li>
               <li> <router-link to="/about">About</router-link></li>
                <li> <router-link to="/contact">Contact</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default({
    name:'NavBar',
   data(){
    return{
    }

   },

})
</script>
