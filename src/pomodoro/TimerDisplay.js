import { minutesToDuration, secondsToDuration } from "../utils/duration";
import React from "react";

function TimerDisplay({ session, focusDuration, breakDuration }) {
  if (!session) return null;

  const value = 100 - (100 * session.timeRemaining) / 
    (session.label === "Focusing" ? focusDuration * 60 : breakDuration * 60);

  
  return (
    <>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">
            {session.label} for {session.label === "Focusing" ? minutesToDuration(focusDuration) : minutesToDuration(breakDuration)} minutes
          </h2>
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session.timeRemaining)} remaining
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={value}
              style={{ width: `${value}%` }}
            />
          </div>
        </div>
      </div>
    </>
  )
} 

export default TimerDisplay;