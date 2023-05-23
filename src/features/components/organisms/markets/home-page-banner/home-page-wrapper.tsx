import React from 'react'
import BannerText from './banner-text'
import { HomepageBannerType } from './types'
import { flex_container } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'

interface HomepageBannerProps {
    item: HomepageBannerType
}

const HomePageWrapper = ({ item }: HomepageBannerProps) => {
    return (
        <Flex.Box
            className={flex_container}
            direction="col-reverse"
            justify="center"
            md={{ direction: 'row', justify: 'end', align: 'start' }}
        >
            <BannerText item={item} />
            {/*change it*/}
            <Flex.Box md={{ ml: '40x' }}>{item.image}</Flex.Box>
        </Flex.Box>
    )
}

export default HomePageWrapper
