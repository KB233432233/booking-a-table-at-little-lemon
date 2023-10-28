import bruchetta from '../images/bruchetta.svg';
import greek_salad from '../images/greek_salad.jpg';
import lemon_dessert from '../images/lemon_dessert.jpg';




const Card = ({ img, heading, price, description }) => {
    return (
        <div className="card">
            <img src={img} alt="" />
            <div className="card-head-and-price">
                <h3>{heading}</h3>
                <span>{price}</span>
            </div>
            <p className="desc">{description}</p>
            <span className='order'>Order a delivery</span>
        </div>
    )

}



export default function SpecialsSection() {
    return (
        <section className="Specials">
            <div className="specials-heading">
                <h2>Specials</h2>
                <button>Online Menu</button>
            </div>
            <div className="card-container">
                <Card img={greek_salad} heading={'Greek salad'}
                    price={'$12.99'} description={'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '} />
                <Card img={bruchetta} heading={'Bruchetta'}
                    price={'$5,99'} description={'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '} />
                <Card img={lemon_dessert} heading={'Lemon Dessert'}
                    price={'$5,00'} description={'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'} />
            </div>
        </section>
    );
}