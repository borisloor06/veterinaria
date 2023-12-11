import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { useSelector } from "react-redux";

import { URL_GRAPHQL } from "../../constants/constantes";
import { AppStore } from "../../redux/store";
import CompraDashboard from "./compras/compras";

const Dashboard = () => {
	const userState = useSelector((store: AppStore) => store.user);

	const client = new ApolloClient({
		uri: URL_GRAPHQL,
		cache: new InMemoryCache(),
		headers: {
			Authorization: `Bearer ${userState.access_token}`,
		},
	});

	return (
		<ApolloProvider client={client}>
			<CompraDashboard />
		</ApolloProvider>
	);
};

export default Dashboard;
