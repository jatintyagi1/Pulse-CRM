import { Col, Row } from 'antd';

import SummaryCard from './components/SummaryCard';

export default function DashboardModule() {
    return (
        <>
            <Row gutter={[32, 32]}>
                <SummaryCard
                    title='Invoices'
                    prefix='This month'
                />
                <SummaryCard
                    title='proforma invoices'
                    prefix='This month'
                />
                <SummaryCard
                    title='offers'
                    prefix='This month'
                />
                <SummaryCard
                    title='Unpaid'
                    prefix='Not Paid'
                />
            </Row>
            <div className='space30'></div>
            <Row gutter={[32, 32]}>
                <Col className="gutter-row w-full" sm={{ span: 24 }} lg={{ span: 12 }}>
                    <div className="whiteBox shadow pad20" style={{ height: '100%' }}>
                        <h3 style={{ color: '#22075e', marginBottom: 5, padding: '0 20px 20px' }}>
                            Recent Invoices
                        </h3>

                    </div>
                </Col>

                <Col className="gutter-row w-full" sm={{ span: 24 }} lg={{ span: 12 }}>
                    <div className="whiteBox shadow pad20" style={{ height: '100%' }}>
                        <h3 style={{ color: '#22075e', marginBottom: 5, padding: '0 20px 20px' }}>
                            Recent Quotes
                        </h3>
                    </div>
                </Col>
            </Row>
        </>
    )
}