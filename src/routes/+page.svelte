<script>
	import { enhance } from '$app/forms';
	import { SyncLoader } from 'svelte-loading-spinners';

	export let form;

	let loading = false;
</script>

<svelte:head><title>tl;dl</title></svelte:head>

<div class="container max-w-2xl mx-auto p-2">
	<div class="text-6xl mt-16 mb-12">
		<span class="text-primary">tl;dl</span>
		<span class="text-xl ml-4">too long; didn't listen</span>
	</div>
	<form
		method="POST"
		use:enhance={({ formData }) => {
			loading = true;
			form = null;

			// check for file
			if (!formData.get('file')) {
				return;
			}

			// if .opus rename file to .ogg for mobile whatsapp files
			if (formData.get('file').name.endsWith('.opus')) {
				const file = formData.get('file');
				const filename = file.name.replace('.opus', '.ogg');
				formData.set('file', new File([file], filename, { type: file.type }));
			}
		}}
		enctype="multipart/form-data"
		class="border border-primary rounded-lg p-4 pt-2"
	>
		<label for="file-input" class="label">Transcribe your file</label>
		<div class="flex justify-between">
			<input
				type="file"
				name="file"
				class="file-input file-input-bordered file-input-primary grow mr-4"
			/>
			<button class="btn btn-primary">Lets go!!</button>
		</div>
	</form>

	<div class="border border-secondary rounded-lg border-t-0 p-4">
		<div class="chat chat-start mt-8">
			<div class="chat-bubble font-mono">long useless voice message....</div>
		</div>
		<div class="chat chat-end">
			<div class="chat-bubble font-mono">tl;dl !!!</div>
		</div>

		{#if form?.text}
			<div class="chat chat-start">
				<div class="chat-bubble font-mono">{form?.text}</div>
			</div>
		{:else if loading}
			<div class="chat chat-start">
				<div class="chat-bubble font-mono">
					<SyncLoader size="32" color="#641ae6" />
				</div>
			</div>
		{/if}
	</div>
</div>
