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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl flex flex-col gap-4 p-4">

        {items.map((item, idx) => (
          <RoomCard key={idx} room={item} index={idx}/>
        ))}

        {hasNextPage && (
          <div ref={infiniteRef} className="flex justify-center items-center">
            <div className="animate-pulse bg-slate-600 p-4 text-white rounded-md">
              Loading...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
