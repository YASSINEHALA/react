import React, { useState } from "react";
import { Alert, Button } from "reactstrap";
const Resault = ({ phrase, viande, sauce, salade }) => {
  const [openResult, setOpenResult] = useState(false);

  return (
    <React.Fragment>
      <Alert color="info" isOpen={openResult}>
        {`${phrase} : ${viande}, ${sauce}, avec ${salade}`}
      </Alert>
      <Button
        onClick={() => setOpenResult(previousOpenResult => !previousOpenResult)}
      >
        Your chose
      </Button>
    </React.Fragment>
  );
};
export default Resault;
