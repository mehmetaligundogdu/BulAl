import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    //fetchData fonksiyonunu da useFetch hook'umuzun içine aldık.
    try {
      const {data: responseData} = await axios.get(url);
      setProductList(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {productList, loading, error}; //statete tuttuğumuz verileri return ediyoruz.
}

export {useFetch};

//custom hook yapıları , statelerimizi component gibi çağırıp kullanabileceğimiz, componentlerimizi daha temiz ve daha okunabilir hale getirebileceğimiz,bize state veya function return eden yapılar. "use" ön ekini kullanmak lifecycle yapılarıyla uyumlu çalışmamız için önemli.

//bu uygulama özelinde useFetch hook'umuzun görevi, endpointten istenen verileri çekmek ve bu verileri state olarak tutmak, bize return etmek.
