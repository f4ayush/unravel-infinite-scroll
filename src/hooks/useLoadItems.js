import { useState } from 'react';
import sampleData from '../data/index.json';
const data = sampleData.rooms_by_serial_no?.[0]?.rooms || [];
const ARRAY_SIZE = 10;
function loadItems(startCursor = 0){
    return new Promise((resolve) => {
      let newArray = [];
  
      setTimeout(() => {
        for (let i = startCursor; (i < startCursor + ARRAY_SIZE)&& i< data.length; i++) {
          const newItem = data[i];
          newArray = [...newArray, newItem];
        }
  
        resolve({ hasNextPage: newArray.length < data.length , data: newArray });
      }, 500);
    });
  }
  
  export function useLoadItems() {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [error, setError] = useState();
  
    async function loadMore() {
      setLoading(true);
      try {
        const { data, hasNextPage: newHasNextPage } = await loadItems(
          items.length,
        );
        setItems((current) => [...current, ...data]);
        setHasNextPage(newHasNextPage);
      } catch (error_) {
        setError(error_ || new Error('Something went wrong'));
      } finally {
        setLoading(false);
      }
    }
  
    return { loading, items, hasNextPage, error, loadMore };
  }