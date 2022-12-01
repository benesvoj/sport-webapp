import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spacer,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react'
import { Form } from 'react-router-dom'
import { MembersList } from '../modules/RegisterOffice/MembersList'
import { getAreas } from '../api/areas'
import { getCategories } from '../api/category'
import { getClubs } from '../api/clubs'
import { getMembers } from '../api/members'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'

export const RegisterOffice = () => {
  let members = getMembers()
  let clubs = getClubs()
  let areas = getAreas()
  let categories = getCategories()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const getRegNumber = () => {
    const maxValue = Math.max(...members.map(m => m.id))

    return maxValue + 1
  }

  const { register, handleSubmit } = useForm()

  const onSumbit = (data: any) => {
    console.log(JSON.stringify(data))
  }

  return (
    <Stack w={'100%'}>
      <Card bg={'white'}>
        <CardHeader>
          <Flex alignItems={'center'}>
            <Box>
              <Heading>Martika</Heading>
            </Box>
            <Spacer />
            <Box>
              <Button colorScheme={'blue'} size={'sm'} onClick={onOpen}>
                Pridat clena
              </Button>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody>
          <MembersList />
        </CardBody>
      </Card>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={'6xl'}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSumbit)}>
            <ModalHeader>Přidat člena</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={8}>
              <HStack spacing={'10px'}>
                <Box>
                  <FormControl>
                    <FormLabel>Titul před</FormLabel>
                    <Input w='10vh' />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Jméno</FormLabel>
                    <Input
                      // ref={initialRef}
                      placeholder='Vlož jméno'
                      {...register('firstName')}
                      // onChange={e => setNewMember(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Příjmení</FormLabel>
                    <Input ref={initialRef} placeholder='Vlož příjmení' />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel>Titul za</FormLabel>
                    <Input w='10vh' />
                  </FormControl>
                </Box>
                <Spacer />
                <Box>
                  <FormLabel>Cislo registrace</FormLabel>
                  <Text fontWeight={900}>{getRegNumber()}</Text>
                </Box>
              </HStack>
              <HStack spacing={'10px'} pt={2} pb={2}>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Rodne cislo</FormLabel>
                    <Input />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel>Datum narozeni</FormLabel>
                    <Input type={'date'} />
                  </FormControl>
                </Box>
                <Box w={'10vh'}>
                  <FormControl>
                    <FormLabel>Vek</FormLabel>
                    <Input disabled={true} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Pohlavi</FormLabel>
                    <Select>
                      <option value={'men'}>Muz</option>
                      <option value={'women'}>Zena</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel>Cizinec</FormLabel>
                    <Checkbox />
                  </FormControl>
                </Box>
              </HStack>
              <Box pt={8} pb={2}>
                <Heading size={'sm'}>Adresa</Heading>
              </Box>
              <HStack spacing={'10px'}>
                <Box w={'30vh'}>
                  <FormControl>
                    <FormLabel>Ulice</FormLabel>
                    <Input ref={initialRef} placeholder='Ulice' />
                  </FormControl>
                </Box>
                <Box w={'10vh'}>
                  <FormControl>
                    <FormLabel>č.p.</FormLabel>
                    <Input />
                  </FormControl>
                </Box>
                <Box w={'10vh'}>
                  <FormControl>
                    <FormLabel>č.o.</FormLabel>
                    <Input />
                  </FormControl>
                </Box>
                <Box w={'30vh'}>
                  <FormControl>
                    <FormLabel>Mesto</FormLabel>
                    <Input />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel>PSC</FormLabel>
                    <Input type={'number'} maxLength={5} />
                  </FormControl>
                </Box>
              </HStack>
              <Box pt={8} pb={2}>
                <Heading size={'sm'}>Oddíl</Heading>
              </Box>

              <HStack spacing={'10px'}>
                <Box w={'30vh'}>
                  <FormControl isRequired>
                    <FormLabel>Oblast</FormLabel>
                    <Select isRequired={true} placeholder={'Vyber oddil'}>
                      {areas.map(area => {
                        return (
                          <option value={area.id} key={area.id}>
                            {area.name} ({area.namShort})
                          </option>
                        )
                      })}
                    </Select>
                  </FormControl>
                </Box>
                <Box w={'30vh'}>
                  <FormControl isRequired>
                    <FormLabel>Mateřský oddíl</FormLabel>
                    <Select isRequired={true} placeholder={'Vyber oddil'}>
                      {clubs.map(club => {
                        return (
                          <option value={club.id} key={club.id}>
                            {club.name}
                          </option>
                        )
                      })}
                    </Select>
                  </FormControl>
                </Box>
                <Box w={'30vh'}>
                  <FormControl isRequired>
                    <FormLabel>Kategorie</FormLabel>
                    <Select isRequired={true} placeholder={'Vyber oddil'}>
                      {categories.map(category => {
                        return (
                          <option value={category.id} key={category.id}>
                            {category.name} ({category.nameShort})
                          </option>
                        )
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </HStack>
            </ModalBody>
            <ModalFooter>
              <ButtonGroup>
                <Button onClick={onClose}>Zrusit</Button>
                <Button
                  colorScheme='blue'
                  mr={3}
                  onClick={onClose}
                  type={'submit'}
                  onSubmit={onSumbit}
                >
                  Ulozit
                </Button>
              </ButtonGroup>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Stack>
  )
}
