<style lang="css">
</style>

<script lang="ts">
  import { GithubIcon, LinkedInIcon } from 'atoms'
  import { CenteredElements } from 'molecules'
  import { SnapSection } from 'organisms'
  let style = {
    width: '100%',
    height: '50vh',
    'background-color': 'white',
    'overflow-y': 'hidden',
    margin: 'auto',
    'align-items': 'center',
    display: 'flex'
  }
</script>

<main id="footer">
  <SnapSection styles={style}>
    <CenteredElements>
      <a href="https://github.com/ben-horner-dev/portfolio" target="_blank"
        ><GithubIcon /></a
      >
      <a href="https://www.linkedin.com/in/ben-horner-dev/" target="_blank"
        ><LinkedInIcon /></a
      >
    </CenteredElements>
  </SnapSection>
</main>
