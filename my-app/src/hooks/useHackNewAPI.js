import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackNewAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(initialUrl);
  const handleFetchData = useRef({});
  const isCounted = useRef(true);
  useEffect(() => {
    isCounted.current = true;
    return () => {
      isCounted.current = false;
    };
  }, []);
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      if (isCounted.current) {
        setData(response.data || []);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setErrorMessage(`The error happen ${e}`);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return {
    setUrl,
    errorMessage,
    loading,
    data,
  };
}
