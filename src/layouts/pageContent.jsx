import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";


function PageContent({ children }) {
	return (
		<section className="container">
			{children}
		</section>
	);
}

export default PageContent;
