import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FootComponent() {
	return (
		<div>
			<footer className="footer bg-footer">
				<br />
				<br />
				<br />
				<Container>
					<Row className="justify-content-center">
						<Col md="4">
							<h5 class="text-center slogan-1 text text-light ">Links</h5>
							<ul class="list-unstyled">
								<li class="text-center slogan-2">
									<a href="#" class="text-dark">
										Home
									</a>
								</li>
								<li class="text-center slogan-2">
									<a href="#" class="text-dark">
										About
									</a>
								</li>
								<li class="text-center slogan-2">
									<a href="#" class="text-dark">
										Menu
									</a>
								</li>
								<li class="text-center slogan-2">
									<a href="#" class="text-dark">
										Contact
									</a>
								</li>
							</ul>
						</Col>
						<Col md="4">
							<h5 class="text-center slogan-1 text-light">Our Address</h5>
							<address class="text-center slogan-2 ">
								<div>121, Clear Water Bay Road</div>
								<div>Clear Water Bay, Kowloon</div>
								<div>HONG KONG0</div>
							</address>
						</Col>
						<Col md="4">
							<h5 class="text-center slogan-1 text-light">Contact us</h5>
							<address class="text-center slogan-2">
								<div>Tel.: +852 1234 5678</div>
								<div>Fax: +852 8765 4321</div>
								Email:{' '}
								<a href="mailto:confusion@food.net" class="text-dark">
									confusion@food.net
								</a>
							</address>
						</Col>
					</Row>
				</Container>
				<br />
				<br />
				<Container fluid className="bg-copyright">
					<Row className="justify-content-center">
						<Col sm={6} className="pt-3">
							<p className="text-center ">© Copyright 2020 FITOM by blazeDevWorks</p>
						</Col>
					</Row>
				</Container>
			</footer>
		</div>
	);
}

export default FootComponent;
