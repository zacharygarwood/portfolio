<script>
    import Project from '$lib/components/Project.svelte';
    export let data
</script>
    
{#each data.projects as project}
    <Project path={project.path} title={project.meta.title} description={project.meta.description} />
{/each}