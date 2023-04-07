import React from 'react'
import styled from 'styled-components'
import { General, AccountManagement } from './_faq-data'
import { SectionContainer } from 'components/containers'
import { Localize } from 'components/localization'
import { Header, Accordion, AccordionItem } from 'components/elements'
import DotPattern from 'images/svg/partners/dot-pattern.svg'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'

const AccordionWrapper = styled.div`
    max-width: 99.6rem;
    margin: 0 auto;
    position: relative;
    z-index: 2;

    @media ${device.tablet} {
        margin: 0 16px;
    }
`

const RelativeContainer = styled(SectionContainer)`
    position: relative;
    overflow: hidden;
`

const TopLeftDot = styled.img`
    position: absolute;
    top: 4px;
    left: 0;
`
const BottomRightDot = styled.img`
    position: absolute;
    bottom: 16px;
    right: 0;
`

const Faq = () => {
    const parent_style = {
        marginBottom: '4rem',
    }

    const customStyle = (array, index) => {
        return index !== array.length - 1
            ? {
                  parent_style: parent_style,
              }
            : {}
    }

    const item_style = {
        padding: '8px 24px 24px',
        background: 'var(--color-grey-4)',
    }
    const header_style = {
        padding: '1.6rem 4rem',
        borderRadius: '8px',
        border: 'none',
    }
    const { is_p2p_allowed_country } = useRegion()

    const accordion_data = [
        {
            id: 'faqs_01',
            title: '_t_General_t_',
            component: (
                <>
                    <General />
                </>
            ),
            class_name: 'general',
        },
        {
            id: 'faqs_02',
            title: '_t_Account management_t_',
            component: (
                <>
                    <AccountManagement />
                </>
            ),
            class_name: 'account-management',
        },
    ]

    return (
        <RelativeContainer padding={is_p2p_allowed_country ? '5rem 0' : '0 0 5rem'}>
            <Header as="h2" size="3.6rem" mb="3.2rem" align="center">
                <Localize translate_text="_t_FAQs_t_" />
            </Header>
            <AccordionWrapper id="payment-agent-faq-list">
                <Accordion has_single_state>
                    {accordion_data.map((item, index) => {
                        const parentStyle = customStyle(accordion_data, index)
                        return (
                            <AccordionItem
                                header={<Localize translate_text={item.title} />}
                                style={item_style}
                                header_style={header_style}
                                plus
                                class_name="general"
                                key={item.id}
                                {...parentStyle}
                            >
                                {item.component}
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </AccordionWrapper>
            <TopLeftDot src={DotPattern} />
            <BottomRightDot src={DotPattern} />
        </RelativeContainer>
    )
}

export default Faq
