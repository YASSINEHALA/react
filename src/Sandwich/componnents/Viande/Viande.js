import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
export const Viande = ({ viande, setViande }) => {
  const [openViande, setOpenViande] = useState(false);

  return (
    <Dropdown
      isOpen={openViande}
      toggle={() => setOpenViande(previousOpenViande => !previousOpenViande)}
    >
      <DropdownToggle caret color="primary" size="lg">
        {viande}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => setViande("poulet")}>
          {" "}
          Poulet{" "}
        </DropdownItem>
        <DropdownItem onClick={() => setViande("Viande Hachée")}>
          Viand Hachée
        </DropdownItem>
        <DropdownItem onClick={() => setViande("Poisson")}>
          Poisson
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
