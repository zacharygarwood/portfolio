<script>
    import { onDestroy, onMount } from "svelte";
    import { goto } from "$app/navigation";

    let activeLink;

    const setActiveLink = (link) => {
        activeLink = link;
    };

    onMount(() => {
        setActiveLink("/");
    });

    onDestroy(() => {
        activeLink = undefined;
    });

    const navigateTo = (link) => {
        goto(link);
        setActiveLink(link);
    };
</script>


<nav>
    <a
        href="/"
        class:active={activeLink === "/"}
        on:click={() => navigateTo("/")}
        >
        Home
    </a>
    <a
        href="/projects"
        class:active={activeLink === "/projects"}
        on:click={() => navigateTo("/projects")}
        >
        Projects
    </a>
    <a
        href="/work"
        class:active={activeLink === "/work"}
        on:click={() => navigateTo("/work")}
        >
        Work
    </a>
</nav>


<style>
    nav {
        display: flex;
        flex-wrap: wrap;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-size: 1.5rem;
        position: relative;
        margin-right: 1rem;
    }

    a::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background-color: #333;
        transform: scaleX(0);
        transition: transform 0.3s ease;
        transform-origin: left;
    }

    a.active::after,
    a:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
</style>
