interface CardLeftImage {
    img?: { src: string; alt: string };
    title: string;
    text: string;
    subText: string;
}

function img(src: string, alt: string) {
    return (
        <div className="col-md-4">
            <img src={src} className="img-fluid rounded-start" alt={alt} />
        </div>
    );
}

export default function CardLeftImage(props: CardLeftImage) {
    return (
        <>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    {props.img ? img(props.img.src, props.img.alt) : null}
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.text}</p>
                            <p className="card-text">
                                <small className="text-body-secondary">
                                    {props.subText}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
