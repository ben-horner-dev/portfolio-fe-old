<style lang="css">
</style>

<script lang="ts">
  export let styles: Record<string, string> = {}
  let styleString = Object.entries(styles)
    .map(([key, value]) => `${key}: ${value}`)
    .join('; ')
</script>

<main>
  <div class="snap-section" style={styleString}>
    <slot />
  </div>
</main>
