<style>
  .app-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  img {
    width: 100px;
  }

  * :global(.icon) {
    display: none;
  }

  @media (max-width: 815px) {
    * :global(.icon) {
      background-color: transparent;
      display: block;
    }
  }
</style>

<script lang="ts">
  import IconButton from '@smui/icon-button'
  import { MenuItems } from 'molecules'
  import { Drawer, Links } from 'organisms'
  import { openDrawer } from 'stores'

  const handleWindowClick = () => {
    if ($openDrawer) {
      openDrawer.update(open => !open)
    }
  }
  const handleDrawerClick = (event: CustomEvent) => {
    event.stopPropagation()
    openDrawer.update(open => !open)
  }
</script>

<svelte:window on:click={handleWindowClick} />
<main>
  <Drawer>
    <MenuItems />
  </Drawer>
  <div class="app-bar">
    <img src="src/assets/images/logo.svg" alt="BH Dev" />
    <Links>
      <MenuItems />
    </Links>
    <IconButton class="material-icons icon" on:click={handleDrawerClick}>menu</IconButton>
  </div>
</main>
