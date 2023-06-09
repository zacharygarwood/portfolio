<script>
    export let data;
</script>

<div>
    <h1>{data.title}</h1>
    <p>{data.date}</p>
    <p>Tags: {data.tags}</p>
    <svelte:component this={data.content} />
</div>

