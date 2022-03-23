<script>
	import { fly } from 'svelte/transition';
	import { user } from './../stores/userStore';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { colorSettings } from '../settings/frontend';
	let logged = false;
	function check() {
		if (!$user.username) return (logged = false);
		return (logged = true);
	}

	$: check();
	onMount(() => (logged == true ? goto('/home') : true));
</script>

<main class="">
	<div class="flex items-center h-screen ">
		<div class="container mx-auto">
			<div class="grid grid-cols-2">
				<div class="bg-[{colorSettings.background}]">
					<div class="text-xl text-[{colorSettings.primary}]">A</div>
				</div>
			</div>
		</div>
	</div>
</main>
