import { AppProps } from "next/app";
import "../styles/globals.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default MyApp;
