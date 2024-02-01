const OPENAI_URL = 'https://api.openai.com/v1/audio/transcriptions';

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const file = formData.get('file');

			const form = new FormData();

			if (file) {
				form.append('file', file);
			}

			form.append('model', 'whisper-1');

			const result = fetch(OPENAI_URL, {
				method: 'POST',
				body: form,
				headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
			})
				.then((response) => response.json())
				.then((response) => {
					return response;
				})
				.catch((err) => {
					throw new Error(err);
				});
			return result;
		} catch (error) {
			console.error('💩', error);
		}
	}
};
