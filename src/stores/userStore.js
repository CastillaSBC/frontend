import { writable } from 'svelte/store';
// import { serviceDomain, port } from '../settings/service';
/**
 * 
 */
export const user = writable({});
user.subscribe(() => {
	console.log(`[😊 Castilla] - Local User data has been updated.`);
});

