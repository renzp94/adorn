<script lang="ts">
  export let tag: string = 'article'
</script>

<svelte:element this={tag} {...$$props}>
  <slot />
</svelte:element>
