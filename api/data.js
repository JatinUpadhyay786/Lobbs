import axios from "axios";

export const fetchData = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.amF0aW51cGFkaHlheTc4NkBnbWFpbC5jb20.TULsTDBp9kMsQ4WmZb7Ewg3RiTwtwK-LXpZRdxB6tK8",
    },
  };
  let data = null;
  await axios
    .request(config)
    .then((response) => {
      data = response.data;
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};
