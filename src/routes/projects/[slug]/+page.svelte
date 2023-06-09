<script>
    export let data;
</script>

<article>
    <h1>{ data.title }</h1>
    <h2>{ data.tags }</h2>
    <svelte:component this={data.content} />
</article>