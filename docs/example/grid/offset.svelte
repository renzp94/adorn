<script>
  import { Row, Col } from 'adorn-ui'
</script>

<div class="offset">
  <Row>
    <Col span={8}>col-8</Col>
    <Col span={8} offset={8}>col-8</Col>
  </Row>
  <Row>
    <Col span={6} offset={6}>col-6 col-offset-6</Col>
    <Col span={6} offset={6}>col-6 col-offset-6</Col>
  </Row>
  <Row>
    <Col span={12} offset={6}>col-12 col-offset-6</Col>
  </Row>
</div>

<style>
  .offset :global(.adorn-row) {
    margin-bottom: 12px;
  }

  .offset :global(.adorn-col) {
    background-color: dodgerblue;
    height: 48px;
    line-height: 48px;
    margin-bottom: 12px;
    text-align: center;
    color: #fff;
  }
</style>
