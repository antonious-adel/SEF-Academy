import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getArticle } from "../services/apiArticles";

export function useArticle() {
  const { id } = useParams();

  const {
    isLoading,
    data: article,
    error,
  } = useQuery({
    queryKey: ["articles", id],
    queryFn: () => getArticle(id),
    retry: false,
  });

  return { isLoading, error, article };
}
