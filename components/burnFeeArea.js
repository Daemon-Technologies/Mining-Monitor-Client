import { Col, Row, Card, Table} from 'antd';
import MultiArea from './MultiArea'

const BurnFeeArea = ({data}) => {
    
    return (

        <Card 
            bordered={false}  
            bodyStyle={{ padding: '20px 24px 8px 24px', marginTop: '20px' }} 
            style={{height: 600}}
            hoverable
            title = {"Total Satoshis Spent Per Miner"}
        >   
            <MultiArea data={data.data}/>
        </Card>

    )
}

export default BurnFeeArea;