<script>
	import { fly } from "svelte/transition";
	import { user } from './../stores/userStore';
	import { onMount } from 'svelte';
	import {goto} from '$app/navigation'
	let logged = false
	function check() {
		if (!$user.username) return logged = false;
		return logged = true;
	}

	$: check()
	onMount(() => logged == true ? goto('/home') : true)
</script>

<main class="relative">
	<div class="items-center justify-center container mx-auto text-center">
		<div class="text-3xl font-bold p-5 hover:rotate-3 my-6 transition-all duration-500">
			Join the next generation of user driven sandbox platforms
		</div>
		<div class="sm:grid grid-cols-3 gap-1">
			<div class="border shadow p-2">
				<div class="text-2xl font-bold p-1">🔑 Secure</div>
				<div class="whitespace-pre-wrap p-2 text-justify">
					With user security in mind, Castilla is built on top of the most secure technologies out
					currently. Allowing a safe and enjoyable experience at Castilla.
				</div>
			</div>

			<div class="border shadow p-2">
				<div class="text-2xl font-bold p-1">🔥 Feature Rich</div>
				<div class="whitespace-pre-wrap p-2 text-justify">
					Runs major updates every month with new features and utilities for all users. At Castilla
					we never run out of ideas.
				</div>
			</div>

			<div class="border shadow p-2">
				<div class="text-2xl font-bold p-1">😊 Open Souce</div>
				<div class="whitespace-pre-wrap p-2 text-justify">
					Castilla is COMPLETELY open source and released under <code>Castilla FOSS License</code> which
					only has the condition of the watermark in the footer.
				</div>
			</div>
		</div>
		<div class="text-2xl font-bold text-center">Why should you join [[NAME]]?</div>
		<div class="sm:grid grid-cols-2 gap-2">
			<div class="border-2 p-1 m-2 py-10 rounded-xl shadow bg-violet-700 text-white">
				<div class="text-xl font-bold">1,203 Users registered</div>
			</div>
			<div class="border-2 p-1 m-2 rounded-xl py-10 shadow bg-violet-700 text-white">
				<div class="text-xl font-bold">1,203 Special Items Uploaded</div>
			</div>
			<div class="border-2 p-1 m-2 rounded-xl py-10 shadow bg-violet-700 text-white">
				<div class="text-xl font-bold">12 Successful token lotteries</div>
			</div>
			<div class="border-2 p-1 m-2 rounded-xl py-10 shadow bg-violet-700 text-white">
				<div class="text-xl font-bold">1,201,302 Coins in circulation</div>
			</div>
		</div>
		<a href="/auth/register"><div
			class="text-center mx-auto my-2 p-2 text-xl rounded bg-violet-500 w-max transition-all duration-500 hover:bg-violet-400 cursor-pointer text-white">
			Join Now
		</div></a>
		<div class="">
			<img
				src="https://media.discordapp.net/attachments/929462775372210178/944291731598376960/1.png"
				class="w-4/5 mx-auto lg:w-3/5"
				alt=""
			/>
		</div>
	</div>
</main>
