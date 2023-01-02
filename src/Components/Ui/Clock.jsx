import { distance } from "framer-motion";
import React, { useEffect, useState } from "react";
export default function Clock() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  let interval;
  const countDown = () => {
    const destination = new Date("Oct 10, 2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const secondes = Math.floor((different % (1000 * 60)) / 1000);
      if (destination < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(secondes);
      }
    });
  };
  useEffect(() => {
    countDown();
  });
  return (
    <>
      <div className="colorWrapper d-flex align-items-center gap-3">
        <div className="clockData d-flex align-items-center gap-3">
          <div className="text-center">
            <h4 className="h1 text-white fs-3 mb-2">{days}</h4>
            <h5 className="text-white fs-6">Days</h5>
          </div>
          <span className=" text-white fs-3">:</span>
        </div>
        <div className="clockData d-flex align-items-center gap-3">
          <div className="text-center">
            <h4 className="h1 text-white fs-3 mb-2">{hours}</h4>
            <h5 className="text-white fs-6">Hours</h5>
          </div>
          <span className=" text-white fs-3">:</span>
        </div>
        <div className="clockData d-flex align-items-center gap-3">
          <div className="text-center">
            <h4 className="h1 text-white fs-3 mb-2">{minutes}</h4>
            <h5 className="text-white fs-6">Minutes</h5>
          </div>
          <span className=" text-white fs-3">:</span>
        </div>
        <div className="clockData d-flex align-items-center gap-3">
          <div className="text-center">
            <h4 className="h1 text-white fs-3 mb-2">{seconds}</h4>
            <h5 className="text-white fs-6">Seconds</h5>
          </div>
        </div>
      </div>
    </>
  );
}
