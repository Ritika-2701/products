import Header from "../components/Header";
import {Table} from "antd";

const TrackingScreen = () => {
    const dataSource = [
        {
            key: '1',
            id: 21,
            date: "21/01/2021",
            status: "Bought",
            source: "Walmart"
        },
        {
            key: '2',
            id:22,
            date: "15/05/2021",
            status: "Sold",
        },
        {
            key: '3',
            id:23,
            date: "27/05/2021",
            status: "Bought",
            source: "Walmart"
        },
        {
            key: '4',
            id:24,
            date: "06/08/2021",
            status: "Sold",
        },
    ];
    const columns = [
        {
            title: 'Id',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Source',
            dataIndex: 'source',
            key: 'source',
        },
    ];
    return (
        <div>
            <Header />
            <div style={{textAlign: "center", marginTop: 50}}>
              <span style={{fontWeight:"bold", fontSize:"20px", textAlign:"left"}}>Product Name: Honda Car</span>
              <br></br>
                <h2>Track Orders</h2>
            </div>
            <div style={{margin: 50}}>
            <Table dataSource={dataSource} columns={columns} />
            </div>
        </div>
    )
}
export default TrackingScreen;