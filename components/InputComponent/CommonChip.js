import { Button, Chip, TextField, withStyles } from "@material-ui/core";

const CommonChip = withStyles({
  root: {
    boxShadow: "0 1px 2px 0 rgba(44, 39, 56, 0.08)",
    // border: "solid 0.5px #007bff",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "normal",
    marginRight: "8px",
    marginBottom: "8px",
    height: 25,
    fontSize: 11,
    "&&& .MuiChip-deleteIcon": {
      color: "white",
      width: 17,
      "&:hover": {
        color: "#e8f3ff",
      },
    },
  },
})(Chip);

export default CommonChip;
