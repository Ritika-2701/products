import Header from "../components/Header";
import {Button, Row, Col, Card, Input} from "antd";
import { useState } from "react";
import camera from "../components/camera.png"
import honda from "../components/hondaCar.jpeg"
import fridge from "../components/fridge.jpeg"
const { Search } = Input;
const { Meta } = Card;
const ProfileScreen = () => {
   
    const [products, setProducts] = useState([
        {"name": "PS5", "pic": fridge, "id": 24},
        {"name": "PS5", "pic": honda, "id": 22},
        {"name": "Honda", "pic": "data:image/jpeg;base64,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", "id": 23},
        {"name": "Camera", "pic": camera, "id": 21},
    ])
    const total = [
        {"name": "PS5", "pic": fridge, "id": 24},
        {"name": "PS5", "pic": honda, "id": 22},
        {"name": "Honda", "pic": "data:image/jpeg;base64,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", "id": 23},
        {"name": "Camera", "pic": camera, "id": 21},
    ]
    const onSearch = (e : string) => {
        console.log(e)
        let arr = total;
        arr = arr.filter(item => item.name.toLowerCase().includes(e.toLowerCase()))
        setProducts([ ...arr ]);
    }
    return (
        <div>
             <Header/>
        <div style={{float:"left", width:"auto", marginLeft:"5%", marginTop:"50px"}}>
            <br></br>
            <h1>James</h1>
            <h2>Items Sold: 15</h2>
            <h2> Items Puchased: 50</h2>
            <br></br><br></br>
            <a href="/add_product"> <Button size="large" style={{backgroundColor: "#50C878", marginLeft:"2%", marginTop:"-10px"}}>
                AddProduct
            </Button></a>
        </div>
        <div style={{float:"right", width:"70%", marginRight:"5%", marginTop:"10px"}}>
            <div style={{textAlign: "center", marginTop: 50, marginBottom: 50}}>     
                <Search placeholder="Input search text" allowClear onSearch={onSearch} style={{ width: 1000 }} />
            </div>
            <div style={{textAlign: "center", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                <Row >
                    {
                        products.map((item: { pic: any; name: any; }) => {
                            return <Col sm={8} >
                                <Card
                                    hoverable
                                    style={{ width: 300, margin: "auto", marginBottom: 20 }}
                                    cover={<img  src={item?.pic} />}
                                >
                                    <Meta title={item?.name} description={<>
                                    <a href="#"><Button style={{backgroundColor: "red", color:"white", borderRadius:"10%"}}>
                                        Sell
                                        </Button></a>
                                        </>} />
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </div>
        </div>
        </div>
    )
}
export default ProfileScreen;