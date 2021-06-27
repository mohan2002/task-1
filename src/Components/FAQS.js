import React from 'react'
import './page-styles/FAQSpage.css'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Lowerpart from './Layout/Lowerpart';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div>
    <div className={classes.root}>
    <h1 className="faq">Frequently Asked Questions</h1>
    <div className="aspiron">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus enim, amet augue elementum. Neque, ac lorem neque, phasellus viverra metus non volutpat? 
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus enim, amet augue elementum. Neque, ac lorem neque, phasellus viverra metus non volutpat? 
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus enim, amet augue elementum. Neque, ac lorem neque, phasellus viverra metus non volutpat?
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus enim, amet augue elementum. Neque, ac lorem neque, phasellus viverra metus non volutpat?
        </AccordionSummary>
      </Accordion>


    </div>
    </div>
    <Lowerpart/>
    </div>
  );
}
