export async function load({ params }) {
  const project = await import(`../${params.slug}.md`)
  const { title, tags, date, link } = project.metadata
  const content = project.default

  return {
    content,
    title,
    tags,
    date,
    link,
  }
}