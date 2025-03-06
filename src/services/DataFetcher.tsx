import { useQuery, useQueryClient } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_LOCAL_API;
const LOCAL_DB = import.meta.env.VITE_LOCAL_DB;

export const DataFetch = () => {
  const queryClient = useQueryClient();
  
  return useQuery({
    queryKey: ["vtubers"],
    queryFn: () => {
      const data = fetch(`${LOCAL_DB}/api/vtubers`, {
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
      return queryClient.getQueryData(["vtuber"]);
    },
    staleTime: 120000,
  });
};
