import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const CartEmpty = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./cartEmpty.json"),
    });
  }, []);

  return (
      <div className='containerCartEmpty'>
        <div className="">
            <div ref={container}></div>
        </div>
        <p className='textCart'>Tu carrito está vacio</p>
        <p className='textCart2'>Vuelve al Home y agrega productos!</p>
      </div>
  );
};

export default CartEmpty;