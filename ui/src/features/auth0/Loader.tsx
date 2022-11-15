import React from "react";

export const Loader: React.FC = () => {
  const loadingImg =
    "https://cdnjs.cloudflare.com/ajax/libs/timelinejs/2.25/css/loading.gif";

  return (
    <div className="loader">
      <img src={loadingImg} alt="Loading..." />
    </div>
  );
};
