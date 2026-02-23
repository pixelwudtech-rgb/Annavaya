/// <reference types="astro/client" />

// https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript
interface ImportMetaEnv {
	readonly SITE: string;
	readonly PUBLIC_API_BASE_URL: string;
	readonly BASE_URL: string;
	readonly RANDOMIZE: boolean;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
