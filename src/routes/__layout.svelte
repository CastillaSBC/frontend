<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { getCurrentUser } from '$lib/authentication';
	import { user } from '../stores/userStore';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	let redirect = false;
	let restrictedPaths = ['auth', 'home', 'trade', 'admin', 'create'];

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
		if (redirect == true) {
			goto('/');
		}
	});
</script>

<header class="sticky top-0 z-50">
	<div class="p-4 bg-violet-700 md:grid grid-cols-3 sticky">
		<div class="text-white font-bold text-3xl text-center p-1">Castilla</div>
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
<section out:fly={{ y: 500, duration: 500 }} in:fly={{ y: 500, duration: 1000 }}><slot /></section>

<footer class="md:bottom-0 p-3 w-full bg-gray-300 text-center mx-auto justify-center md:absolute">
	<div class="inline-flex">Powered with</div>
	<div class="animate-pulse inline-flex">❤️</div>
	<div class="inline-flex">by Castilla</div>
</footer>
