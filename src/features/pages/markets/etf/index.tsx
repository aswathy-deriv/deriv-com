import React from 'react'
import ETFSteps from './etf-steps'
import WhyETFTrade from './why-etf-trade'
import HomePage from './home-page'
import InstrumentsTableEtf from './instruments-etf'
import OtherMarkets from './other-markets'

const ETFMarket = () => {
    return (
        <>
            <HomePage />

            <InstrumentsTableEtf />
            <WhyETFTrade />
            <ETFSteps />
            <OtherMarkets />
        </>
    )
}

export default ETFMarket
