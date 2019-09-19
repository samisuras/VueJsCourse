<template>
    <form class="form">
        <slot name="titulo"></slot>
        <slot name="elementos"></slot>
        <slot name="boton"></slot>
    </form>
</template>
<script>
export default{
    
}
</script>
<style scoped>
    h3{
        color:blue;
    }
</style>