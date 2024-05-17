import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Menu, MenuBar } from "./components/MenuBar";
export function App() {
    const NavBarItems: Menu[] = [
        { item_name: "Home", item_link: "/" },
        { item_name: "Projects", item_link: "/projects" },
        { item_name: "About", item_link: "/about" },
    ];
    return (
        //Pages, TODO: you can also add a navbar here.
        <>
            {MenuBar("Omar BaGunaid", NavBarItems)}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}
