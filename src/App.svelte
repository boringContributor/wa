<script lang="ts">
	export let title: string;
	export let description: string;
	let number: number;
	const dummyNumber = "49 211 5684962";
	let hasError = false;

	function handleClick(event): void {
		// if (event.key !== "Enter") return;
		if (!isValidNumber(number)) {
			hasError = true;
			setTimeout(() => {
				hasError = false;
			}, 1000);
			return;
		}
		const browserLink = `https://web.whatsapp.com/send?phone=${number}&text&app_absent=1`;
		window.open(browserLink, "_blank");
		number = undefined;
	}

	function isValidNumber(input: number | undefined): boolean {
		return (
			input &&
			input.toString().length > 7 &&
			input.toString().slice(0, 1) != "0"
		);
	}

	// document.addEventListener("keyup", handleClick, true);
</script>

<svelte:head>
	<title>Open WhatsApp</title>
	<meta name="robots" content="max-snippet:[80]" />
	<meta name="description" content="Open WhatsApp for unsaved numbers" />
	<meta name="keywords" content="WhatsApp" />
</svelte:head>

<main>
	<h1>
		<span class="gooey">
			{title}
		</span>
	</h1>
	<p>{description}</p>

	<div>
		<lottie-player
			src="https://assets2.lottiefiles.com/packages/lf20_t7uqr8of.json"
			background="transparent"
			speed="1"
			loop
			class="lottie"
			autoplay
		/>
		<div>
			<span class="label">+</span>
			<input
				id="number-input"
				bind:value={number}
				placeholder={dummyNumber}
				class:hasError
			/>
		</div>

		<button type="button" on:click={handleClick}>Open</button>
	</div>

	<svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
		<defs>
			<filter id="goo">
				<feGaussianBlur
					in="SourceGraphic"
					stdDeviation="7"
					result="blur"
				/>

				<feColorMatrix
					in="blur"
					mode="matrix"
					values="1  0  0  0  0
                        0  1  0  0  0
                        0  0  1  0  0
                        0  0  0  25  -12"
					result="goo"
				/>

				<feComposite in="SourceGraphic" in2="goo" operator="atop" />
			</filter>
		</defs>
	</svg>
</main>

<style>
	svg {
		visibility: hidden;
		position: absolute;
		top: -100%;
		left: -100%;
	}

	.gooey {
		color: whitesmoke;
		background-color: var(--main-color);
		padding: 0.3em;
		box-decoration-break: clone;
		-webkit-box-decoration-break: clone;
		filter: url("#goo");
	}
	.label {
		position: absolute;
		margin: 10px 0px 0px 10px;
	}
	input {
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
		font-weight: 100;
		font-size: 2.5rem;
		line-height: 1.7em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	button {
		background: linear-gradient(
			to bottom right,
			var(--main-color),
			#ff9a5a
		);
		border: 0;
		color: #ffffff;
		cursor: pointer;
		font-weight: 500;
		line-height: 2;
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

	button:not([disabled]):focus {
		box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
			-0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
			0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
	}

	button:not([disabled]):hover {
		box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
			-0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
			0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
	}

	.hasError {
		outline: 0;
		border-style: solid;
		border-color: red;
		animation-name: bounce;
		animation-duration: 0.9s;
		animation-delay: 0.25s;
	}

	@keyframes bounce {
		0% {
			transform: translateX(0px);
			timing-function: ease-in;
		}
		37% {
			transform: translateX(5px);
			timing-function: ease-out;
		}
		55% {
			transform: translateX(-5px);
			timing-function: ease-in;
		}
		73% {
			transform: translateX(4px);
			timing-function: ease-out;
		}
		82% {
			transform: translateX(-4px);
			timing-function: ease-in;
		}
		91% {
			transform: translateX(2px);
			timing-function: ease-out;
		}
		96% {
			transform: translateX(-2px);
			timing-function: ease-in;
		}
		100% {
			transform: translateX(0px);
			timing-function: ease-in;
		}
	}
</style>
