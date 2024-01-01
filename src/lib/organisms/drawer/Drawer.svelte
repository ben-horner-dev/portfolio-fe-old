<style>
  .drawer-false {
    transform: translateX(-100%);
  }
  .drawer-true {
    transform: translateX(0);
  }

  .drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    z-index: 9999;
    background-color: white;
    transition: transform 0.3s ease-out;
    color: #326cb7;
    opacity: 0.9;
    overflow-x: hidden;
  }
</style>

<script lang="ts">
  import { openDrawer } from 'stores'
  let drawerClass = `drawer drawer-${$openDrawer}`

  $: {
    drawerClass = `drawer drawer-${$openDrawer}`
  }
</script>

<div class={drawerClass} data-testid="drawer-links">
  <slot />
</div>
