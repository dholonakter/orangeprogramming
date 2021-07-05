import React from "react";
import {
  Grid,
  Card,
  Box,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Container } from "../../utils/container";
import CheckIcon from "@material-ui/icons/Check";
import { makeStyles } from "@material-ui/styles";
import { HeaderText } from "../../utils/text";
import { SmallBorderBottom } from "../../utils/constant";

const approachData = [
  {
    title: "Evaluation",
    data: [
      "Current situation.",
      "Business efficiency.",
      "Key processes.",
      "Performace indicators.",
    ],
  },

  {
    title: "Prioritize",
    data: [
      "Business goals.",
      "Constrains.",
      "Functional requirements.",
      "Quality attributes.",
    ],
  },
  {
    title: "Analyze",
    data: [
      "Architecture review.",
      "Code review.",
      "Qualitative & quantitative analysis.",
    ],
  },
  {
    title: "Report",
    data: ["Risks.", "Limitations.", "Conclutions.", "Possible improvements."],
  },
];

const useStyles = makeStyles((theme) => ({
  root: { position: "relative" },
  processCount: {
    position: "absolute",
    height: 35,
    width: 35,
    top: 10,
    left: 10,
    borderRadius: 50,
    background: "#F0671F",
    color: "#FFF",
  },
}));

function ScaleUpApproach() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <HeaderText>Our scale up approach</HeaderText>
        <SmallBorderBottom />

        <Box marginY={8}>
          <Grid container spacing={5}>
            {approachData.map((data, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                key={idx}
                className={classes.root}
              >
                <Card style={{ height: 230 }}>
                  <CardContent>
                    <List component="nav">
                      <Typography align="center" variant="h6">
                        {data.title}
                      </Typography>
                      {data.data.map((data, idx) => (
                        <ListItem
                          disableGutters
                          style={{ padding: 0, margin: 0 }}
                        >
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <CheckIcon
                              style={{ marginRight: 10, color: "green" }}
                            />
                            <ListItemText primary={data} />
                          </Box>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className={classes.processCount}
                  >
                    {idx + 1}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default ScaleUpApproach;
