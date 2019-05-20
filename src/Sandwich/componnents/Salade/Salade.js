import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
export const Salade = ({ salade, setSalade }) => {
  const [openSalade, setOpenSalade] = useState(false);

  return (
    <Dropdown
      isOpen={openSalade}
      toggle={() => setOpenSalade(previousOpenSalade => !previousOpenSalade)}
    >
      <DropdownToggle caret color="success" size="lg">
        {salade}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => setSalade("Salade")}>
          {" "}
          Salade{" "}
        </DropdownItem>
        <DropdownItem onClick={() => setSalade("Tomate")}>
          {" "}
          Tomate{" "}
        </DropdownItem>
        <DropdownItem onClick={() => setSalade("Onigon")}>
          {" "}
          Onigon{" "}
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => setSalade("rien du tout")}>
          Rien du tout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
