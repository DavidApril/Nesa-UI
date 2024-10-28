import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer
} from "../../../components";
import {navItems} from "./items";

export const NavbarExample = () => <Navbar>
  <Dropdown>
    <DropdownButton as={NavbarItem} className="max-lg:hidden">
      {/*<Avatar src="/tailwind-logo.svg"/>*/}
      <NavbarLabel>Tailwind Labs</NavbarLabel>
      {/*<ChevronDownIcon/>*/}
    </DropdownButton>
    {/*<TeamDropdownMenu/>*/}
  </Dropdown>
  <NavbarDivider className="max-lg:hidden"/>
  <NavbarSection className="max-lg:hidden">
    {navItems.map(({label, url}) => (
      <NavbarItem key={label} href={url}>
        {label}
      </NavbarItem>
    ))}
  </NavbarSection>
  <NavbarSpacer/>
  <NavbarSection>
    <NavbarItem href="" aria-label="Search">
      Search
      {/*<MagnifyingGlassIcon/>*/}
    </NavbarItem>
    <NavbarItem href="" aria-label="Inbox">
      Notificaciones
      {/*<InboxIcon/>*/}
    </NavbarItem>
    <Dropdown>
      <DropdownButton as={NavbarItem}>
        Menu
        {/*<Avatar src="/profile-photo.jpg" square/>*/}
      </DropdownButton>
      <DropdownMenu className="min-w-64" anchor="bottom end">
        <DropdownItem href="-profile">
          {/*<UserIcon/>*/}
          <DropdownLabel>My profile</DropdownLabel>
        </DropdownItem>
        <DropdownItem href="">
          {/*<Cog8ToothIcon/>*/}
          <DropdownLabel>Settings</DropdownLabel>
        </DropdownItem>
        <DropdownDivider/>
        <DropdownItem href="-policy">
          {/*<ShieldCheckIcon/>*/}
          <DropdownLabel>Privacy policy</DropdownLabel>
        </DropdownItem>
        <DropdownItem href="-feedback">
          {/*<LightBulbIcon/>*/}
          <DropdownLabel>Share feedback</DropdownLabel>
        </DropdownItem>
        <DropdownDivider/>
        <DropdownItem href="">
          {/*<ArrowRightStartOnRectangleIcon/>*/}
          <DropdownLabel>Sign out</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </NavbarSection>
</Navbar>