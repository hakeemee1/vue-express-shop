<template>
  <div class="hello">
    <Slider />

    <div class="mt-10 mx-10">
      <v-row>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </v-row>
    </div>
  </div>
</template>

<script>
const CardItem = () => import("../components/CardItem.vue");
const Slider = () => import("../components/SliderPromo.vue");
export default {
  components: {
    CardItem,
    Slider,
  },
};
</script>

<style>
</style>