<script>
    const projects = [
        { src: "/assets/mafs.mp4", href: "https://github.com/zacharygarwood/Minecraft-as-File-Storage", size: "regular" },
        { src: "/assets/flounder.mp4", href: "https://github.com/zacharygarwood/Flounder", size: "large" },
        { src: "/assets/edge-detection.mp4", href: "https://github.com/zacharygarwood/edge_detection", size: "regular" },
    ]
</script>   

<div class="grid grid-cols-3 gap-4">
    {#each projects as project}
        <a href={project.href} target="_blank" rel="noreferrer" class="{project.size === 'large' ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'} relative">
            <video class="rounded-lg w-full h-full object-cover hover:outline" muted autoplay loop>
                <source src={project.src} type="video/mp4">
            </video>
        </a>
    {/each}
</div>