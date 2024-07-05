<script>
    const projects = [
        { image: "/assets/flounders-best-game.gif", href: "https://github.com/zacharygarwood/Flounder", size: "regular" },
        { image: "/assets/flounders-best-game.gif", href: "https://github.com/zacharygarwood/Flounder", size: "large" },
        { image: "/assets/flounders-best-game.gif", href: "https://github.com/zacharygarwood/Flounder", size: "regular" },
    ]
</script>   

<div class="grid grid-cols-3 gap-4">
    {#each projects as project, index}
        <a href={project.href} target="_blank" rel="noreferrer" class="{project.size === 'large' ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'} relative">
            <img src={project.image} alt="Image" class="rounded-lg w-full h-auto hover:outline">
        </a>
    {/each}
</div>