<script>
	import { onMount } from 'svelte';
	import { port, serviceDomain } from '../../settings/service';
	import CategorySelect from './../../components/CategorySelect.svelte';
	import CategorySelector from './../../components/CategorySelect.svelte';
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
				threads = data.threads;
				loading.threads = false;
				console.log(threads);
			});
		});
	}

	async function getThreads() {
		const response = await fetch(`${baseURL}/forums/threads/${categoryId}`);
		const data = await response.json();

		threads = data.threads;
	}

	function getThread(id) {
		fetch(`${baseURL}/forums/thread/${id}`).then((data) => {
			data.json().then((data) => {
				thread = data.thread;
				console.log(thread);
			});
		});
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
			{:else}
				{#each threads as thread}
					<div
						on:click={() => getThread(thread.id)}
						class="border h-fit p-2 bg-violet-500 hover:border-dotted hover:underline"
					>
						{thread.title}
					</div>
				{/each}
			{/if}
		</div>
		<div id="categories" class="drop-shadow-md bg-violet-500 border p-2">
			<div class="text-center text-xl">Categories</div>
			<div class="p-2 flex space-x-2 justify-center">
				{#if loading.threads}
					<div class="mx-auto text-center animate-pulse items-center">Loading...</div>
				{:else}
					{#each categories as category}
						<CategorySelect
							on:click={() => changeCategory(category.id)}
							categoryName={category.categoryName}
						/>
					{/each}
				{/if}
			</div>
			<div class="p-1 bg-white mx-auto hover:cursor-pointer my-2 w-max text-black ">
				Create Thread
			</div>
		</div>
		<div id="content" class="shadow-xl border p-2 text-black my-8">
			{#if thread !== undefined}
				<div class="border-4 m-2 p-2 md:flex shadow rounded border-black border-dashed">
					<div class="p-2">
						<img src="" class="w-32 h-32 mx-auto border rounded-xl" alt="" />
						<div class="text-center">
							<div class="hover:underline">{thread.creator.username}</div>
							<div class="p-0.5 bg-yellow-400 w-max mx-auto rounded text-white">Gold User</div>
						</div>
					</div>
					<div class="m-2 p-2 whitespace-pre-line text-justify md:w-2/4 mx-auto md:mx-2">
						{thread.thread.body}
					</div>
				</div>
			{:else}
				<div class="text-center text-3xl">Select a thread!</div>
			{/if}
		</div>
	</div>
</div>
