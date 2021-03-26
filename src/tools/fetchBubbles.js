import AxiosWithAuth from "./AxiosWithAuth";

const fetchBubbles = () => {
  return AxiosWithAuth.get()
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((err) => console.log(err));
};

export default fetchBubbles;
