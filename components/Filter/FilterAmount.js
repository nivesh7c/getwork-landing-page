import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import kFormatter, { LFormatter, MFormatter } from "../../utils/ZeroToK";

const useStyles = makeStyles((theme) => ({
  margin: {
    height: theme.spacing(3),
  },
}));
const iOSBoxShadow = "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
const marks123 = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 20,
    label: "22k",
  },
  {
    value: 40,
    label: "4k",
  },
  {
    value: 60,
    label: "6k",
  },
  {
    value: 80,
    label: "8k",
  },
  {
    value: 100,
    label: "",
  },
];

const IOSSlider = withStyles({
  root: {
    color: "#3880ff",
    height: 2,
    padding: "15px 0",

    "&&& .PrivateValueLabel-circle": {
      width: 39,
      height: 39,
    },
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -8,
    marginLeft: -8,
    "&:focus, &:hover, &$active": {
      boxShadow: "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#b0b6ba",
  },
  mark: {
    backgroundColor: "#b0b6ba",
    height: 2,
    opacity: 0.5,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
})(Slider);

function valuetext(value) {
  return `${value}°C`;
}

export default function FilterAmount(props) {
  const { heading, filterData, salary, setSalary, setFilterIsApplied, mobileView, applyButtonClicked } = props;
  const classes = useStyles();

  const min_salary = filterData[heading].data[0].min_ctc;
  const medium_salary = (filterData[heading].data[0].min_ctc + filterData[heading].data[0].max_ctc) / 2;
  const max_salary = filterData[heading].data[0].max_ctc;
  const min_medium_salary = (medium_salary + min_salary) / 2;
  const max_medium_salary = (medium_salary + max_salary) / 2;
  const min_min_medium_salary = (min_medium_salary + min_salary) / 2;

  const marks = [
    {
      value: min_salary,
      label: valueLabelFormat(min_salary),
    },
    {
      value: min_medium_salary,
      label: valueLabelFormat(min_medium_salary),
    },
    {
      value: medium_salary,
      label: valueLabelFormat(medium_salary),
    },
    {
      value: max_medium_salary,
      label: valueLabelFormat(max_medium_salary),
    },
    {
      value: max_salary,
      label: valueLabelFormat(max_salary),
    },
  ];

  console.log(marks);

  function valueLabelFormat(value) {
    var new_value;
    if (value > 99999) {
      if (value > 999999) new_value = MFormatter(value);
      else new_value = LFormatter(value);
    } else new_value = kFormatter(value);
    return new_value;
  }

  useEffect(() => {
    if (applyButtonClicked && mobileView) {
      setFilterIsApplied(true);
    }
  }, [applyButtonClicked]);

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" variant="subtitle2" color="textSecondary" gutterBottom>
        Desired minimum monthly stipend
      </Typography>
      <IOSSlider
        aria-label="ios slider"
        // defaultValue={0}
        value={salary}
        marks={marks}
        min={min_salary}
        max={max_salary}
        step={min_medium_salary}
        valueLabelDisplay="auto"
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={(e, newValue) => {
          setSalary(newValue);
          if (!mobileView) setFilterIsApplied(true);
        }}
        // scale={(x) => x ** 10}
      />
    </div>
  );
}
