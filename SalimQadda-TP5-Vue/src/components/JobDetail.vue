<script>
export default {
  name: "JobDetail",
  props: {
    travail: Object
  }
}
</script>
<template>
  <div>
    <p>{{ travail.description }}</p>
    <p>{{ travail.salaire }}</p>
    <p>{{ travail.date_de_creation}}</p>
  </div>
</template>

<style scoped>

</style>