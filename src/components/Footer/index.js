import React from 'react';

function Footer() {
    return (
        <footer>
			<div className="container">
				<img src="./img/logo white.svg" alt="logo" />

				<div className="flex align-start">
					<ul>
						<li>
							+1-543-123-4567
						</li>
						<li>
							example@huddle.com
						</li>
					</ul>
					<ul>
						<li>
							About Us
						</li>
						<li>
							Jobs
						</li>
						<li>
							Press
						</li>
						<li>
							Blog
						</li>
					</ul>

					<ul>
						<li>
							Career
						</li>
						<li>
							Terms
						</li>
						<li>
							Privacy
						</li>
					</ul>

					<ul className="social-media">
						<li>
							<a className="circle" href="#">
								<i className="fab fa-facebook-f"></i>
							</a>
						</li>
						<li>
							<a className="circle" href="#">
								<i className="fab fa-twitter"></i>
							</a>
						</li>
						<li>
							<a className="circle" href="#">
								<i className="fab fa-instagram"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
            <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. Coded by <a href="https://sueldosales.github.io/"><strong>Sueldo Sales</strong></a>.</p>
		</footer>
    );
}

export default Footer;