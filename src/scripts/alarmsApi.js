import axios from "axios";
import { twitter } from "./twitterApi";

const local = axios.create({
  baseURL: "http://localhost:3000",
});

export const getAlarm = async (id, token, setAlarm) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  await local
    .get(`/api/alarms/${id}`, config)
    .then((res) => {
      setAlarm(res.data);
    })
    .catch((err) => {
      throw err;
    });
};

export const getAlarms = async (email, token, setAlarms) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const alarms = await local
    .post("/api/alarms/", { email }, config)
    .then((res) => {
      setAlarms(res.data);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });

  alarms.map(async (value, index) => {
    const occurence = await twitter
      .get("/tweets/counts/recent", {
        params: {
          query: value.search, //sometimes bad request
          start_time: value.date,
          end_time: value.updateAt,
        },
      })
      .then((res) => {
        console.log(res.data);
        console.log(value);

        return res.data.meta.total_tweet_count;
      })
      .catch((err) => {
        throw err;
      });

    await local
      .put(`/api/alarms/${value._id}`, { occurence }, config)
      .catch((err) => {
        throw err;
      });

    await local.post("/api/alarms/", { email }, config);
  });
};

export const createAlarm = async (
  email,
  title,
  description,
  search,
  total,
  date,
  token
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  await local
    .post(
      "/api/alarms/create",
      { email, title, description, search, total, date },
      config
    )

    .catch((err) => {
      throw err;
    });
};

export const deleteAlarm = async (id, token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  await local.delete(`/api/alarms/${id}`, config).catch((err) => {
    throw err;
  });
};

export const searchAlarm = async (email, search, token, setAlarms) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  await local
    .post("/api/alarms/find", { email, title: search }, config)
    .then((res) => {
      setAlarms(res.data);
    })
    .catch((err) => {
      throw err;
    });
};

export const updateAlarmOccurence = async (id, alarm, token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const occurence = await twitter
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

  await local.put(`/api/alarms/${id}`, { occurence }, config).catch((err) => {
    throw err;
  });
};
