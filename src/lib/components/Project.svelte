<script>
    export let path;
    export let title;
    export let description;
</script>

<div>
    <h1><a href={path}>{title}</a></h1>
    <p>{description}</p>
</div>

<style>
    a {
        color: inherit;
    }
    .tags {
        font-size: .75rem;
        font-weight: normal;
    }
</style>
