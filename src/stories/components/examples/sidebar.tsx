import {
  Dropdown,
  DropdownButton,
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection
} from "../../../components";
import {navItems} from "./items";


export const SidebarExample = () => <Sidebar>
  <SidebarHeader>
    <Dropdown>
      <DropdownButton as={SidebarItem} className="lg:mb-2.5">
        {/*<Avatar src="/tailwind-logo.svg"/>*/}
        <SidebarLabel>Tailwind Labs</SidebarLabel>
        {/*<ChevronDownIcon/>*/}
      </DropdownButton>
      {/*<TeamDropdownMenu/>*/}
    </Dropdown>
  </SidebarHeader>
  <SidebarBody>
    <SidebarSection>
      {navItems.map(({label, url}) => (
        <SidebarItem key={label} href={url}>
          {label}
        </SidebarItem>
      ))}
    </SidebarSection>
  </SidebarBody>
</Sidebar>