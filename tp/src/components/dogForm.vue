<template>
    <div class="form-container">
        <h3>Perdite tu Perro? Ingresa su información</h3>
        <form action="">
            <label for="nombre">Nombre</label>
            <input type="nombre" name="" id="">
            <label for="raza">Raza</label>
            <input type="raza" name="" id="">
            <label for="edad">Edad</label>
            <input type="edad" name="" id="">
            <label for="lugar">Lugar</label>
            <input type="lugar" name="" id=""><br>
            <label for="file">Foto</label>
            <input type="file" name="" id="">
            <button>Agregar</button>
        </form>
    </div>
</template>

<script>
export default {
  name: "dogForm",
}
</script>

<style scoped>

.form-container{
    background-color: white;
    width: 400px;
    padding: 10px 40px 40px 40px;
    margin-top: 30px;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

button{
    margin-top: 20px;
    width: 80px;
}





</style>