<style lang="css">
</style>

<script lang="ts">
  import { FullScreenBlurb, MobileBlurb, ShakeBtn, Title } from 'atoms'
  import { CenteredSlideDown } from 'molecules'
  import { SnapSection } from 'organisms'
</script>

<main>
  <SnapSection>
    <CenteredSlideDown>
      <Title />
      <FullScreenBlurb />
      <MobileBlurb />
      <ShakeBtn />
    </CenteredSlideDown>
  </SnapSection>
</main>
