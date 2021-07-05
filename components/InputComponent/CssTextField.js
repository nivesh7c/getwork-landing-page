import { TextField, withStyles } from "@material-ui/core";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiFormLabel-root": {
      top: -1,
    },
    "& .MuiInput-underline:after": {
      // borderBottomColor: "green",
    },

    "&&& .MuiOutlinedInput-root": {
      paddingLeft: 10,

      "& fieldset": {
        borderRadius: 30,
        width: "100%",
      },
      "&:hover fieldset": {
        border: "2px solid #007BFF",
        color: "#007BFF",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #007BFF",
        color: "#007BFF",
      },
    },
  },
})(TextField);

export default CssTextField;
