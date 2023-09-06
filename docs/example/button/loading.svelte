<script>
  import { Button } from 'adorn-ui'
  let loadings = [false, false, false]

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
  <Button type="primary" loading>loading</Button>
  <Button type="primary" size="small" icon="cloud-fill" loading>loading</Button>
  <Button type="primary" icon="cloud-fill" loading />
</p>

<p>
  <Button type="primary" on:click={() => onClick(0)} loading={loadings[0]}
    >loading</Button
  >
  <Button
    type="primary"
    size="small"
    icon="cloud-fill"
    on:click={() => onClick(1)}
    loading={loadings[1]}>loading</Button
  >
  <Button
    type="primary"
    icon="cloud-fill"
    on:click={() => onClick(2)}
    loading={loadings[2]}
  />
</p>
