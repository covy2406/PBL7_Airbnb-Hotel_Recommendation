import { useState, useEffect } from 'react';
import { getProvincesStatistic, getPriceStatistic, getUsersStatistic } from '../../../api/apiAdmin';
import { getHotel } from '../../../api/apihotel';

export const ProvincesStatisticService = () => {
  const [provinceTable, setProvinceTable] = useState([]);
  const [provinceChart, setProvinceChart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProvincesStatistic()
      .then((res) => {
        const city = Object.keys(res);
        const numHotels = Object.values(res);
        const newProvince = [];
        for (let i = 0; i < city.length; i++) {
          newProvince.push({
            city: city[i],
            numHotels: numHotels[i],
          });
        }
        setProvinceTable(newProvince);
        setProvinceChart(Object.entries(res).map(([city, numHotels]) => ({ name: city, value: numHotels })));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return { provinceTable, provinceChart, loading };
};

export const PriceStatisticService = () => {
  const [priceTable, setPriceTable] = useState([]);
  const [priceChart, setPriceChart] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPriceStatistic()
      .then((res) => {
        const price = Object.values(res.price);
        const score = Object.values(res.score);
        const newPrice = [];
        for (let i = 0; i < price.length; i++) {
          newPrice.push({
            price: price[i],
            score: score[i],
          });
        }
        setPriceTable(newPrice);
        setPriceChart(newPrice);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return { priceTable, priceChart, loading };
};

export const HotelsStatisticService = (page, size) => {
  const [hotelsTable, setHotelsTable] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHotel(page, size)
      .then((res) => {
        setHotelsTable(res.data);
        setTotalPage(Math.ceil(res.count / size));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [page, size]);

  return { hotelsTable, totalPage, loading };
};

export const UsersStatisticService = (page, size) => {
  const [hotelsTable, setHotelsTable] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState();

  useEffect(() => {
    getUsersStatistic(page, size)
      .then((res) => {
        setHotelsTable(res.data);
        setCount(res.count);
        setTotalPage(Math.ceil(res.count / size));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [page, size]);

  return { hotelsTable, totalPage, loading, count };
};
