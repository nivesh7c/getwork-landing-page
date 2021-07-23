import { Box } from "@material-ui/core";
import Link from "next/link";
import { CustomButton } from "../components/InputComponent/Button/CustomButton";

export default function Custom500() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <img src="/svg/503.svg" height="400px" style={{ marginTop: 100 }} />
      </Box>
      <Box display="flex" justifyContent="center" style={{ marginBottom: 50 }}>
        <Link href="/students">
          <CustomButton type="button" buttonSize="btn--medium">
            Go to Home Page
          </CustomButton>
        </Link>
      </Box>
    </>
  );
}
