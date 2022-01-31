import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Subreddit = () => {
  const [posts, setPosts] = useState([]);
  // const [phrase, setPhrase] = useState();
  const { reddit } = useParams();

  useEffect(() => {
    // setPhrase(reddit);
    fetch(`https://www.reddit.com/r/${reddit}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data != null) {
          setPosts(data.data.children);
        }
      })
      .catch((e) => {
        console.log(
          "There has been a problem with your fetch operation: " + e.message
        );
      });
  }, []);

  console.log(reddit);

  return posts != null
    ? posts.map((post) => (
        <div className="main-container">
          <div className="main-content">
            <div className="main-media">
              <a>
                <img src={post.data.thumbnail} alt="" />
                <div>
                  <span>{post.data.title}</span>
                  <span>{post.data.author}</span>
                  <span>Subscribers: {post.data.subreddit_subscribers}</span>
                </div>
              </a>
              {/* <button>
                <img src="/images/ellipsis.svg" alt="" />
              </button> */}
            </div>
            <div className="main-description">{post.data.selftext}</div>
            <div className="main-image">
              <a>
                <img src={post.data.url_overridden_by_dest} alt="" />
              </a>
            </div>
            <ul className="main-social">
              <li>
                <button>
                  <img src="/images/like.svg" alt="" />
                  <img src="/images/clapping.svg" alt="" />
                  <span>{post.data.ups}</span>
                </button>
              </li>
              <li>
                <a>{post.data.num_comments} comments</a>
              </li>
            </ul>
            <div className="main-social-buttons">
              <button>
                <img src="/images/like.svg" alt="" />
                <span>Like</span>
              </button>
              <button>
                <img src="/images/comment.svg" alt="" />
                <span>Comment</span>
              </button>
            </div>
          </div>
        </div>
      ))
    : "";
};
