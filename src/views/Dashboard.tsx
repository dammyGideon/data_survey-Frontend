import { Nav, Navbar } from 'react-bootstrap';
import {NavLink } from "react-bootstrap";
const Dashboard=() => {
    return (
        <Navbar className="flex-column Sidebar">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/project">Users</Nav.Link>
                </Nav.Item>

            </Navbar>
    )
}
export default Dashboard