<script>
  import { Row, Col, Divider } from 'adorn-ui'
</script>

<div class="gutter">
  <Row gutter={16}>
    <Col className="gutter-row" span={6}>
      <div>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div>col-6</div>
    </Col>
  </Row>
  <Divider orientation="left">Vertical</Divider>
  <Row gutter={[16, 24]}>
    <Col className="gutter-row" span={6}>
      <div>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div>col-6</div>
    </Col>
  </Row>
</div>

<style>
  .gutter :global(.adorn-col div) {
    background-color: dodgerblue;
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: #fff;
  }
</style>
