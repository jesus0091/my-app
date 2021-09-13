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
          {/* <div> */}
            <div className="cartEmpty">
                <div className='empty' ref={container}></div>
            </div>
            <div className='textCartContainer'>
              <p className='textCart'>Tu carrito está vacio</p>
              <p className='textCart2'>¡Vuelve al Home</p>
              <p className='textCart2'>y agrega productos!</p>
            </div>
          </div>
      // </div>
  );
};

export default CartEmpty;