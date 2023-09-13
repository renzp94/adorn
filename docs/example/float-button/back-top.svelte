<script>
  import { FloatButton } from 'adorn-ui'
  import FloatButtonIframe from '../FloatButtonIframe.svelte'

  let scrollEl
</script>

<FloatButtonIframe>
  <div class="scroll">
    <FloatButton.BackTop target={scrollEl} />
    <div class="scroll-container" bind:this={scrollEl}>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
      <h1>asdasdas</h1>
    </div>
  </div>
</FloatButtonIframe>

<style>
  .scroll {
    position: relative;
  }

  .scroll-container {
    height: 368px;
    overflow-y: auto;
  }

  .scroll :global(.adorn-float-btn) {
    position: absolute !important;
  }
</style>
