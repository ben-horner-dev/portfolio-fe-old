<style lang="css">
  .full-screen-text {
    display: block;
  }

  @media (max-width: 815px) {
    .full-screen-text {
      display: none !important;
    }
  }
</style>

<script lang="ts">
  const FULL_SCREEN_SITE_TEXT = `
      I am a full stack developer with a mission to create elegant apps 
      that are reliable, maintainable and scalable. 
      My stack of choice is Flask, FastApi or Django for the backend, 
      React or Svelte plus Typescript for the frontend with MySql, Postgres or MongoDB for the database but I am always learning new technologies.
      Please feel free to explore my previous work and contact me if you have any questions:
      `
</script>

<main>
  <div class="full-screen-text">{FULL_SCREEN_SITE_TEXT}</div>
</main>
