<template>
  <main id="page-not-found">
    <h1 class="page-not-found-header">Oh no, page not found...</h1>
    <p class="page-not-found-error">404 error</p>
    <a @click="$router.go(-1)" class="page-not-found-link" aria-label="Back " title="Back">Back</a>
  </main>
</template>

<script>
  
  export default {
    name: "Error"
  }

</script>