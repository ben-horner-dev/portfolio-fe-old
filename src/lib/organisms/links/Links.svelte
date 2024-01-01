<style>
  .link-container {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 815px) {
    .link-container {
      display: none;
    }
  }
</style>

<script lang="ts">
</script>

<main>
  <div class="link-container" data-testid="nav-links">
    <slot />
  </div>
</main>
