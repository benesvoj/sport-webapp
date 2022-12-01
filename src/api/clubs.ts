import missingLogo from '../images/clubs/missing.png'
import pustejovLogo from '../images/clubs/pustejov.png'
import rokytniceLogo from '../images/clubs/rokytnice.png'
import staravesLogo from '../images/clubs/staraves.png'
import studenkaLogo from '../images/clubs/studenka.png'
import svinovLogo from '../images/clubs/svinov.svg'
import vitkoviceLogo from '../images/clubs/vitkovice.png'
export const clubs = [
  {
    id: 1,
    order: 1,
    name: 'TJ Sokol Svinov',
    logo: svinovLogo,
    membersCount: 120,
    teamCount: 8,
  },
  {
    id: 2,
    order: 2,
    name: 'SK Studenka',
    logo: studenkaLogo,
    membersCount: 120,
    teamCount: 8,
  },
  {
    id: 3,
    order: 3,
    name: 'TJ Pustejov',
    logo: pustejovLogo,
    membersCount: 120,
    teamCount: 8,
  },
  {
    id: 4,
    order: 4,
    name: 'SSK Vitkovice',
    logo: vitkoviceLogo,
  },
  {
    id: 5,
    order: 5,
    name: 'TJ Stara Ves nad Ondrejnici',
    logo: staravesLogo,
    membersCount: 120,
    teamCount: 8,
  },
  {
    id: 6,
    order: 6,
    name: 'TJ Sokol Rokytnice',
    logo: rokytniceLogo,
    membersCount: 120,
    teamCount: 8,
  },
  {
    id: 7,
    order: 7,
    name: 'Sokol Nelesovice',
    logo: missingLogo,
    membersCount: 120,
    teamCount: 8,
  },
  {
    id: 8,
    order: 8,
    name: 'Sokol Kokory',
    logo: missingLogo,
    membersCount: 120,
    teamCount: 8,
  },
  {
    id: 9,
    order: 9,
    name: 'TJ Chropyne',
    logo: missingLogo,
    membersCount: 120,
    teamCount: 8,
  },
  {
    id: 10,
    order: 10,
    name: '1.NH Brno',
    logo: missingLogo,
    membersCount: 120,
    teamCount: 8,
  },
]

export const getClubs = () => clubs
