import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react'

export const Dashboard = () => {
  return (
    <Card bg={'white'}>
      <CardHeader>
        <Heading>Nebližší utkání</Heading>
      </CardHeader>
      <CardBody>Seznam nebližších utkání</CardBody>
    </Card>
  )
}
