<template>
  <div id="mini_carrito">
    <h2 id="titulo_carrito">Carrito de Compras</h2>
    <hr>
    <div v-for="(item,index) in shoppingCart" v-bind:key="index">
      <span class="item_remove" v-on:click="removeItem(index)">x</span>
      <span class="item_text">{{item["name"]}}</span>
      <div class="quantity_selector">
        <input class="push-pop-items" type="submit" name="pop" value="-" v-on:click="popItem(index)">
        <input class="item_quantity" type="number" v-bind:value="item['quantity']" readonly min="1">
        <input class="push-pop-items" type="submit" name="push" value="+" v-on:click="pushItem(index)">
      </div>
      <span class="item-price"> {{item["price"]}}</span>
    </div>
    <hr v-if="orderDisable">

    <div id="summary-order" v-if="orderDisable">
      <span id="total_price">Total: ${{total}}</span>
      <input id="order_submit" type="submit" value="Comprar" v-on:click="orderCart()">
    </div>
  </div>
</template>

<script>
export default {
  name: "minicarrito",
  props: ['newItem'],
  data() {
    return {
      shoppingCart: [],
      total: 0,
    }
  },
  computed: {
    orderDisable() {
      return this.total !== 0;
    }
  },
  watch: {
    newItem: function (item) {
      this.addShoppingCart(item);
    },
    shoppingCart: function (items) {
      let subtotal = 0;
      items.forEach(item => subtotal += item ["subtotal"])
      this.total = subtotal;
      },
    },
  methods: {
    addShoppingCart(newItem) {
      let foundItem = this.shoppingCart.find((itemCart,index) => {
        if (itemCart.name === newItem.name) {
          this.shoppingCart[index]["quantity"] += 1;
          this.shoppingCart[index]["subtotal"] += Number(this.shoppingCart[index]["price"]);
          this.$forceUpdate()
          //this.shoppingCart.sort();
          return true;
        }
      })
      if (foundItem === undefined) {
        newItem.quantity = 1;
        newItem.subtotal = Number(newItem["price"]);
        this.shoppingCart.push(newItem);
      }
    },
    pushItem(index) {
      this.shoppingCart[index]["quantity"]++;
      this.shoppingCart[index]["subtotal"]+= Number(this.shoppingCart[index]["price"]);
      this.shoppingCart.sort();
      },
    popItem(index) {
      if (this.shoppingCart[index]["quantity"] > 1) {
        this.shoppingCart[index]["quantity"] --;
        this.shoppingCart[index]["subtotal"] -= Number(this.shoppingCart[index]["price"]);
        this.shoppingCart.sort();
      }
    },
    removeItem(index) {
      this.shoppingCart.splice(index, 1);
    },
    orderCart() {
      this.$router.push({
        name: "CheckOutRoute",
        params: {
          total: this.total,
          shoppingCart: this.shoppingCart
        }
      });
    }
  }
}
</script>

<style scoped>

#mini_carrito {
  background-color: cornflowerblue;
  color: #820263;
}
.item_remove {
  color: red
}
</style>