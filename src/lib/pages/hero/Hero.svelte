<style lang="css">
</style>

<script lang="ts">
  import { FullScreenBlurb, MobileBlurb, ShakeBtn, Title } from 'atoms'
  import { CenteredSlideDown } from 'molecules'
  import { SnapSection } from 'organisms'
  let style = {
    'background-size': 'cover',
    width: '100%',
    height: '100vh',
    'background-image':
      'linear-gradient(rgba(8, 122, 217, 0.8), rgba(8, 122, 217, 0.6)), url(/assets/images/hero.png)',
    'background-position': 'center no-repeat',
    'overflow-y': 'hidden',
    margin: 'auto',
    'align-items': 'center',
    display: 'flex'
  }
</script>

<main id="hero">
  <SnapSection styles={style}>
    <CenteredSlideDown>
      <Title />
      <FullScreenBlurb />
      <MobileBlurb />
      <ShakeBtn />
    </CenteredSlideDown>
  </SnapSection>
</main>
