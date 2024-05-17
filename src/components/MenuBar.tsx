export interface Menu {
    item_name: string;
    item_link: string;
}

export function MenuBar(title: string, menu: Menu[]) {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary rounded">
                <div className="container-fluid">
                    <a className="navbar-brand">{title}</a>
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
                            {menu
                                ? menu.map((item) => menuItem(item))
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

function menuItem(menu: Menu) {
    return (
        <li key={menu.item_name} className="nav-item">
            <a
                className="nav-link active"
                aria-current="page"
                href={menu.item_link}
            >
                {menu.item_name}
            </a>
        </li>
    );
}
