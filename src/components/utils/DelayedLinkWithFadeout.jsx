import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DelayedLinkWithFadeout ({ delay, replace, state, to, setOpacity, ...props }) {
    const navigate = useNavigate();
    const timerRef = useRef();
  
    useEffect(() => () => clearTimeout(timerRef.current), []);
  
    const clickHandler = (e) => {
      e.preventDefault();
      setOpacity('opacity-0')
      timerRef.current = setTimeout(navigate, delay, to, { replace, state });
    };
  
    return <Link to={to} {...props} onClick={clickHandler} />;
  };