import { Row } from 'antd';

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
                    title='Quotes'
                    prefix='This month'
                />
                <SummaryCard
                    title='Paid'
                    prefix='This month'
                />
                <SummaryCard
                    title='Unpaid'
                    prefix='This month'
                />
            </Row>
            <div className='space30'></div>
        </>
    )
}