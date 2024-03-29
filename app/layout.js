import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css';
import Header from './header.js';
import Page from './page.js';
import Footer from './footer.js';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="container">
					<Header/>
					{children}
					<Footer/>
				</div>
			</body>

		</html>
	);
}
