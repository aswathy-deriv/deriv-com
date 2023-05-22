import React from 'react'
import BannerText from './banner-text'
import { HomepageBannerType } from './types'
import { flex_container, item_container } from './styles.module.scss'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'

interface HomepageBannerProps {
    item: HomepageBannerType
}

const HomePageWrapper = ({ item }: HomepageBannerProps) => {
    return (
        <Container.Fixed as="section" bgcolor="white" className={item_container} pt="10x">
            <Flex.Box className={flex_container} direction="col-reverse" lg={{ direction: 'row' }}>
                <BannerText item={item} />
                {/*change it*/}
                <Flex.Box md={{ ml: '40x' }}>{item.image}</Flex.Box>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default HomePageWrapper
