import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Default language
const defaultLanguage = 'en';

export const currentLanguage = writable(defaultLanguage);

// Function to change language
export function setLanguage(lang: string) {
	currentLanguage.set(lang);
	if (browser) {
		localStorage.setItem('language', lang);
	}
}

// Load saved language on initialization
if (browser) {
	const saved = localStorage.getItem('language');
	if (saved) {
		currentLanguage.set(saved);
	}
}
