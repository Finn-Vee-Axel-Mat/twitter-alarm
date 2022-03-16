import fetch from "node-fetch";

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/https://api.twitter.com/2",
  headers: {
    Authorization:
      "Bearer AAAAAAAAAAAAAAAAAAAAAKZtYQEAAAAA8OWu8GKNSLSfitU9OSL86dD9YkI%3D2YmR2FfRDr1Kqo4yrL0sQArmgvRHWtTxPQN6pcdsxiidwktmSn",
  },
});

export const tweets = async () => {
  const TOKEN = `AAAAAAAAAAAAAAAAAAAAAKZtYQEAAAAA8OWu8GKNSLSfitU9OSL86dD9YkI%3D2YmR2FfRDr1Kqo4yrL0sQArmgvRHWtTxPQN6pcdsxiidwktmSn`;
  const SINCE = `2022-01-21T21:00:00Z`;
  //.............YYYY-MM-DDTHH:MM:SSZ

  const SEARCH = "test";

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + TOKEN);
  myHeaders.append("Access-Control-Allow-Origin", "*");

  var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };

  var myRequest = new Request(
    "https://api.twitter.com/2/tweets/counts/recent?query=" + SEARCH,
    myInit
  );

  fetch(myRequest, myInit).then(function (response) {
    console.log(response);
  });
};

export const searchTweets = async () => {};

export const getTweets = async (ids) => {
  if (ids.length === 0) {
    return [];
  }

  const queryParams = new URLSearchParams({
    ids: ids.join(","),
    expansions:
      "author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id",
    "tweet.fields":
      "attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text",
    "user.fields": "id,name,profile_image_url,protected,url,username,verified",
    "media.fields":
      "duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics",
  });

  const response = await fetch(
    `https://api.twitter.com/2/tweets?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_KEY}`,
      },
    }
  );

  const tweets = await response.json();

  const getAuthorInfo = (author_id) => {
    return tweets.includes.users.find((user) => user.id === author_id);
  };

  const getReferencedTweets = (mainTweet) => {
    return (
      mainTweet?.referenced_tweets?.map((referencedTweet) => {
        const fullReferencedTweet = tweets.includes.tweets.find(
          (tweet) => tweet.id === referencedTweet.id
        );

        return {
          type: referencedTweet.type,
          author: getAuthorInfo(fullReferencedTweet.author_id),
          ...fullReferencedTweet,
        };
      }) || []
    );
  };

  return tweets.data.reduce((allTweets, tweet) => {
    const tweetWithAuthor = {
      ...tweet,
      media:
        tweet?.attachments?.media_keys.map((key) =>
          tweets.includes.media.find((media) => media.media_key === key)
        ) || [],
      referenced_tweets: getReferencedTweets(tweet),
      author: getAuthorInfo(tweet.author_id),
    };

    return [tweetWithAuthor, ...allTweets];
  }, []);
};
