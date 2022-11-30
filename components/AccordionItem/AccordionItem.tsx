import {
    AccordionItem as AI,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading
  } from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'
type Props = {
    question: string
    answer: string
}
  
const AccordionItem: FC<PropsWithChildren<Props>> = ({
    question,
    answer
}) => {
    return (
        <AI>
            <h2>
                <AccordionButton>
                <Box flex='1' textAlign='left'>
                    <Heading variant={'heading3'}>
                    {question}
                    </Heading>
                </Box>
                <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                {answer}
            </AccordionPanel>
        </AI>
    )
}

export default AccordionItem