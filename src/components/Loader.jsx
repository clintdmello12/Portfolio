import { useEffect, useState } from "react";

const LOAD_DURATION = 2200;

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), LOAD_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="loader" aria-label="Loading portfolio">
      <div className="loader-scene">
        <span className="loader-light light-one" />
        <span className="loader-light light-two" />
        <div className="loader-logo-shell">
          <span className="loader-scan" />
          <img src={`${import.meta.env.BASE_URL}assets/clint-logo-blue.png`} alt="" />
        </div>
      </div>
    </div>
  );
}
