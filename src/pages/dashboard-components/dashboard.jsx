import BasicDetails from "../../components/BasicDetails"
import Layout from "../../components/Layout"


export default function Dashboard() {
    return (
        <Layout>
            <div className="page-template">
                <h1>Dashboard</h1>
                <BasicDetails />
            </div>
        </Layout>
    )
}
