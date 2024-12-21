import {Link} from "react-router-dom";
function Nav (){
    return (
        <nav>
            
            <Link to="/">Home</Link>
            <Link to="/booking">Book a Table</Link>
           
        </nav>
    );
}
export default Nav;