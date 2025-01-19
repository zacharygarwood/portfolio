class Navbar extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div>
            <nav>
                <div>
                    <a href="/" class="active">Zachary Garwood</a>
                    <a href="/til" class="">Today I Learned</a>
                    <a href="/projects" class="">Projects</a>
                    <a href="/ex" class="">Experience</a>
                </div>
                <div id="theme-toggle">
                    <div id="theme-icon"></div>
                </div>
            </nav>
        </div>
        `;

        this.initThemeToggle();
        this.setActiveNavLink();
    }
  
    initThemeToggle() {
        const themeToggle = this.querySelector("#theme-toggle");
        const themeIcon = this.querySelector("#theme-icon");
        const svgValues = {
            dark: `
                <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-moon">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </svg>
                `,
            light: `
                <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-sun">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                </svg>
            `
        }

        updateTheme(getSystemColorScheme());

        themeToggle.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
            updateTheme(newTheme);
        });

        function updateTheme(theme) {
            themeIcon.innerHTML = theme === 'dark' ? svgValues.light : svgValues.dark;
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }

        function getSystemColorScheme() {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
            return 'light';
        }
    }

    setActiveNavLink() {
        const currentPath = window.location.pathname;
        const navLinks = this.querySelectorAll("nav a");

        console.log(currentPath)
        
        navLinks.forEach(link => {
            const path = link.getAttribute("href")
            if (path === currentPath || path + '/' === currentPath) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }
}

customElements.define('navbar-component', Navbar);