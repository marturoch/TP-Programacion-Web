<template>
  <div id="nosotros">
    <h1>Nosotros</h1>
    <div id="info-main">
    <h3 class="info-main-h3">{{info1}}</h3>
    <h2 class="info-main-h2">{{info2}}</h2>
    <h3 class="info-main-h3">{{info3}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data () {
    return {
      info1:"DogCare asegura la salud y el cuidado de tu perro. Está dirigido a aquellas personas que cuidan a sus mascotas y quieren estar cubiertos ante cualquier imprevisto que pueda ocurrirle",
      info2:"¡Cuidá a tu mejor amigo como él se lo merece, Aseguralo en DogCare!",
      info3:"Es decir, si un accidente le ocurriera a tu mascota, vos y tu familia disponen de los medios necesarios para hacer frente a cualquier tipo de intervención por parte de un médico veterinario. También, ante una lamentable pérdida de la mascota, este seguro posibilita obtener una indemnización para adoptar otro animal."
    }
  }

}

</script>

<style scoped>
@import "../assets/css/main.css";

</style>

