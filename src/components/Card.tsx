interface CardDetails {
    wide?: boolean;
    title: string;
    subTitle?: string;
    img?: { src: string; alt: string };
    text: string;
    btn?: { href: string; text: string };
    links?: { href: string; text: string }[];
}
export function Card(props: CardDetails) {
    return (
        <>
            <div
                className={props.wide ? "card mb-3" : "card"}
                style={{ width: "18rem", marginTop: "10px" }}
            >
                {props.img ? (
                    <img
                        src={props.img.src}
                        className="card-img-top"
                        alt={props.img.alt}
                    />
                ) : null}
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    {props.subTitle ? (
                        <h6
                            style={{ paddingBottom: "10px" }}
                            className="card-subtitle mb-2 text-body-secondary"
                        >
                            {props.subTitle}
                        </h6>
                    ) : null}
                    <p className="card-text">{props.text}</p>
                    {props.btn ? (
                        <div
                            style={{
                                paddingBottom: "10px",
                            }}
                        >
                            <a
                                href={props.btn.href}
                                className="btn btn-primary"
                            >
                                {props.btn.text}
                            </a>
                        </div>
                    ) : null}
                    {props.links
                        ? props.links.map((item) => (
                              <a href={item.href} className="card-link">
                                  {item.text}
                              </a>
                          ))
                        : null}
                </div>
            </div>
        </>
    );
}
