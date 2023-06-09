<script>
    import Project from '$lib/components/Project.svelte';
    export let data
</script>
    
{#each data.projects as project}
    <Project imageUrl={project.meta.thumbnail} title={project.meta.title} tags={project.meta.tags} />
{/each}