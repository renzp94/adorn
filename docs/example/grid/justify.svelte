<script>
  import { Row, Col, Divider } from 'adorn-ui'
</script>

<div class="justify">
  <Divider orientation="left">sub-element align left</Divider>
  <Row justify="start">
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
  </Row>

  <Divider orientation="left">sub-element align center</Divider>
  <Row justify="center">
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
  </Row>

  <Divider orientation="left">sub-element align right</Divider>
  <Row justify="end">
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
  </Row>

  <Divider orientation="left">sub-element monospaced arrangement</Divider>
  <Row justify="space-between">
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
  </Row>

  <Divider orientation="left">sub-element align full</Divider>
  <Row justify="space-around">
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
  </Row>

  <Divider orientation="left">sub-element align evenly</Divider>
  <Row justify="space-evenly">
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
  </Row>
</div>

<style>
  .justify :global(.adorn-col) {
    background-color: dodgerblue;
    height: 48px;
    line-height: 48px;
    margin-bottom: 12px;
    text-align: center;
    color: #fff;
  }

  .justify :global(.adorn-col:nth-child(2n - 1)) {
    opacity: 0.8;
  }
</style>
