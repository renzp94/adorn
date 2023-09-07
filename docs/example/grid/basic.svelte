<script>
  import { Row, Col } from 'adorn-ui'
</script>

<div class="basic">
  <Row>
    <Col span={24}>col</Col>
  </Row>
  <Row>
    <Col span={12}>col-12</Col>
    <Col span={12}>col-12</Col>
  </Row>
  <Row>
    <Col span={8}>col-8</Col>
    <Col span={8}>col-8</Col>
    <Col span={8}>col-8</Col>
  </Row>
  <Row>
    <Col span={6}>col-6</Col>
    <Col span={6}>col-6</Col>
    <Col span={6}>col-6</Col>
    <Col span={6}>col-6</Col>
  </Row>
</div>

<style>
  .basic :global(.adorn-col) {
    background-color: dodgerblue;
    height: 48px;
    line-height: 48px;
    margin-bottom: 12px;
    text-align: center;
    color: #fff;
  }

  .basic :global(.adorn-col:nth-child(2n - 1)) {
    opacity: 0.8;
  }
</style>
