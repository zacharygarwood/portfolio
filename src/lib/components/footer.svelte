<script>
    import { Button } from "$lib/components/ui/button"
    import { PERSONAL_LINKS } from "$lib/constants"
    import { Github, Linkedin, Mail, StickyNote } from "lucide-svelte";
</script>

<footer class="-mx-4 mb-6 mt-12">
    <address class="flex items-center justify-center gap-1 not-italic sm:gap-6">
        <Button href={PERSONAL_LINKS["github"]} target="_blank" variant="ghost" class="px-3 text-zinc-500 dark:text-zinc-400">
            <Github class="mr-2 h-4 w-4" />
            GitHub
        </Button>
        <Button href={PERSONAL_LINKS["linkedin"]} target="_blank" variant="ghost" class="px-3 text-zinc-500 dark:text-zinc-400">
            <Linkedin class="mr-2 h-4 w-4" />
            LinkedIn
        </Button>
        <Button href={PERSONAL_LINKS["email"]} target="_blank" variant="ghost" class="px-3 text-zinc-500 dark:text-zinc-400">
            <Mail class="mr-2 h-4 w-4" />
            Email
        </Button>
        <Button href={PERSONAL_LINKS["resume"]} target="_blank" variant="ghost" class="px-3 text-zinc-500 dark:text-zinc-400">
            <StickyNote class="mr-2 h-4 w-4" />
            Resume
        </Button>
    </address>
</footer>