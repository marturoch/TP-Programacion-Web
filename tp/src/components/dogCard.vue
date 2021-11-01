<template>
    <div class="card-container">
        <div></div>
        <h4>Nombre</h4>
        <p>Raza</p>
        <p>Edad</p>
        <p>Last Seen</p>
    </div>
</template>

<script>
export default {
  name: "dogCard",
}
</script>

<style scoped>

    .card-container{
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 0 ;
        width: 200px;
        align-items: center;
    }

    .card-container div{
        background-image: url(../assets/img/dog.jpg);
        width: 200px;
        height: 150px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    h4{
        margin: 10px 0;
        padding: 0;
    }

    p{
        margin: 10px 0;
    }







</style>