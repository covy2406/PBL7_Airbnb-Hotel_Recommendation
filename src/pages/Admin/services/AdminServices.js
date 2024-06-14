import { useState, useEffect } from 'react';
import { getProvincesStatistic, getPriceStatistic } from '../../../api/apiAdmin';

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
        setProvinceChart({
          xAxis: [{ scaleType: 'band', data: city }],
          series: [{ data: numHotels, type: 'bar' }],
        });
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
        setPriceChart({
          data: price.map((price, index) => ({
            x: price,
            y: score[index],
          })),
        });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return { priceTable, priceChart, loading };
};
