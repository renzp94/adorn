<script>
  import { Row, Col, Divider } from 'adorn-ui'
</script>

<div class="flex">
  <Divider orientation="left">Percentage columns</Divider>
  <Row>
    <Col flex={2}>2 / 5</Col>
    <Col flex={3}>3 / 5</Col>
  </Row>
  <Divider orientation="left">Fill rest</Divider>
  <Row>
    <Col flex="100px">100px</Col>
    <Col flex="auto">Fill Rest</Col>
  </Row>
  <Divider orientation="left">Raw flex style</Divider>
  <Row>
    <Col flex="1 1 200px">1 1 200px</Col>
    <Col flex="0 1 300px">0 1 300px</Col>
  </Row>

  <Row wrap={false}>
    <Col flex="none">
      <div style:padding="0 16px">none</div>
    </Col>
    <Col flex="auto">auto with no-wrap</Col>
  </Row>
</div>

<style>
  .flex :global(.adorn-col) {
    background-color: dodgerblue;
    height: 48px;
    line-height: 48px;
    margin-bottom: 12px;
    text-align: center;
    color: #fff;
  }

  .flex :global(.adorn-col:nth-child(2n - 1)) {
    opacity: 0.8;
  }
</style>
