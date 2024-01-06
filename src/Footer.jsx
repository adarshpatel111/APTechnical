import React from 'react'
import { NavLink,Link } from 'react-router-dom';
export default function Footer() {
    return (
        <>
            {/* style={{backgroundColor:"black",display:"flex",justifyContent:"center"}} */}
            <footer className="container w-100 text-center" >

                <div className="container">
                    <footer className="py-3 my-4">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li className="nav-item mx-2"><Link to="/" href="#" className="nav-link px-2 text-body-secondary">Home</Link></li>
                            <li className="nav-item mx-2"><Link to="/about" href="#" className="nav-link px-2 text-body-secondary">About</Link></li>
                            <li className="nav-item mx-2"><Link to="/service" href="#" className="nav-link px-2 text-body-secondary">Services</Link></li>
                            <li className="nav-item mx-2"><Link to="/contact" href="#" className="nav-link px-2 text-body-secondary">Contact</Link></li>
                        </ul>
                        <p className="text-center text-body-secondary">© 2023 AP Technical, Developed By AP</p>
                    </footer>
                </div>
            </footer>
        </>
    );
};
// const footer = styled.footer`

// `;
