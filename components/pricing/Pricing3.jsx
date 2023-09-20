import Link from "next/link";

const Pricing3 = () => {
    const pricingCotent = [
        {
            id: 1,
            img: "images/index-13/images/servicio-popular-1.jpg",
            title: "Carpintería",
        },
        {
            id: 2,
            img: "images/index-13/images/servicio-popular-2.jpg",
            title: "Mecánico",
        },
        {
            id: 3,
            img: "images/index-13/images/servicio-popular-3.jpg",
            title: "Electricista",
        },
    ];

    return (
        <>
            {pricingCotent.map((item) => (
                <div className="col-lg-4 col-md-6" key={item.id}>
                    <div className="pricingCard">
                        <div className="pricingCard__img">
                            <img className="rounded" src={item.img} alt="images" />
                        </div>
                        <h4 className="pricingCard__title pt-3">{item.title}</h4>
                        <div className="pricingCard__text text-left">Lorem impsut</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Pricing3;
