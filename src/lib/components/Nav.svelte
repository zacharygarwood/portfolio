<header>
    <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/work">Work</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
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
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background-color: #333;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    a:hover::after {
        transform: scaleX(1);
    }
</style>
