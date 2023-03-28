import '../styles/Main.css'
import Greek from '../assets/greeksalad.jpg';
import Bruchetta from '../assets/bruchetta.jpg';
import LemonDessert from '../assets/lemondessert.jpg';
import Card from './Card';


const specialsData = [
    {
      img: Greek,
      title: "Greek Salad",
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      img: Bruchetta,
      title: "Bruschetta",
      price: 5.99,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      img: LemonDessert,
      title: "Lemon Dessert",
      price: 5.00,
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];



  function Main() {
    const specialsCards = specialsData.map((item) => {
      return (
        <Card
          key={item.title}
          image={item.img}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      );
    });
  
    return (
      <main>
        <section className="specials">
          <div className="top">
            <h1>This Weeks Specials!</h1>
            <button>Online Menu</button>
          </div>
          <div className="cards">{specialsCards}</div>
        </section>
        <br></br>
      </main>
    );
  }
  
  export default Main;

