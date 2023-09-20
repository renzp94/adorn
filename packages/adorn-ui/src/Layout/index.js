import Component from './Layout.svelte'
import Content from './Content.svelte'
import Footer from './Footer.svelte'
import Header from './Header.svelte'
import Sidebar from './Sidebar.svelte'

const Layout = Object.assign(
  Component,
  {
    Content,
    Footer,
    Header,
    Sidebar
  }
)

export { Layout }