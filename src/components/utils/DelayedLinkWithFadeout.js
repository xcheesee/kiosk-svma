import { useContext } from "react";
import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { OpacityContext } from './opacity';

export default function DelayedLinkWithFadeout ({ delay, replace, state, to, setOpacity, ...props }) {
    const navigate = useNavigate();
    const timerRef = useRef();
    const { getOpacity } = useContext(OpacityContext)
    useEffect(() => () => clearTimeout(timerRef.current), []);
  
    const clickHandler = (e) => {
      e.preventDefault();
      getOpacity[1]('opacity-0')
      timerRef.current = setTimeout(navigate, delay, to, { replace, state });
    };
  
    return <Link to={to} {...props} onClick={clickHandler} />;
  };