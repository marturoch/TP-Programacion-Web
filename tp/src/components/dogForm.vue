<template>
    <div class="form-container">
        <h3>¿Perdiste tu perro? Ingresá su información y agregalo a la RED</h3>
        <form action="">
            <label for="nombre">Responde al nombre de:</label>
            <input type="nombre" name="" id="" required>
            <label for="raza">Raza</label>
            <input type="raza" name="" id="" required>
            <label for="edad">Edad</label>
            <input type="edad" name="" id="">
            <label for="lugar">Lugar donde lo viste por última vez</label>
            <input type="lugar" name="" id=""><br>
            <label for="file" title="tamaño recomendado: 1200x1200">Foto</label>
            <input type="file" name="" id="" title="tamaño recomendado: 1200x1200">
            <div>
              <h4>¡Recuerda que mientras más completa sea la información, más sencillo será buscarlo!</h4>
              <p class="agregar_a_la_red">Agregar a la RED</p>
            </div>
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

.agregar_a_la_red {
  width: auto;
  color: white;
  background-color: #820263;
  border: solid 1px;
  border-color: #820263;
  border-radius: 100px;
  padding: 20px;
}
.agregar_a_la_red:hover {
  cursor: pointer;
}

</style>