<script>
    export let imageUrl;
    export let title;
    export let tags;
</script>

<div class="image-container">
    <div class="info">
        <h2>{title}</h2>
        <h5 class="tags">{tags}</h5>
    </div>
    <img src={imageUrl} alt={title} class="image" />
</div>

<style>
    .image-container {
        display: grid;
        grid-template-columns: auto;
        grid-gap: 20px; /* Specify the desired gap between items */
        margin-bottom: 20px;
    }

    .image {
        max-width: 300px; /* Fixed width */
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
    }

    .info {
        margin-top: 10px;
    }

    .tags {
        margin-top: 5px;
    }
</style>
  