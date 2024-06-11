import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { MenuBar } from "./components/MenuBar";
export function App() {
    return (
        <>
            <MenuBar
                title="Omar BaGunaid"
                menuItems={[
                    { item_name: "Home", item_link: "/" },
                    { item_name: "Projects", item_link: "/projects" },
                    { item_name: "About", item_link: "/about" },
                ]}
            ></MenuBar>
            <br style={{ padding: "10px" }} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}
