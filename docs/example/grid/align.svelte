<script>
  import { Row, Col, Divider } from 'adorn-ui'
</script>

<div class="align">
  <Divider orientation="left">Align Top</Divider>
  <Row justify="center" align="top">
    <Col span={4}>
      <div class="h-100">col-4</div>
    </Col>
    <Col span={4}>
      <div class="h-50">col-4</div>
    </Col>
    <Col span={4}>
      <div class="h-120">col-4</div>
    </Col>
    <Col span={4}>
      <div class="h-80">col-4</div>
    </Col>
  </Row>

  <Divider orientation="left">Align Middle</Divider>
  <Row justify="space-around" align="middle">
    <Col span={4}>
      <div class="h-100">col-4</div>
    </Col>
    <Col span={4}>
      <div class="h-50">col-4</div>
    </Col>
    <Col span={4}>
      <div class="h-120">col-4</div>
    </Col>
    <Col span={4}>
      <div class="h-80">col-4</div>
    </Col>
  </Row>

  <Divider orientation="left">Align Bottom</Divider>
  <Row justify="space-between" align="bottom">
    <Col span={4}>
      <div class="h-100">col-4</div>
    </Col>
    <Col span={4}>
      <div class="h-50">col-4</div>
    </Col>
    <Col span={4}>
      <div class="h-120">col-4</div>
    </Col>
    <Col span={4}>
      <div class="h-80">col-4</div>
    </Col>
  </Row>
</div>

<style>
  .align :global(.adorn-col div) {
    background-color: dodgerblue;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .align :global(.adorn-col:nth-child(2n - 1)) {
    opacity: 0.8;
  }

  .h-50 {
    height: 50px;
  }
  .h-80 {
    height: 80px;
  }
  .h-100 {
    height: 100px;
  }
  .h-120 {
    height: 120px;
  }
</style>
