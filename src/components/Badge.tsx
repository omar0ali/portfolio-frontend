import { Colors } from "./Colors";
export default function Badge(
    text: string,
    color: Colors,
    rounded: "rounded" | "rounded-pill" | "rounded-circle" = "rounded"
) {
    const className = function (color: Colors): string {
        return `badge text-bg-${color} ${rounded ? rounded : null}`;
    };
    return <span className={className(color)}>{text}</span>;
}
