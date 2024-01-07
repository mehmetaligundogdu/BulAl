import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  //useFetch hook'umuzun görevi, endpointten istenen verileri çekmek ve bu verileri state olarak tutmak, bize return etmek.
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);

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
  //sayfa açılana kadar (1.2 sn) welcome animasyonunu göster.
  useEffect(() => {
    fetchData(); //sayfa her mount olduğunda fetchData fonksiyonunu çalıştır.
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1200); // 1.2 saniye sonra welcome animasyonunu kapat

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {productList, loading, error, showWelcome}; //statete tuttuğumuz verileri return ediyoruz.
}

export {useFetch};

//custom hook yapıları , statelerimizi component gibi çağırıp kullanabileceğimiz, componentlerimizi daha temiz ve daha okunabilir hale getirebileceğimiz,bize state veya function return eden yapılar. "use" ön ekini kullanmak lifecycle yapılarıyla uyumlu çalışmamız için önemli.

//bu uygulama özelinde useFetch hook'umuzun görevi, endpointten istenen verileri çekmek ve bu verileri state olarak tutmak, bize return etmek.
