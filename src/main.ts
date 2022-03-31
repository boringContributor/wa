import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: 'Open WhatsApp',
		description: 'Open WhatsApp chats with unknown numbers without the hassle to save the contact first'
	}
});

export default app;