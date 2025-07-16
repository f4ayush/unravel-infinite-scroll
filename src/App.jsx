// App.jsx
import React from 'react';
import RoomCard from './components/RoomCard';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useLoadItems } from './hooks/useLoadItems';

const App = () => {
  const { loading, items, hasNextPage, error, loadMore } = useLoadItems();
  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: Boolean(error),
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: '0px 0px 400px 0px',
  });


  return (
    <div>

      {items.map((item, idx) => (
        <RoomCard key={idx} room={item} />
      ))}

      {hasNextPage && <div ref={infiniteRef} className="p-1">
        <div className="animate-pulse bg-slate-600 p-4 text-white">
          Loading...
        </div>
      </div>}
    </div>
  );
};

export default App;
