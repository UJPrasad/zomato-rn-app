import {useState, useEffect} from 'react';
import zomatoApi from '../api/zomato';

export default () => {
  const [data, setData] = useState([]);
  const [errorMessage, setError] = useState('');

  const fetchData = async searchTerm => {
    try {
      const first = await zomatoApi.get(
        `/search?entity_id=6&entity_type=city&q=${searchTerm}&start=0`,
      );
      const second = await zomatoApi.get(
        `/search?entity_id=6&entity_type=city&q=${searchTerm}&start=20`,
      );
      setData(
        [...first.data.restaurants, ...second.data.restaurants]
          .map(x => x.restaurant)
          .filter(x => x.featured_image.length > 0 || x.thumb.length > 0),
      );
    } catch (e) {
      console.log(e);
      setError('');
    }
  };

  useEffect(() => {
    fetchData('Biryani');
  }, []);

  return [data, fetchData, errorMessage];
};
