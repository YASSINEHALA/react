import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";
export const Sauce = ({ sauce, setSauce }) => {
  const [openSauce, setOpenSauce] = useState(false);

  return (
    <Dropdown
      isOpen={openSauce}
      toggle={() => setOpenSauce(previousOpenSauce => !previousOpenSauce)}
    >
      <DropdownToggle caret color="danger" size="lg">
        {sauce}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => setSauce("Katchab")}>Katchab</DropdownItem>
        <DropdownItem onClick={() => setSauce("Maionaise")}>
          Maionaise
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
