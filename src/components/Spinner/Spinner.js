import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Spinner = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./spinerComponent.json"),
    });
  }, []);

  return (
      <div className='containerSpinner'>
        <div className="spinner">
            <div ref={container}></div>
        </div>
      </div>
  );
};

export default Spinner;