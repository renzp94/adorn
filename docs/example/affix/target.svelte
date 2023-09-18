<script>
  import { Affix, Button } from 'adorn-ui'
</script>

<div class="affix-container">
  <Affix offset={80} target=".affix-container">
    <Button type="primary">Target container</Button>
  </Affix>
</div>

<style>
  .affix-container {
    text-align: center;
    height: 400px;
    border-radius: 4px;
    background: #f0f0f0;
  }
</style>
