<template>
  <layout></layout>
</template>

<script lang="ts">

  import Vue from 'vue'

  import Layout from "./page/layout/index.vue"

  export default Vue.extend({
    components: {
      "layout": Layout
    }
  })

</script>