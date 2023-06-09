<script>
    import { onDestroy, onMount } from "svelte";
    import { goto } from "$app/navigation";

    let activeLink;

    const setActiveLink = (link) => {
        activeLink = link;
        localStorage.setItem("activeLink", link); // Store the active link in local storage
    };

    onMount(() => {
        const storedLink = localStorage.getItem("activeLink");
        setActiveLink(storedLink || "/");
    });

    onDestroy(() => {
        activeLink = undefined;
    });

    const navigateTo = (link) => {
        goto(link);
        setActiveLink(link);
    };
</script>

<header>
    <nav>
        <ul>
            <li>
                <a
                    href="/"
                    class:active={activeLink === "/"}
                    on:click={() => navigateTo("/")}
                >
                    Home
                </a>
            </li>
            <li>
                <a
                    href="/projects"
                    class:active={activeLink === "/projects"}
                    on:click={() => navigateTo("/projects")}
                >
                    Projects
                </a>
            </li>
            <li>
                <a
                    href="/work"
                    class:active={activeLink === "/work"}
                    on:click={() => navigateTo("/work")}
                >
                    Work
                </a>
            </li>
            <li>
                <a
                    href="/contact"
                    class:active={activeLink === "/contact"}
                    on:click={() => navigateTo("/contact")}
                >
                    Contact
                </a>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        display: flex;
        flex-wrap: wrap;
    }

    ul {
        list-style-type: none;
        display: flex;
        gap: 1rem;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-size: 1.5rem;
        position: relative;
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
