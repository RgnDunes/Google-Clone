# Google Chrome Clone using ReactJS 🇮🇳🇮🇳🇮🇳🇮🇳

> [Live Demo](https://dunes-chrome-clone-react.web.app/)

## Learning 📚

- react-context-api
- using google custom search api
- react-router
- creating our own custom hook
- flexbox

## API Used

- [google-custom-search-api](https://developers.google.com/custom-search/v1/using_rest)

## custom hook created

```
NAME : useGoogleSearch
===================================================================

import React, { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "2f999c4a65215e693";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return data;
};

export default useGoogleSearch;

```
