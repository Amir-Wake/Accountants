import { useRef, useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarTop.css";
  function NavbarTop() {
	const [isOpenedNav, setIsOpenedNav] = useState(false);
	const navRef = useRef();
	
	const showNavbar = () => {
	  navRef.current.classList.toggle("responsive_nav");
	  setIsOpenedNav(!isOpenedNav);
	};
	
	useEffect(() => {
	  const handleClickOutside = (event) => {
		if (isOpenedNav && !navRef.current.contains(event.target)) {
		  showNavbar();
		}
	  };
	
	  document.addEventListener("mousedown", handleClickOutside);
	  document.addEventListener("touchstart", handleClickOutside);
	
	  return () => {
		document.removeEventListener("mousedown", handleClickOutside);
		document.removeEventListener("touchstart", handleClickOutside);
	  };
	}, [isOpenedNav]);
	
	



	return (
		<div className="navbar-container">
		<header>
      <h1 className="logo-text">AMH</h1>
      <h4 className="logo-info">ACCOUNTANT</h4>
	  <div className="navitems" >
			<nav  ref={navRef} className="mr-auto">
				<a href="/#main" onClick={showNavbar}>Home</a>
				<a href="/#service" onClick={showNavbar}>Services</a>
				<a href="/#team" onClick={showNavbar}>Team</a>
				<a href="/#contact" onClick={showNavbar}>Contact</a>
				<button
					className="nav-btn nav-close-btn "
					data-toggle="collapse"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			</div>
		</header>
		</div>
	);
}

export default NavbarTop;