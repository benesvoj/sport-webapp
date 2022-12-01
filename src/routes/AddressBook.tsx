import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { getClubs } from '../api/clubs'
import React from 'react'

export const AddressBook = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  let clubs = getClubs()

  return (
    <VStack w={'max'}>
      <Card bg='white'>
        <CardHeader>
          <Flex gap={'10'} alignItems={'center'}>
            <Box>
              <Heading size='md'>Seznam registrovaných oddílů</Heading>
            </Box>
            <Spacer />
            <Box>
              <Button colorScheme='blue' onClick={onOpen} size={'sm'}>
                Přidej oddíl
              </Button>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody>
          <TableContainer>
            <Table size='sm' variant='simple'>
              <Thead>
                <Tr>
                  <Th>Poradi</Th>
                  <Th>Logo</Th>
                  <Th>Nazev</Th>
                  <Th>Pocet clenu</Th>
                  <Th>Pocet tymu</Th>
                </Tr>
              </Thead>
              <Tbody>
                {clubs.map(club => {
                  return (
                    <Tr key={club.id} onClick={onOpen}>
                      <Td>{club.order}</Td>
                      <Td>
                        <Image src={club.logo} h={25} w={25} />
                      </Td>
                      <Td>{club.name}</Td>
                      <Td>{club.membersCount === undefined ? '-' : club.membersCount}</Td>
                      <Td>{club.teamCount === undefined ? '-' : club.teamCount}</Td>
                      <Td>
                        <Link href=''>Detail</Link>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detail tymu</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Nazev</FormLabel>
              <Input ref={initialRef} placeholder='Nazev' />
              <FormLabel>Zkraceny nazev</FormLabel>
              <Input ref={initialRef} placeholder='Zkraceny nazev' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Adresa</FormLabel>
              <Input ref={initialRef} placeholder='Adresa' />
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pridej tym</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nazev</FormLabel>
              <Input ref={initialRef} placeholder='Nazev' />
              <FormLabel>Zkraceny nazev</FormLabel>
              <Input ref={initialRef} placeholder='Zkraceny nazev' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Adresa</FormLabel>
              <Input ref={initialRef} placeholder='Adresa' />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <Button onClick={onClose}>Zrusit</Button>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Ulozit
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  )
}
