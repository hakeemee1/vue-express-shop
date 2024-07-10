<template>
  <div class="hello">
    <Slider />

    <div>
      <CardItem />
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