import { Colors } from "./Colors";
interface MultiColorCard {
    color: Colors;
    header: string;
    title: string;
    text: string;
}

export default function MultiColorCard(props: MultiColorCard) {
    return (
        <div
            className={`card text-bg-${props.color} mb-3`}
            style={{ maxWidth: "18rem" }}
        >
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
}
