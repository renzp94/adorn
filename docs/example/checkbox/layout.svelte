<script>
  import { Checkbox, Row, Col } from 'adorn-ui'

  const onChange = v => {
    console.log(v)
  }
</script>

<Checkbox.Group style={{ width: '100%' }} on:change={onChange}>
  <Row>
    <Col span={8}>
      <Checkbox value="A">A</Checkbox>
    </Col>
    <Col span={8}>
      <Checkbox value="B">B</Checkbox>
    </Col>
    <Col span={8}>
      <Checkbox value="C">C</Checkbox>
    </Col>
    <Col span={8}>
      <Checkbox value="D">D</Checkbox>
    </Col>
    <Col span={8}>
      <Checkbox value="E">E</Checkbox>
    </Col>
  </Row>
</Checkbox.Group>
