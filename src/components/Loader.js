import React, { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    const hideLoader = () => {
      document.getElementById('loader-wrapper').style.display = 'none';
    };

    hideLoader();
  }, []);

  return (
    <div id="loader-wrapper">
      <div id="loader"></div>
    </div>
  );
};

export default Loader;