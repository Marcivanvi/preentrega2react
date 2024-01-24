import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';

const NavBar = () => {
  return (
<header>
    <h1>Tienda de Ropa</h1>
    
    <nav>
        <ul>
            <li>Camperas</li>
            <li>Remeras</li>
            <li>Jeans</li>
        </ul>
    </nav>
    <CardWidget/>
</header>  )
}

export default NavBar