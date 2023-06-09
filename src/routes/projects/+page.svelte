<script>
    import Project from '$lib/components/Project.svelte';
    export let data
</script>
    
{#each data.projects as project}
    <Project title={project.meta.title} tags={project.meta.tags} description={project.meta.description} />
{/each}