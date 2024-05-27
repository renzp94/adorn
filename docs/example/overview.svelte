<script>
  import { Input } from 'adorn-ui'
  import components from '../components/config'

  let search = $state('')
  let list = $derived.by(() => {
    const componentList = components.map(item => ({...item}))
    if(search){
      return componentList.filter(item => {
        item.items = item.items.filter(child => child.text.toLowerCase().includes(search.toLowerCase()))
        return item.items.length > 0
      })
    }

    return components
  })
</script>

<Input bind:value={search} placeholder="搜索组件" size="large" />
{#each list  as item }
  <div class="block">
    <div class="block-title">
      <span class="block-title__text">{item.text}</span>
      <span class="block-title__count">{item.items.length}</span>
    </div>
    <div class="block-content">
      {#each item.items as component}
        <a class="card" href={component.link}>
          <div class="card-title">{component.text}</div>
        </a>
      {/each}
    </div>
  </div>
{/each}

<style>
  .block{
    margin-top: 12px;
  }

  .block-title{
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .block-title__text {
    font-size: 24px;
    font-weight: bold;
    margin-right: 8px;
  }

  .block-title__count{
    border: 1px solid #e8e8e8;
    background-color: #fafafa;
    border-radius: 4px;
    height: 24px;
    min-width: 24px;
    text-align: center;
    font-size: 12px;
  }

  .block-content{
    display: grid;
    grid-template-columns: calc(25% - 6px) calc(25% - 6px) calc(25% - 6px) calc(25% - 6px);
    gap: 8px;
  }

  .card{
    display: block;
    margin-bottom: 8px;
    padding: 8px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    text-decoration: none;
    color: inherit;
    transition: all .3s;
  }

  .card:hover{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    cursor: pointer;
  }

  .card-title{
    font-size: 12px;
    font-weight: bold;
  }
</style>