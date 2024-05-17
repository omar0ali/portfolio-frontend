import { Colors } from "./Colors";

interface ButtonElement {
    text: string;
    color: Colors;
    onClick: () => void;
}

export default function Button({ text, color, onClick }: ButtonElement) {
    const className = function (color: Colors): string {
        return `btn btn-${color}`;
    };
    return (
        <button
            style={{ margin: "5px" }}
            type="button"
            onClick={onClick}
            className={`btn btn-${className(color)}`}
        >
            {text}
        </button>
    );
}
