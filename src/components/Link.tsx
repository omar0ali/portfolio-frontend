export default function Link(link: string, replaceWith?: string) {
    return (
        <link href={link} className="alert-link">
            {replaceWith ? replaceWith : link}
        </link>
    );
}
