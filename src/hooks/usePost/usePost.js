import {useState} from 'react';
import axios from 'axios';

function usePost() {
  //post req ile dönecek verileri state olarak tutuyoruz.
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (url, apiData) => {
    //url'yi usePost ile de gönderebilirdik fakat farklı post requestlerimiz olabileceği için url'i hangi postta kullanacaksak o fonksiyonumuzun içine aldık.

    //usePost hook'umuzun görevi, endpoint'e post request atmak.
    try {
      setLoading(true);
      const {data: responseData} = await axios.post(url, apiData); //post req bizden "url" ister , post edilecek olan datayı ister ki ona da apiData dedik.
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return {data, loading, error, post};
}

export {usePost};
