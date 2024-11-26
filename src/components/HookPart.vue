<template>
    <div>
        <h4>{{ title }}</h4>
        <button @click="changeTitle">Click Me</button>
    </div>
</template>

<script>

export default({
    name:'HookPart',
   data(){
    return{
        title:'Hook part LifeCycle'
    }
   },
   methods:{
    changeTitle(){
        this.title ='noyon hook'
    }
   },
   beforeCreate(){
        alert('alert noyon')
   },
   created(){
        alert('alim alaa')
   },
   beforeUpdate(){
    alert('before update')
   },
   updated(){
    alert('Updated')
   }
})
</script>
