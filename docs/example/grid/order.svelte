<script>
  import { Row, Col } from 'adorn-ui'
</script>

<div class="order">
  <Row>
    <Col span={6} order={4}>1 col-order-4</Col>
    <Col span={6} order={3}>2 col-order-3</Col>
    <Col span={6} order={2}>3 col-order-2</Col>
    <Col span={6} order={1}>4 col-order-1</Col>
  </Row>
</div>

<style>
  .order :global(.adorn-col) {
    background-color: dodgerblue;
    height: 48px;
    line-height: 48px;
    margin-bottom: 12px;
    text-align: center;
    color: #fff;
  }

  .order :global(.adorn-col:nth-child(2n - 1)) {
    opacity: 0.8;
  }
</style>
