import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const PageLoading = () => {
  useEffect(() => {
    const progress = NProgress.start();
    return () => {
      progress.done();
    };
  }, []);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
};

export default PageLoading;
