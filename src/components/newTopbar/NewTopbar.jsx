import React from "react";
import "./newTopbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FaBars } from "react-icons/fa";

export default function NewTopbar() {
	return (
		<div className="NewTopbar" id="NewTopbar">
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

			<nav className="nav">
				<div className="nav-menu flex-row">
					<div className="nav-brand">
						<p href="#" className="text-gray">
							<img src="./assets/logo.png" className="logo" alt="logo" />
						</p>
					</div>
					<div className="toggle-collapse">
						<div className="toggle-icons">
							<FaBars></FaBars>
						</div>
					</div>
					<div>
						<ul className="nav-items">
							<li className="nav-link" id="active">
								<a href="#">მთავარი</a>
							</li>
							<li className="nav-link">
								<a href="#">ჩვენს შესახებ</a>
							</li>
							<li className="nav-link">
								<a href="#">მომსახურეობები</a>
							</li>
							<li className="nav-link">
								<a href="#">ჩვენი მომხმარებლები</a>
							</li>
							<li className="nav-link">
								<a href="#">სიახლეები</a>
							</li>
							<li className="nav-link">
								<a href="#">! კარიერა !</a>
							</li>
							<li className="nav-link">
								<a href="#">კონტაქტები</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
