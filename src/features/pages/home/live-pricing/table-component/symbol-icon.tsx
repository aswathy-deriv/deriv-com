import React from 'react'
import * as icons from 'components/elements/symbols-shortcode'
import Image from 'features/components/atoms/image'

const SymbolIcon = ({ icon_src, alt }: { icon_src: string; alt?: string }) => {
    if (icon_src === 'Volatility_150_(1s)_Index')
        return <Image src={icons['Vol_1HZ150V']} width="24px" height="24px" alt={alt} />
    if (icon_src === 'Volatility_250_(1s)_Index')
        return <Image src={icons['Vol_1HZ250V']} width="24px" height="24px" alt={alt} />
    else return <Image src={icons[icon_src]} width="24px" height="24px" alt={alt} />
}

export default SymbolIcon
