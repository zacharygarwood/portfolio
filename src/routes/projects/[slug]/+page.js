export async function load({ params }) {
  const project = await import(`../${params.slug}.md`)
  const { title, tags } = project.metadata
  const content = project.default

  return {
    content,
    title,
    tags,
  }
}