import { Box, HStack, Heading } from '@chakra-ui/react'
import { MenuItemProps } from '../../types/common/Module'
import React from 'react'

type HeaderProps = {
  module?: MenuItemProps
}
export const Header = (props: HeaderProps) => {
  return (
    <HStack align='center'>
      <Box width='auto' p={4}>
        <Heading size='xl' variant='black'>
          Text
        </Heading>
      </Box>
    </HStack>
  )
}
