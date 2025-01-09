import { useEffect, useState } from "react";

const useFullUrl = () => {
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullUrl(`${window.location.origin}${window.location.pathname}`);
    }
  }, []);

  return fullUrl;
};

export default useFullUrl;
