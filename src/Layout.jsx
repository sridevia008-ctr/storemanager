import { Outlet } from "react-router-dom";
import NavBar from "./component/NavBar";

export default function Layout(){
    return (
        <div className="bg-gray-100">
            <NavBar />
            <main className="bg-gray-100">
                <Outlet />
            </main>
        </div>
    )
}
