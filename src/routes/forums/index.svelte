<script>
	import { onMount } from 'svelte';
	import { port, serviceDomain } from '../../settings/service';
	const baseURL = `${serviceDomain}:${port}`;

	let thread = undefined;
	let categories = [];
	let threads = undefined;
	let threadReplies = [];
	let categoryId = 1;
	let loading = {
		threads: true,
		categories: true,
		thread: true
	};
	function changeCategory(id) {
    loading.threads = true;
		threads = [];
		fetch(`${baseURL}/forums/threads/${id}`).then((data) => {
			data.json().then((data) => {
        threads = data.threads
        loading.threads = false
      });
		});
	}

	async function getThreads() {
		const response = await fetch(`${baseURL}/forums/threads/${categoryId}`);
		const data = await response.json();

		threads = data.threads;
	}

	async function getCategories() {
		const response = await fetch(`${baseURL}/forums/categories`);
		const data = await response.json();

		categories = data.categories;
	}
	onMount(async () => {
		await getThreads();
		loading.threads = false;
		await getCategories();
		loading.categories = false;
	});
</script>

<div class="h-full m-5 container mx-auto">
	<div class="h-full md:grid grid-cols-[300px_1fr] grid-rows-[80px_1fr] gap-2 text-white font-bold">
		<div id="sidebar" class="bg-indigo-500 row-span-2 p-2 space-y-2 overflow-y-auto">
			{#if loading.threads}
				<div class="mx-auto text-center animate-pulse items-center">Loading...</div>
			{:else }
        {#if thread === undefined}
				<div class="mx-auto text-center animate-pulse items-center">No Threads</div>
			    {:else}
				    {#each threads as thread}
					    <div class="border h-fit p-2 bg-violet-500 hover:border-dotted hover:underline">
					    	{thread}
					    </div>
				    {/each}
			{/if}
    {/if}
		</div>
		<div id="categories" class="drop-shadow-md bg-violet-500 border p-2">
			<div class="text-center text-xl">Categories</div>
			<div class="p-2 flex space-x-2 justify-center">
        {#if loading.threads}
				<div class="mx-auto text-center animate-pulse items-center">Loading...</div>
			{:else }
				{#each categories as category}
					<div class="hover:underline cursor-pointer" on:click={() => changeCategory(category.id)}>
						{category.categoryName}
					</div>
				{/each}
        {/if}
			</div>
      <div class="p-1 bg-white mx-auto hover:cursor-pointer my-2 w-max text-black ">Create Thread</div>
		</div>
		<div id="content" class="shadow-xl border p-2 text-black my-8">
			{#if thread !== undefined}
				<div class="border-4 m-2 p-2 md:flex shadow rounded border-black border-dashed">
					<div class="p-2">
						<img src="" class="w-32 h-32 mx-auto border rounded-xl" alt="" />
						<div class="text-center">
							<div class="hover:underline">Username</div>
							<div class="p-0.5 bg-yellow-400 w-max mx-auto rounded text-white">Gold User</div>
						</div>
					</div>
					<div class="m-2 p-2 whitespace-pre-line text-justify md:w-2/4 mx-auto md:mx-2">
						What did you expect to see in Polytoria? What did you expect to see in Polytoria? A
						whole Paris building? With current tools, you can't expect something very cool and big.
						People aren't talent at building, They just want to have fun, and they're proud of it
						too. > I dont even see people playing the high effort games. No? We do play high effort
						games, Just see the top rated games. as for now Community aren't active enough to get
						players playing 24/7 so that's just want you're seeing in that time and situation. >
						Polytoria is now full of annoying 8 year olds who get trash games to the front page They
						just want to have fun building on Polytoria, like what I said above. I don't care if I'm
						correct or not, I do respect your opinion though. But you just don't need to insult
						other's builds. - DevPixels 💚
					</div>
				</div>
      {:else}
      <div class="text-center text-3xl">Select a thread!</div>
			{/if}
		</div>
	</div>
</div>
