import React from "react";
import "./navbar.scss";
import Flag from "react-world-flags";
import i18n from "../../i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
	const changeLanguage = (ln) => {
		return () => {
			i18n.changeLanguage(ln);
		};
	};

	return (
		<div className="yvelaferi">
			<div className="topbar ">
				<div className="wrapper">
					<div className="left">
						<div className="itemContainer">
							<span className="phone">+995 551 11 22 19</span>
						</div>
						<div className="itemContainer">
							<i className="fas fa-envelope-open" />
							<span className="mail">xachapuridze@gmail.com</span>
						</div>
						<div className="itemContainer">
							<Flag
								className="flagen"
								onClick={changeLanguage("en")}
								code="gb"
								height="20"
							/>

							<Flag
								className="flaggeo"
								onClick={changeLanguage("geo")}
								code="ge"
								height="20"
							/>
						</div>
					</div>
					<div className="right">
						<a href="#">
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a href="#">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a href="#">
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</div>
				</div>
			</div>

			<div class="flex-container1">
				<h1 class="logo">
					<a href="#">
						<img src="./assets/logo.png" className="nav__logo" alt="logo" />
					</a>
				</h1>
				<ul class="navigation">
					<li>
						<a href="#">მთავარი</a>
					</li>
					<li>
						<a href="#">ჩვენს შესახებ</a>
					</li>
					<li>
						<a href="#">მომსახურეობები</a>
					</li>
					<li>
						<a href="#">ჩვენი მომხმარებლები</a>
					</li>
					<li>
						<a href="#">სიახლეები</a>
					</li>
					<li>
						<a href="#">კარიერა</a>
					</li>
					<li>
						<a href="#">კონტაქტები</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
