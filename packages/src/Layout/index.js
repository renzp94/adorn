/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import Layout from './Layout.svelte'
import Content from './Content.svelte'
import Footer from './Footer.svelte'
import Header from './Header.svelte'
import Sidebar from './Sidebar.svelte'
Layout["Content"] = Content
Layout["Footer"] = Footer
Layout["Header"] = Header
Layout["Sidebar"] = Sidebar

export { Layout }