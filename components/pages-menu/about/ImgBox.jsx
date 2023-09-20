import Image from "next/image";

const ImgBox = () => {
    const imgContent = [
        {
            id: 1,
            block: [{ img: "index-13/images/servicio-popular-2" }],
        },
        {
            id: 2,
            block: [{ img: "resource/img-nosotros-1" }, { img: "resource/img-nosotros-2" }],
        },
        {
            id: 3,
            block: [{ img: "resource/img-nosotros-3" }, { img: "resource/img-nosotros-4" }],
        },
        {
            id: 4,
            block: [{ img: "index-13/images/servicio-popular-1" }],
        },
    ];

    return (
        <div className="images-box">
            <div className="row">
                {imgContent.map((item) => (
                    <div className="column col-lg-3 col-md-6 col-sm-6" key={item.id}>
                        {item.block.map((itemImg, i) => (
                            <figure className="image" key={i}>
                                <Image className="rounded" src={`/images/${itemImg.img}.jpg`} alt="about image" width={300} height={200} />
                            </figure>
                        ))}
                    </div>
                ))}
                {/* End .col */}
            </div>
        </div>
    );
};

export default ImgBox;
