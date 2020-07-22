import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavComponent() {
	return (
		<div className="bg-emphasis">
			<Navbar bg="transparent" expand="md">
				<Navbar.Brand href="#home" className="logo-name text-light">
					F I T O M
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mr-5">
					<div>
						<Nav className="mr-auto">
							<Nav.Link href="#home" className="mr-2 active ">
								HOME
							</Nav.Link>
							<Nav.Link href="#home" className="mr-2 ">
								SERVICES
							</Nav.Link>
							<Nav.Link href="#home" className="mr-2 ">
								ABOUT
							</Nav.Link>
							<Nav.Link href="#link" className="mr-2 ">
								FAQ
							</Nav.Link>
						</Nav>
					</div>
				</Navbar.Collapse>
			</Navbar>
			<Container>
				<Row className="box row align-items-center">
					<Col lg="8">
						<h1 class=" text-light slogan-1 slogan-anim">
							Your Fitness <small>Mantra</small>
						</h1>
						<p class="slogan-2 text-light">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sint quos molestias
							numquam, cum minima qui itaque ducimus id repellat.
						</p>
						<button class="btn btn-outline-light">Get Started</button>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default NavComponent;
