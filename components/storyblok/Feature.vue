<template>
  <div v-editable="blok">
    <h1 class="text-xl">{{ blok.name }}</h1>
  </div>
</template>

<script>
export default {
  props: ['blok'],
};
</script>
