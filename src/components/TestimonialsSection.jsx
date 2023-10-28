
const TestCard = ({ img, rating, name, reviweText }) => {
    return (
        <div className="testcard">
            <div>
                <img src={img} alt="" />
                <p>{rating}</p>
                <p>{reviweText}</p>
            </div>
            <div><h4>{name}</h4></div>
        </div>
    );
}


export default function TestimonialsSection() {
    return (
        <section className="Testimonials">
            <h2>Testimonials</h2>
            <div className="testi-con">
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
            </div>
        </section>
    );
}