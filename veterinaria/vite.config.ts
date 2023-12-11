import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig((configEnv) => {
	const isDevelopment = configEnv.mode === "development";
	const env = loadEnv(configEnv.mode, process.cwd(), "");

	return {
		plugins: [react()],
		css: {
			modules: {
				generateScopedName: isDevelopment ? "[name]__[local]__[hash:base64:5]" : "[hash:base64:5]",
			},
		},
		server: {
			watch: {
				usePolling: true,
			},
			host: true,
			strictPort: true,
			port: 3006,
		},
		define: {
			__APP_ENV__: env.APP_ENV,
			"process.env": env,
		},
	};
});
