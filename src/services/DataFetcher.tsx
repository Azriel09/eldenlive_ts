import { useQuery, useQueryClient } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_LOCAL_API;
const LOCAL_DB = import.meta.env.VITE_LOCAL_DB;

export const FetchDeathsData = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["deaths"],
    queryFn: () => {
      const data = fetch(`${LOCAL_DB}/api/deaths`, {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }).then((res) =>
        res.json().then((resdata) => {
          return resdata;
        })
      );

      return data;
    },
    initialData: () => {
      return queryClient.getQueryData(["deaths"]);
    },
    staleTime: 120000,
  });
};

export const FetchBossData = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["boss"],
    queryFn: () => {
      const data = fetch(`${LOCAL_DB}/api/boss`, {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }).then((res) =>
        res.json().then((resdata) => {
          return resdata;
        })
      );

      return data;
    },
    initialData: () => {
      return queryClient.getQueryData(["boss"]);
    },
    staleTime: 120000,
  });
};