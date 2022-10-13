import axios from "axios";

const URL =
  "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants";

  const APIKEY = process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY;

const options = {
  params: { locationId: "304554" },
  headers: {
    "X-RapidAPI-Key": APIKEY,
    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
  },
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
