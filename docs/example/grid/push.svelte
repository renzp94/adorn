<script>
  import { Row, Col } from 'adorn-ui'
</script>

<div class="push">
  <Row>
    <Col span={18} push={6}>col-18 col-push-6</Col>
    <Col span={6} pull={18}>col-6 col-pull-18</Col>
  </Row>
</div>

<style>
  .push :global(.adorn-col) {
    background-color: dodgerblue;
    height: 48px;
    line-height: 48px;
    margin-bottom: 12px;
    text-align: center;
    color: #fff;
  }

  .push :global(.adorn-col:nth-child(2n - 1)) {
    opacity: 0.8;
  }
</style>
