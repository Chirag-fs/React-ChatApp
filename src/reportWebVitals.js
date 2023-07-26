// The provided code is a function named reportWebVitals, which is used to report web vitals metrics for performance monitoring in a web application
const reportWebVitals = (onPerfEntry) => {
// reportWebVitals is a function that takes a single argument onPerfEntry, which is expected to be a callback function

  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
