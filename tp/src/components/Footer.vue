<template>
  <div class="footer">
    <h4>DIRECCIÓN</h4>
    <iframe :src="mapa" width="350" height="250" style="border-radius: 12px;" allowfullscreen="" loading="lazy"></iframe>
    <h4 class="datos-contacto">DATOS DE CONTACTO</h4>
    <h5 class="datos-contacto">{{tel}}</h5>
    <a href=""><h5 class="datos-contacto" >dogcare@gmail.com</h5></a>
    <p>
      <a href="https://www.facebook.com/" target="_blank"><img src="../assets/img/botones/facebook.png" width="50px" style="float:right;"></a>
      <a href="https://www.instagram.com/" target="_blank"><img src="../assets/img/botones/instagram.png" width="50px" style="float:right;"></a>
      <a href="https://wa.me/+5492804207539" target="_blank"><img src="../assets/img/botones/whatsapp.png" width="50px" style="float:right;"></a>
    </p><br>
    <h4>© 2021 DOG CARE Todos los derechos reservados | Términos de uso y compromiso de privacidad</h4>
  </div>
</template>

<script>
export default {
  name: "Footer.vue",
  data(){
    return{
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.6682059414525!2d-58.44627418477141!3d-34.561955280470414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5c90d9b3451%3A0x42d466864c82ab80!2sAv.%20del%20Libertador%205490%2C%20C1425AAC%20CABA!5e0!3m2!1ses-419!2sar!4v1635833623664!5m2!1ses-419!2sar",
      tel: "+5491131574492"
    }
  }
}
</script>

<style scoped>
@import "../assets/css/Footer.css";
</style>