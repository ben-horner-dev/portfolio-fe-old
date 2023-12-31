<style lang="css">
  .centered-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
  }

  @media (max-width: 815px) {
    .centered-text {
      width: 70vw;
    }
  }
</style>

<script lang="ts">
</script>

<main>
  <div class="centered-text">
    <div class="animate__animated animate__slideInDown">
      <slot />
    </div>
  </div>
</main>
