<template>
  <div>
    <div id="order_online_view">
      <PedidoProductos
        v-on:pushItem="item = $event"
      />
      <minicarrito v-bind:newItem="item"></minicarrito>
    </div>
  </div>
</template>

<script>
import PedidoProductos from "../components/PedidoProductos";
import minicarrito from "../components/minicarrito";
export default {
  name: "PedidosView",
  components: {
    PedidoProductos,
    minicarrito
  },
  data() {
    return {
      item: {}
    }
  }
}

</script>

<style scoped>

</style>