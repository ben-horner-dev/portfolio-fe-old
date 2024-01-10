<style lang="css">
  * :global(.contact-btn) {
    margin-top: 20px !important;
    border: 1px solid #ffffff !important;
    font-weight: 700 !important;
    background-color: transparent;
    color: #ffffff !important;
    text-transform: none;
  }
</style>

<script lang="ts">
  import Button from '@smui/button'
  let btnClass = 'contact-btn'
  const handleMouseOver = () => {
    btnClass = 'animate__animated contact-btn animate__headShake'
  }

  const handleAnimationEnd = () => {
    btnClass = 'contact-btn'
  }
</script>

<main>
  <Button
    class={btnClass}
    href="#footer"
    on:mouseover={handleMouseOver}
    on:animationend={handleAnimationEnd}>Contact</Button
  >
</main>
