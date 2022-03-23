<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { getCurrentUser } from '$lib/authentication';
	import { user } from '../stores/userStore';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import { serviceDomain, port, serviceName, serviceDescription} from './../settings/service';
	let redirect = false;
	let restrictedPaths = ['auth', 'home', 'trade', 'admin'];
	let loading = true;
	let error = false;
	let errorMessage = ""
	import { colorSettings } from "./../settings/frontend"
	async function ping() {
		loading = true;
			const response = await fetch(`${serviceDomain}:${port}/service`).catch((err) => {error = true; errorMessage = err});
		response.ok ? (loading = false) : (error = true);
	}

	function restrictAuthRoutes() {
		if (restrictedPaths.some((v) => $page.url.pathname.includes(v))) {
			return (redirect = true);
		}
		return (redirect = false);
	}

	$: restrictAuthRoutes();

	const logout = () => {
		localStorage.removeItem('token');
		user.set({});
	};

	onMount(async () => {
		await getCurrentUser();
		await ping();
		if (redirect == true) {
			goto('/');
		}
	});
</script>

<header class="sticky top-0 z-50">
	<div class="p-4 bg-[{colorSettings.background}] md:grid grid-cols-3 sticky">
		<div class="text-white font-bold text-3xl text-center p-1">{serviceName}</div>
		<div class="mx-auto text-center gap-2 grid grid-flow-col text-white font-bold items-center">
			{#if !$user.username}
				<a href="/">
					<div
						class="hover:underline mx-auto hover:border-b-indigo-500 cursor-pointer hover:border-b-4 w-max transition-all duration-200 ease-linear"
					>
						Home
					</div></a
				>
			{:else}
				<a href="/home">
					<div
						class="hover:underline mx-auto hover:border-b-indigo-500 cursor-pointer hover:border-b-4 w-max transition-all duration-200 ease-linear"
					>
						Home
					</div></a
				>
			{/if}
			<a href="/forums"
				><div
					class="hover:underline mx-auto hover:border-b-indigo-500 cursor-pointer hover:border-b-4 w-max transition-all duration-200 ease-linear"
				>
					Forums
				</div></a
			>
			<a href="/shop"
				><div
					class="hover:underline mx-auto hover:border-b-indigo-500 cursor-pointer hover:border-b-4 w-max transition-all duration-200 ease-linear"
				>
					Shop
				</div></a
			>
			<div
				class="hover:underline mx-auto hover:border-b-indigo-500 cursor-pointer hover:border-b-4 w-max transition-all duration-200 ease-linear"
			>
				Users
			</div>
			<div
				class="hover:underline mx-auto hover:border-b-indigo-500 cursor-pointer hover:border-b-4 w-max transition-all duration-200 ease-linear"
			>
				Drops
			</div>
		</div>

		<div class="text-white md:grid grid-flow-col my-2 font-bold justify-end">
			{#if !$user.username}
				<a href="/auth/login">
					<div
						class="hover:underline mx-auto text-center p-1 cursor-pointer w-max transition-all duration-200 ease-linear"
					>
						Log In
					</div></a
				>
				<a href="/auth/register">
					<div
						class="hover:underline mx-auto text-center p-1 cursor-pointer w-max transition-all duration-200 ease-linear"
					>
						Register
					</div>
				</a>
			{:else}
				<div
					class="hover:underline mx-auto text-center p-1 cursor-pointer w-max transition-all duration-200 ease-linear"
				>
					{$user.username}
				</div>
				<div
					on:click={logout}
					class="hover:underline mx-auto text-center p-1 cursor-pointer w-max transition-all duration-200 ease-linear"
				>
					Log Out
				</div>
			{/if}
		</div>
	</div>
</header>
{#if error}
	<div class="text-center mx-auto text-indigo-500 font-bold animate-bounce justify-center text-4xl m-12">We could not connect to the server. Please try again</div>
	<div class="text-center mx-auto bg-gray-300 rounded w-2/4 text-black font-mono whitespace-pre-line p-2 m-6">{errorMessage}</div>
	<div class="text-center mx-auto bg-indigo-500 w-max cursor-pointer mx-auto text-white font-bold p-2 rounded" on:click={() => location.assign('/')}>Refresh</div>
	{:else if loading}
	<div class="text-center mx-auto text-indigo-500  animate-bounce m-12 text-4xl font-bold">Loading</div>
{:else}
	<section class="h-screen" out:fly={{ y: 500, duration: 500 }} in:fly={{ y: 500, duration: 1000 }}>
		<slot />

	</section>
{/if}


