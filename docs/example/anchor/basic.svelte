<script>
  import { Anchor, Col, Row } from 'adorn-ui'
</script>

<Row>
  <Col offset={20}>
    <Anchor
      items={[
        {
          key: 'props-属性',
          href: '#props-属性',
          title: 'props-属性',
        },
        {
          key: 'events-事件',
          href: '#events-事件',
          title: 'events-事件',
        },
        {
          key: '何时使用',
          href: '#何时使用',
          title: '何时使用',
        },
      ]}
    />
  </Col>
</Row>

<style>
  :global(.adorn-anchor) {
    background-color: #fff;
  }
</style>
