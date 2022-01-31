import React, { useEffect, useState } from "react";
import { Main } from "./Main";
import { Categories } from "./Categories";
import { Subreddit } from "./Subreddit";
import { Routes, Route } from "react-router-dom";

export const Home = (props) => {
  const [articles, setArticles] = useState([]);
  const [phrase, setPhrase] = useState();

  useEffect(() => {
    // fetch(`https://www.reddit.com/search/.json?q=${phrase}`)
    // fetch(`https://www.reddit.com/r/${phrase}.json`)
    fetch(`https://www.reddit.com/subreddits/search.json?q=${phrase}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data != null) {
          setArticles(data.data.children);
        }
      })
      .catch((e) => {
        console.log(
          "There has been a problem with your fetch operation: " + e.message
        );
      });
  }, [phrase]);

  // console.log(articles);

  return (
    <div className="home-container">
      <div className="home-layout">
        <div className="home-main">
          <Routes>
            <Route
              path="/"
              element={
                articles != null
                  ? articles.map((article, index) => (
                      <Main key={index} article={article.data} />
                    ))
                  : ""
              }
            />
            <Route path="/subreddit/r/:reddit" element={<Subreddit />} />
          </Routes>
        </div>
        <div className="home-categories">
          <Categories />
        </div>
      </div>
    </div>
  );
};
