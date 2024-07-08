<script>
    import { Sun, Moon } from 'lucide-svelte';
    import { Button } from "$lib/components/ui/button"

    let themeIcon = false
    function toggleTheme() {
        themeIcon = !themeIcon;
        document.documentElement.classList.add("no-transition")
        const isDark = document.documentElement.classList.toggle("dark")
        window.localStorage.setItem("theme", isDark ? "dark" : "light")
    
        setTimeout(() => document.documentElement.classList.remove("no-transition"), 100)
    }
</script>

<header class="mt-6 md:mt-16">
    <nav class="flex items-center justify-between">
        <h1 class="font-medium">Zachary Garwood</h1>
        <Button on:click={toggleTheme} class="outline" size="icon">
            {#if themeIcon}
                <Moon class="h-4 w-4" />
            {:else}
                <Sun class="h-4 w-4" />
            {/if}
        </Button>
    </nav>
</header>