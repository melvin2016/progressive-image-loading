import React, { useState } from "react";
import "./ImageLoader.css";

const ImageLoader = ({ source, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { src, trace } = require(`./${source}`);

  return (
    <div className="imageLoader">
      <img
        className="realImg"
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          opacity: imageLoaded ? "1" : "0",
        }}
        onLoad={() => setImageLoaded(true)}
      />

      <img
        style={{
          opacity: imageLoaded ? "0" : "1",
        }}
        src={trace}
        alt={alt}
      />
    </div>
  );
};

export default ImageLoader;
