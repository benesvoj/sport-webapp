import { Link, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { MemberProps } from '../../types/common/Helpers'
import { getMembers } from '../../api/members'
import React from 'react'

export const MembersList = () => {
  let members = getMembers()

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Cislo registrace</Th>
            <Th>Jmeno</Th>
            <Th>Clenstvi od</Th>
            <Th>Oddil</Th>
          </Tr>
        </Thead>
        <Tbody>
          {members.map(member => {
            return (
              <Tr key={member.id}>
                <Td>{member.id}</Td>
                <Td>{member.name}</Td>
                <Td>{member.validFrom}</Td>
                <Td>{member.club}</Td>
                <Td>
                  <Link href=''>Detail</Link>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
