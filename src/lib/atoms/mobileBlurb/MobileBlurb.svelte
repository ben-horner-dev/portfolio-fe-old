<style lang="css">
  .mobile-screen-text {
    display: none !important;
  }

  @media (max-width: 815px) {
    .mobile-screen-text {
      display: block !important;
    }
  }
</style>

<script lang="ts">
  const MOBILE_SCREEN_SITE_TEXT = `
      I am a full stack developer with a mission to create elegant apps 
      that are reliable, maintainable and scalable. 
      `
</script>

<main>
  <div class="mobile-screen-text">{MOBILE_SCREEN_SITE_TEXT}</div>
</main>
