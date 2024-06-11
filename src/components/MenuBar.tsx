interface MenuBar {
    menuItems: { item_name: string; item_link: string }[];
    title: string;
}

export function MenuBar(props: MenuBar) {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary rounded">
                <div className="container-fluid">
                    <a className="navbar-brand">{props.title}</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {props.menuItems
                                ? props.menuItems.map((item) => menuItem(item))
                                : menuItem({
                                      item_name: "No Items",
                                      item_link: "#",
                                  })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

function menuItem(item: { item_name: string; item_link: string }) {
    return (
        <li key={item.item_name} className="nav-item">
            <a
                className="nav-link active"
                aria-current="page"
                href={item.item_link}
            >
                {item.item_name}
            </a>
        </li>
    );
}
