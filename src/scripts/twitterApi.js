import fetch from "node-fetch";
import axios from "axios";

export const twitter = axios.create({
  baseURL: "http://localhost:4000/https://api.twitter.com/2",
  headers: {
    Authorization:
      "Bearer AAAAAAAAAAAAAAAAAAAAAKZtYQEAAAAA8OWu8GKNSLSfitU9OSL86dD9YkI%3D2YmR2FfRDr1Kqo4yrL0sQArmgvRHWtTxPQN6pcdsxiidwktmSn",
  },
});

export const getTweets = async (alarm, setTweets) => {
  await twitter
    .get("/tweets/search/recent", {
      params: {
        query: alarm.search, //sometimes bad request
        "tweet.fields": "created_at,author_id",
      },
    })
    .then((res) => {
      setTweets(res.data.data);
    })
    .catch((err) => {
      throw err;
    });
};

export const getTweetCount = async (alarm) => {
  await twitter
    .get("/tweets/counts/recent", {
      params: {
        query: alarm.search, //sometimes bad request
        start_time: alarm.date,
        end_time: alarm.updateAt,
      },
    })
    .then((res) => {
      return res.data.meta.total_tweet_count;
    })
    .catch((err) => {
      throw err;
    });
};

export const getAuthor = async (item, setAuthor) => {
  await twitter
    .get(`/users/${item.item.author_id}`, {
      params: {
        "user.fields": "profile_image_url,verified",
      },
    })
    .then((res) => {
      setAuthor(res.data.data);
    })
    .catch((err) => {
      throw err;
    });
};

export const searchTweets = async () => {};

export const getTweetsFetch = async (ids) => {
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
