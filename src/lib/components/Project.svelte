<script>
    export let path;
    export let title;
    export let description;
</script>

<div>
    <h1><a href={path} class="title">{title}</a></h1>
    <p>{description}</p>
</div>

<style>
    .title {
        color: inherit;
    }
</style>
