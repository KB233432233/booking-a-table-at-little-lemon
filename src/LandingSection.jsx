import restauranfood from './images/restauranfood.jpg';


export default function LandingSection() {
    return (
        <section className="Landing">
            <div className='firstdiv'>
                <h2>Little Lemon</h2>
                <h4>Chicago</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Reserve a table</button>
            </div>
            <div className='seconddiv'><img src={restauranfood} alt='' /></div>
        </section>
    );
}