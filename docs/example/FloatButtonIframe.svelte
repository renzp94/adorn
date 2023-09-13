<div class="iframe">
  <div class="header">
    <div class="close" />
    <div class="mini" />
    <div class="full" />
    <div class="url" />
  </div>
  <div class="main">
    <slot />
  </div>
</div>

<style>
  .iframe {
    position: relative;
    height: 400px;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
  }

  .header {
    height: 32px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    background-color: #f4f4f4;
    padding: 4px 16px;
  }
  .main {
    height: 368px;
  }

  .close,
  .full,
  .mini {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    margin-right: 12px;
  }
  .close {
    background-color: red;
  }
  .full {
    background-color: lightgreen;
  }
  .mini {
    background-color: yellow;
  }

  .url {
    width: 100%;
    height: 20px;
    background-color: #fff;
    border-radius: 4px;
  }

  :global(.main > .adorn-float-btn, .main > .adorn-float-btn-group) {
    position: absolute !important;
  }
</style>
