interface Props {
    url: string;
    replaceWith?: string;
}
export default function Link(props: Props) {
    return (
        <a href={props.url} className="alert-link">
            {props.replaceWith ? props.replaceWith : props.url}
        </a>
    );
}
