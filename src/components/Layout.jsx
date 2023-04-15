import Header from "./Header"
import Sidebar from "./Sidebar"


export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="main-template">
                        <Sidebar />
                        {children}
                    </div>
                </div>
            </main>
        </>
    )
}
