import Header from "../components/Header";
import {Form, Input, Button} from "antd";
const AddProductScreen = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Header />
            <div style={{textAlign: "center", marginTop: 50}}>
                <h1>Add Product</h1>
            </div>
            <div style={{textAlign: "center", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        label="Product Name"
                        name="productname"
                    >
                        <Input style={{marginLeft:"30px"}}/>
                    </Form.Item>
                    <Form.Item
                        label="Product Code"
                        name="productcpde"
                    >
                        <Input style={{marginLeft:"30px"}}/>
                    </Form.Item>
                    <Form.Item
                        label="Purchased From"
                        name="purchasedfrom"
                    >
                          <Input style={{marginLeft:"30px"}}/>
                    </Form.Item>
                    <Form.Item
                        label="Purchased On"
                        name="purchasedon"
                    >
                          <Input style={{marginLeft:"30px"}}/>
                    </Form.Item>
                    <Form.Item
                        label="Purchase Price"
                        name="purchaseprice"
                    >
                          <Input style={{marginLeft:"30px"}}/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default AddProductScreen;