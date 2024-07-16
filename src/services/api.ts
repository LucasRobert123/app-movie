import apisauce from "apisauce";

export const api = apisauce.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "1b5cfef272f35796a4b192eb4555c790",
    language: "pt-BR",
    include_adult: false,
  },
});
