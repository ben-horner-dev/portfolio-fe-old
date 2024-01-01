<style lang="css">
  .container {
    background-size: cover;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(8, 122, 217, 0.8), rgba(8, 122, 217, 0.6)),
      url(/assets/images/hero.png);
    background-position: center no-repeat;
    overflow-y: hidden;
    margin: auto;
    align-items: center;
    display: flex;
  }
</style>

<script lang="ts">
</script>

<main>
  <div class="container snap-section">
    <slot />
  </div>
</main>
