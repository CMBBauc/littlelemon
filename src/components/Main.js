import '../styles/Main.css'
import Greek from '../assets/greeksalad.jpg';
import Bruchetta from '../assets/bruchetta.jpg';
import LemonDessert from '../assets/lemondessert.jpg';

export default function Main() {
    return(
        <main>
            <div className='titlecontainer'>
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
            </div>
            <div className='container'>
                <div className='card'>
                    <img src={Greek} alt="menu item"></img>
                    <div className='cardtitle'>
                        <h1>Greek Salad</h1>
                        <p className='price'>#12.99</p>
                    </div>
                    <p className='carddescription'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <h2>Order a delivery</h2>
                </div>


                <div className='card'>
                    <img src={Bruchetta} alt="menu item"></img>
                    <div className='cardtitle'>
                        <h1>Bruchetta</h1>
                        <p className='price'>$5.99</p>
                    </div>
                    <p className='carddescription'>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <h2>Order a delivery</h2>
                </div>
                <div className='card'>
                    <img src={LemonDessert} alt="menu item"></img>
                    <div className='cardtitle'>
                        <h1>Lemmon Dessert</h1>
                        <p className='price'>$5.00</p>
                    </div>
                    <p className='carddescription'>This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined</p>
                    <h2>Order a delivery</h2>
                </div>
            </div>
        </main>
    );
};

