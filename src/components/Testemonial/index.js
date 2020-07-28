import React from 'react';

function Testemonial() {
    return (
        <section className="light-blueish">
			<div className="container">
				<div className="flex">
					<div>
						<h2>Stay productive, wherever you are</h2>
						<p>
							Never let location be an issue when accessing your files. Fylo has
							you covered for all of your file storage needs.
						</p>
						<p>
							Securely share files and folders with friends, family and
							colleagues for live collaboration. No email attachments required!
						</p>

						<a className="green" href="#">
							See how Fylo works
							<img src="./img/icon-arrow.svg" alt="arrow" />
						</a>

						<div className="testimonial-box">
							<img src="./img/icon-quotes.svg" alt="quote" />
							<p>
								Fylo has improved our team productivity by an order of
								magnitude. Since making the switch our team has become a
								well-oiled collaboration machine.
							</p>
							<div className="user-info">
								<div>
									<img src="./img/avatar-testimonial.jpg" alt="user" />
								</div>
								<div>
									<h4>
										Kyle Burton
									</h4>
									<small>
										Founder & CEO, Huddle
									</small>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img className="illustration" src="./img/illustration-2.svg" alt="section-img" />
					</div>
				</div>
			</div>
		</section>
    );
}

export default Testemonial;