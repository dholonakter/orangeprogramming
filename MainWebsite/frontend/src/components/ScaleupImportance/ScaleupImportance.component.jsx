import {
  Typography,
  Grid,
  List,
  ListItemText,
  ListItem,
  Box,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { Container } from "../../utils/container";
import { SmallBorderBottom } from "../../utils/constant";
import { HeaderText } from "../../utils/text";
import img from "../../assets/images/ScaleUp/section-img.png";
import img2 from "../../assets/images/ScaleUp/section-img-2.png";
import CheckIcon from "@material-ui/icons/Check";

const importanceData = [
  "Finding problems that holding back you business.",
  "Growing you business effectively.",
  "Improve efficiency.",
  "Better user experience.",
  "Best tools and technology.",
  "Connecting dots.",
  "Get More Money In Your Wallet.",
  "Prevent your business from dealing with a slew of unhappy customers.",
];

const useStyles = makeStyles((theme) => ({
  section: {
    background: `url(${img2}), linear-gradient(
        0deg,
        rgba(23, 56, 87, 0.84),
        rgba(23, 56, 87, 0.7)
      )`,
  },
  sectionText: {
    fontSize: "1.7rem",
    "@media(max-width:1100px)": {
      fontSize: "1.5rem",
    },
    "@media(max-width:768px)": {
      fontSize: "1.2rem",
    },
    "@media(max-width:400px)": {
      fontSize: "0.8rem",
    },
  },
}));

function ScaleupImportance() {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Container>
        <Box paddingY={matches ? 3 : 5}>
          <Typography
            className={classes.sectionText}
            variant="h4"
            align="center"
            style={{ fontWeight: 200 }}
          >
            Your business shouldn’t be held back by ineffective technology and
            design. We’re here to help.
          </Typography>
        </Box>

        <HeaderText>
          Why scaling up is <br />
          important for your business?{" "}
        </HeaderText>
        <SmallBorderBottom />

        <Grid container>
          <Grid item sm={12} md={6}>
            <List component="nav" gu>
              {importanceData.map((data, idx) => (
                <ListItem key={idx} disableGutters>
                  <CheckIcon style={{ marginRight: 10, color: "#F0671F" }} />

                  <ListItemText primary={data} gu />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item sm={12} md={6}>
            <img src={img} alt="" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Container>

      <Box
        marginY={matches ? 5 : 10}
        paddingY={matches ? 3 : 6}
        className={classes.section}
      >
        <Container>
          <Typography
            variant="h4"
            align="center"
            className={classes.sectionText}
            style={{ color: "#FFFF", fontWeight: 400 }}
          >
            Successful scale up lasts. We found perfect solution and build
            technology that aligns with your business objectives.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default ScaleupImportance;
