interface CardListGroup {
    img?: { src: string; alt: string };
    cardBody?: { title: string; desc: string };
    header?: string;
    items: string[];
    footer?: string;
    links?: { src: string; text: string }[];
}

function groupItem(text: string) {
    return (
        <li key={text} className="list-group-item">
            {text}
        </li>
    );
}

function header(text: string) {
    return <div className="card-header">{text}</div>;
}

function footer(text: string) {
    return <div className="card-footer">{text}</div>;
}

function link(src: string, text: string) {
    return (
        <>
            <a href={src} className="card-link">
                {text}
            </a>
        </>
    );
}

export default function CardListGroup(cardList: CardListGroup) {
    return (
        <>
            <div className="card" style={{ marginTop: "10px", width: "18rem" }}>
                {cardList.img ? (
                    <img
                        src={cardList.img.src}
                        className="card-img-top"
                        alt={cardList.img.alt}
                    ></img>
                ) : null}
                {cardList.cardBody ? (
                    <div className="card-body">
                        <h5 className="card-title">
                            {cardList.cardBody.title}
                        </h5>
                        <p className="card-text">{cardList.cardBody.desc}</p>
                    </div>
                ) : null}
                {cardList.header ? header(cardList.header) : null}
                <ul className="list-group list-group-flush">
                    {cardList.items
                        ? cardList.items.map((item) => groupItem(item))
                        : null}
                </ul>
                {cardList.links ? (
                    <div className="card-body">
                        {cardList.links.map((item) =>
                            link(item.src, item.text)
                        )}
                    </div>
                ) : null}
                {cardList.footer ? footer(cardList.footer) : null}
            </div>
        </>
    );
}
