import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "auto",
    backgroundColor: "#FFFFFF",
  },
  listicon: {
    minWidth: "0px",
  },
}));

export default function CheckboxList(props) {
  const { heading, index, filterObject, setFilterObject, filterData, setFilterData, setFilterIsApplied, mobileFilter, applyButtonClicked, filterIsApplied } = props;

  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (e, item) => {
    if (item.isChecked === false) {
      var arr = filterObject[filterData[heading].param_name];
      var temp = filterObject;
      arr.push({
        id: item.id,
        name: item.name,
      });

      temp[filterData[heading].param_name] = arr;
      setFilterObject(temp);
    } else {
      var arr = filterObject[filterData[heading].param_name];

      var temp = filterObject;

      var indexx;
      arr.map((u, iin) => {
        if (u.id === item.id) {
          indexx = iin;
        }
      });
      arr.splice(indexx, 1);
      temp[filterData[heading].param_name] = arr;
      setFilterObject(temp);
    }
    var temp = [...filterData[heading].data];

    item.isChecked = e.target.checked;
    var index;
    filterData[heading].data.forEach((item1) => {
      if (item1.id === item.id) index = filterData[heading].data.indexOf(item1);
    });
    temp.splice(index, 1, item);
    var temp2 = { ...filterData };
    temp2[heading].data = temp;

    setFilterData(temp2);
    if (!mobileFilter) setFilterIsApplied(true);
  };

  useEffect(() => {
    if (applyButtonClicked && mobileFilter) {
      setFilterIsApplied(true);
    }
  }, [applyButtonClicked]);

  return (
    <List className={classes.root}>
      {filterData[heading].data.slice(0, 5).map((value, in_index) => {
        const labelId = `checkbox-list-label-${in_index}`;

        return (
          <ListItem key={index} role={undefined} dense button>
            <ListItemIcon className={classes.listicon}>
              <Checkbox
                edge="start"
                onChange={(e) => {
                  handleToggle(e, value);
                }}
                disabled={filterIsApplied}
                checked={value.isChecked}
                tabIndex={-1}
                size="small"
                disableRipple
                color="primary"
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${value.name} ${value?.count ? "(" + value.count + ")" : ""}`} />
          </ListItem>
        );
      })}
    </List>
  );
}
