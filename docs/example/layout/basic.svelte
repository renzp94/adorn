<script>
  import { Layout } from 'adorn-ui'
  const { Header, Content, Footer, Sidebar } = Layout
</script>

<div class="basic">
  <p>
    <Layout>
      <Header class="header">Header</Header>
      <Content class="content">Content</Content>
      <Footer class="footer">Footer</Footer>
    </Layout>
  </p>
  <p>
    <Layout>
      <Header class="header">Header</Header>
      <Layout>
        <Sidebar class="sidebar">Sidebar</Sidebar>
        <Content class="content">Content</Content>
      </Layout>
      <Footer class="footer">Footer</Footer>
    </Layout>
  </p>
  <p>
    <Layout>
      <Header class="header">Header</Header>
      <Layout>
        <Content class="content">Content</Content>
        <Sidebar class="sidebar">Sidebar</Sidebar>
      </Layout>
      <Footer class="footer">Footer</Footer>
    </Layout>
  </p>
  <p>
    <Layout>
      <Sidebar class="sidebar">Sidebar</Sidebar>
      <Layout>
        <Header class="header">Header</Header>
        <Content class="content">Content</Content>
        <Footer class="footer">Footer</Footer>
      </Layout>
    </Layout>
  </p>
</div>

<style>
  .basic :global(.header) {
    text-align: center;
    color: #fff;
    background-color: #7dbcea;
  }

  .basic :global(.content) {
    text-align: center;
    min-height: 120px;
    line-height: 120px;
    color: #fff;
    background-color: #108ee9;
  }

  .basic :global(.sidebar) {
    text-align: center;
    line-height: 120px;
    width: 200px;
    color: #fff;
    background-color: #3ba0e9;
  }
  .basic :global(.footer) {
    text-align: center;
    color: #fff;
    background-color: #7dbcea;
  }
</style>
