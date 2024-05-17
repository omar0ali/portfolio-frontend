interface CardHeader {
    center?: boolean;
    header: string;
    title: string;
    text: JSX.Element;
    links?: { href: string; text: string }[];
    footer?: string;
}

function link(link: string, text: string) {
    return (
        <>
            <a href={link} className="btn btn-primary">
                {text}
            </a>
        </>
    );
}

function footer(text: string) {
    return (
        <>
            <div className="card-footer text-body-secondary">{text}</div>
        </>
    );
}

export default function CardHeader(props: CardHeader) {
    return (
        <>
            <div className={props.center ? "card" : "card text-center"}>
                <h5 className="card-header">{props.header}</h5>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
                {props.links
                    ? props.links.map((item) => link(item.href, item.text))
                    : null}
            </div>
            {props.footer ? footer(props.footer) : null}
        </>
    );
}
