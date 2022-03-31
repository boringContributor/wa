<script lang="ts">
	export let title: string;
	export let description: string;
	export let number: number;
	export const dummyNumber = "49123456789";

	function handleClick(): void {
		if (!isValidNumber(number)) {
			alert("wrong number");
		}
		const browserLink = `https://web.whatsapp.com/send?phone=${number}&text&app_absent=1`;
		window.open(browserLink, "_blank");
	}

	function isValidNumber(input: number | undefined): boolean {
		return (
			input &&
			input.toString().length > 7 &&
			input.toString().slice(0, 1) != "0"
		);
	}
</script>

<svelte:head>
	<title>WhatsApp</title>
	<meta name="robots" content="max-snippet:[80]" />
	<meta name="description" content="Open whatsapp for unsaved numbers" />
	<meta name="keywords" content="Whatsapp" />
</svelte:head>

<main>
	<h1>{title}</h1>

	<p>
		{description}
	</p>

	<div>
		<lottie-player
			src="https://assets2.lottiefiles.com/packages/lf20_t7uqr8of.json"
			background="transparent"
			speed="1"
			loop
			class="lottie"
			autoplay
		/>
		<input bind:value={number} placeholder={dummyNumber} class="label" />
		<button on:click={handleClick} class="button-62">Open</button>
	</div>
</main>

<style>
	.label {
		background-repeat: no-repeat;
		background-position: 2px 3px;
		text-indent: 17px;
	}
	.lottie {
		height: 300px;
		margin: 0 auto;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: var(--main-color);
		text-transform: capitalize;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	/* CSS */
	.button-62 {
		background: linear-gradient(
			to bottom right,
			var(--main-color),
			#ff9a5a
		);
		border: 0;
		border-radius: 12px;
		color: #ffffff;
		cursor: pointer;
		display: inline-block;
		font-weight: 500;
		line-height: 2.5;
		outline: transparent;
		padding: 0 1rem;
		text-align: center;
		text-decoration: none;
		transition: box-shadow 0.2s ease-in-out;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		white-space: nowrap;
	}

	.button-62:not([disabled]):focus {
		box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
			-0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
			0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
	}

	.button-62:not([disabled]):hover {
		box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
			-0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
			0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
	}
</style>
