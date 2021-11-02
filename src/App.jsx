import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Testimonials from "./components/testimonials/Testimonials";
import Team from "./components/team/Team";
import ContactPage from "./components/contactPage/ContactPage";
import NewIntro from "./components/newIntro/NewIntro";
import NewTopbar from "./components/newTopbar/NewTopbar";
import BlogsPage from "./components/blogsPage/BlogsPage";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AnimatedGrid from "./components/animatedGrids/AnimatedGrid";

function App() {
	return (
		<div className="app">
			
			{/* <Navbar /> */}
			<div className="sections">
				
				{/* <AnimatedGrid />
				<BlogsPage />
				<Works /> */}

				
				<Team />
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
