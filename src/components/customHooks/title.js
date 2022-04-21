import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Kishore Natte | " + title;
    return () => {
      document.title = prevTitle;
    };
  });
};
