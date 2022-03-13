<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`,
				status
			}
		};
	}
</script>

<script>
	export let title;
	export let status;
</script>

{#if status == 404}
	<div
		class="container py-12 text-4xl mx-auto text-violet-500 font-bold flex h-full items-center justify-center"
	>
		Ay Brub! Not found! 😅
	</div>
	<div class="container m-2 text-center tex-2xl mx-auto text-blue-500 font-bold">{title}</div>
{:else}
	<div class="container m-2 text-center tex-2xl mx-auto text-blue-500 font-bold">
		{title} code is {status}
	</div>
{/if}
