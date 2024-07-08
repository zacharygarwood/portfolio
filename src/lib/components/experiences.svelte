<script lang="ts">
    import { JOB_WEBSITES } from "$lib/constants"

    type Experience = {
      title: string
      start: string
      end: string
      href: string
    }
  
    const experiences: Experience[] = [
      { title: "Software Engineer @ Amazon", start: "Jan 2024", end: "Present", href: JOB_WEBSITES["amazon_freight"] },
      { title: "Software Engineer Intern @ AWS", start: "May 2022", end: " Aug 2022", href: JOB_WEBSITES["aws_proserve"] },
      { title: "Software Engineer Intern @ Principal", start: "May 2021", end: "Aug 2021", href: JOB_WEBSITES["principal"] },
      { title: "Teaching Assistant @ Iowa State University", start: "Jan 2021", end: "May 2021", href: JOB_WEBSITES["iowa_state"] },
    ]
  </script>
  
  <ul class="space-y-2 text-sm sm:text-base">
    {#each experiences as { title, start, end, href }}
      <li>
        <a
          {href}
          target="_blank"
          rel="noreferrer"
          class="clickable -mx-2 block rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
        >
          <div class="flex justify-between border-b border-dotted border-muted-foreground">
            <span>{title}</span>
            <span class="whitespace-nowrap text-left font-mono text-muted-foreground">{start} ~ {end}</span>
          </div>
        </a>
      </li>
    {/each}
  </ul>