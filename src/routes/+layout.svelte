<script>
	import '../app.css';
	import Header from "$lib/components/header.svelte";
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="mx-auto flex min-h-screen max-w-2xl flex-col px-5 md:px-0">
	<Header />
	<slot></slot>
	<Footer />
</div>
