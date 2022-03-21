import axios from "axios";

export const twitter = axios.create({
  baseURL: "http://localhost:4000/https://api.twitter.com/2",
  headers: {
    Authorization:
      "Bearer AAAAAAAAAAAAAAAAAAAAAKZtYQEAAAAA8OWu8GKNSLSfitU9OSL86dD9YkI%3D2YmR2FfRDr1Kqo4yrL0sQArmgvRHWtTxPQN6pcdsxiidwktmSn",
  },
});

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
