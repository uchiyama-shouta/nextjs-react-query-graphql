import { request } from "graphql-request";
import { useQuery } from "react-query";
import { Rocket } from "../types/types";
import { GET_ROCKETS } from "..//queries/queries";

type RocketsRes = {
	rockets: Rocket[];
};

export const fetchRockets = async () => {
	const { rockets: data } = await request<RocketsRes>(
		"https://api.spacex.land/graphql/",
		GET_ROCKETS
	);
	return data;
};

export const useQueryRockets = () => {
	return useQuery<Rocket[] | Error>({
		queryKey: "rockets",
		queryFn: fetchRockets,
		// staleTime: Infinity,
		staleTime: 10,
      // refetchInterval: 3000
	});
};
