export type MenuItemProps = {
  id: string
  path: string
  parentId?: string
  content?: MenuItemProps[]
  alwaysShowContent?: boolean
}
