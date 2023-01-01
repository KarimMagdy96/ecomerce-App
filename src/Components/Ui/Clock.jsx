import React, { useEffect, useState } from "react";
export default function Clock() {
  const [days, setdays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  let interval;
  const countDown = () => {};
  return (
    <>
      <div className="colorWrapper d-flex align-items-center gap-3">
        <div className="clockData d-flex align-items-center gap-3">
          <div className="text-center">
            <h4 className="h1 text-white fs-3 mb-2">10</h4>
            <h5 className="text-white fs-6">Days</h5>
          </div>
          <span className=" text-white fs-3">:</span>
        </div>
        <div className="clockData d-flex align-items-center gap-3">
          <div className="text-center">
            <h4 className="h1 text-white fs-3 mb-2">10</h4>
            <h5 className="text-white fs-6">Hours</h5>
          </div>
          <span className=" text-white fs-3">:</span>
        </div>
        <div className="clockData d-flex align-items-center gap-3">
          <div className="text-center">
            <h4 className="h1 text-white fs-3 mb-2">10</h4>
            <h5 className="text-white fs-6">Minutes</h5>
          </div>
          <span className=" text-white fs-3">:</span>
        </div>
        <div className="clockData d-flex align-items-center gap-3">
          <div className="text-center">
            <h4 className="h1 text-white fs-3 mb-2">10</h4>
            <h5 className="text-white fs-6">Seconds</h5>
          </div>
        </div>
      </div>
    </>
  );
}
