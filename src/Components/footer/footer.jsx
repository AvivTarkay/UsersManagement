import "./footer.css";

const Footer = () => {
	return (
		<div className="mainFooter">
			<div className="footerContainer">
				<div className="footerRows">
					<div className="col">
						<h2>About Us</h2>
						<ul className="list">
							<li>hey</li>
							<li>hello</li>
							<li>bye</li>
							<li>bye</li>
						</ul>
					</div>
					<div className="col">
						<h2>Contact Us</h2>
						<ul className="list">
							<li>hey</li>
							<li>hello</li>
							<li>bye</li>
							<li>bye</li>
						</ul>
					</div>
					<div className="col">
						<h2>Social</h2>
						<ul className="list">
							<li>
								<i class="fa fa-facebook"></i>
							</li>
							<li>
								<i class="fa fa-twitter"></i>
							</li>
							<li>
								<i class="fa fa-github"></i>
							</li>
							<li>
								<i class="fa fa-linkedin" aria-hidden="true"></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
