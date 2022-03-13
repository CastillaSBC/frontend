import { port, serviceDomain } from '../settings/service';
import { user } from '../stores/userStore';
const baseURL = `${serviceDomain}:${port}`;

export async function getCurrentUser() {
	const token = localStorage.getItem('token');
	if (!token) {
		user.set({});
		return { success: false, message: 'No token.' };
	}

	const response = await fetch(`${baseURL}/authentication/me`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
			'Access-Control-Allow-Origin': 'http://localhost:3000',
			'Access-Control-Allow-Credentials': 'true'
		}
	}).catch((err) => console.log(err));

	if(!response){
		console.log(`No response.`)
		return {success: false, error: "Failed to load."}
   }
	const data = await response.json();
	if (data.success === false) {
		return { data };
	}

	user.set(data.user);
	return data.user;
}

export async function authenticate({ username, password }) {
	const response = await fetch(`${baseURL}/authentication/authenticate`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username, password })
	}).catch((err) => console.log(err));

	if(!response){
		console.log(`No response.`)
		return {success: false, error: "Failed to load."}
   }
	const data = await response.json();
	return data;
}

export async function register({ username, password }) {
	const response = await fetch(`${baseURL}/authentication/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username, password })
	}).catch((err) => console.log(err));
	if(!response){
		 console.log(`No response.`)
		 return {success: false, error: "Failed to load."}
	}
	const data = await response.json();
	return data;
}
