<script>
	import { authenticate, getCurrentUser } from '../../lib/authentication';
	import { goto } from '$app/navigation';
	let username = '';
	let password = '';
	let errorMessage = '';

	async function login({ username, password }) {
		const data = await authenticate({ username, password });

		if (data.success === false) errorMessage = data.error;
		else {
			localStorage.setItem('token', data.token);
			await getCurrentUser();
			goto('/home');
		}
	}
</script>

	<div
		class="text-center p-2 border container mx-auto m-12 lg:w-2/4 droap-shadow-md rounded-xl shadow-lg"
	>
		<div class="text-lg">Username</div>
		<input
			type="text"
			bind:value={username}
			class="px-1 py-0.5 rounded border outline-none"
			placeholder=""
		/>
		<div class="text-lg">Password</div>
		<input type="password" bind:value={password} class="px-1 py-0.5 rounded border outline-none" />
		<div
			on:click={() => login({ username, password })}
			class="bg-violet-600 w-max mx-auto p-2 my-2 rounded text-white hover:bg-purple-500 cursor-pointer select-none"
		>
			Log in
		</div>
		{#if errorMessage !== ''}
			<div class="m-3 p-2 text-white font-bold bg-red-500 border-black border-4 ">
				{errorMessage}
			</div>
		{/if}
	</div>
