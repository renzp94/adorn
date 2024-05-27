<script>
  import { Button } from 'adorn-ui'
  let loadings = $state([false, false, false])

  const onClick = index => {
    loadings[index] = !loadings[index]
    loadings = [...loadings]

    setTimeout(() => {
      loadings[index] = !loadings[index]
      loadings = [...loadings]
    }, 6000)
  }
</script>

<p>
  <Button loading>loading</Button>
  <Button type="primary" loading ghost>loading</Button>
  <Button type="primary" loading ghost danger>loading</Button>
  <Button type="primary" loading>loading</Button>
  <Button type="primary" size="small" icon="cloud-fill" loading>loading</Button>
  <Button type="primary" icon="cloud-fill" loading />
</p>

<p>
  <Button type="primary" onclick={() => onClick(0)} loading={loadings[0]}
    >loading</Button
  >
  <Button
    type="primary"
    size="small"
    icon="cloud-fill"
    onclick={() => onClick(1)}
    loading={loadings[1]}>loading</Button
  >
  <Button
    type="primary"
    icon="cloud-fill"
    onclick={() => onClick(2)}
    loading={loadings[2]}
  />
</p>
