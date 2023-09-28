<script>
  import { Input, Space } from 'adorn-ui'

  let loading = false
  const onSearch = () => {
    loading = true
    setTimeout(() => {
      loading = false
    }, 2000)
  }
</script>

<Space direction="vertical" style="width: 100%;">
  <Input.Search
    placeholder="input search text"
    style="width: 200px;"
    {loading}
    on:search={onSearch}
  />
  <Input.Search
    placeholder="input search text"
    allowClear
    style="width: 200px;"
    {loading}
    on:search={onSearch}
  />
  <Input.Search
    placeholder="input search text"
    allowClear
    style="width: 304px;"
    {loading}
    on:search={onSearch}
  >
    <span slot="addonBefore">https://</span>
  </Input.Search>
  <Input.Search
    placeholder="input search text"
    {loading}
    on:search={onSearch}
    enterButton
  />
  <Input.Search
    placeholder="input search text"
    allowClear
    enterButton="Search"
    size="large"
    {loading}
    on:search={onSearch}
  />
  <Input.Search
    placeholder="input search text"
    enterButton="Search"
    size="large"
    {loading}
    on:search={onSearch}
  />
  <Input.Search
    placeholder="input search text"
    allowClear
    style="width: 304px;"
    {loading}
    on:search={onSearch}
  />
  <Input.Search
    placeholder="input search text"
    allowClear
    style="width: 304px;"
    {loading}
    on:search={onSearch}
  >
    <span slot="addonBefore">https://</span>
  </Input.Search>
</Space>
