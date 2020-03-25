import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from "../../../styles/styles";
import {Typography, withStyles} from "@material-ui/core";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import {loadData} from "../../../actions/commonAction";


const style = {
  container: styles.logTabContainer,
  weapon: styles.weapon,
  log_img: styles.log_img,
};

const Weapon = ({img, weapon, percentage, classes}) => (
  <div className={classes.weapon}>
    <Zoom>
      <img className={classes.log_img} src={`data:image/jpg;base64, ${img}`} alt="Threat img"/>
    </Zoom>
    <Typography variant="caption">{weapon}</Typography>
    <Typography variant="caption">{percentage}</Typography>
</div>);

const LogTab = React.memo(({classes}) => {
  const data = useSelector(state => state.mach.displaydata);

  return (
    <div className={classes.container}>
      {data && data.map(weapon => (
        <Weapon
          img={weapon.img}
          weapon={weapon.weapon}
          percentage={weapon.percentage}
          classes={classes}
          key={weapon.weaponid}
        />))}
    </div>
  );
});

export default withStyles(style)(LogTab);

// import React from "react";
// import {
//   Typography,
//   withStyles,
//   Table,
//   TableRow,
//   TableCell,
//   TableBody,
//   TableHead
// } from "@material-ui/core";
// import styles from "../../../styles/styles";
// import { connect } from "react-redux";
//
// const style = {
//   alertheader: styles.alertheader,
//   log_img: styles.log_img,
//   tablewidth: styles.tablewidth
// };
//
// class LogTab extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       unique: []
//     };
//   }
//
//   componentDidMount() {
//     if (this.props.data.savedata.length > 0) {
//       this.setState({
//         unique: this.props.data.savedata
//       });
//     }
//   }
//
//   render() {
//     const { classes } = this.props;
//
//     const tableheader = {
//       padding: "4px",
//       fontSize: "medium"
//     };
//
//     return (
//       <div className={classes.alertheader}>
//         <Typography variant="title">Threats Detected</Typography>
//         <Table className={classes.tablewidth}>
//           <TableHead>
//             <TableRow>
//               <TableCell style={tableheader} align="center">
//                 Images
//               </TableCell>
//               <TableCell style={tableheader} align="center">
//                 Weapons
//               </TableCell>
//               <TableCell style={tableheader} align="center">
//                 Percentage
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {this.state.unique.map(unique => (
//               <TableRow key={unique.img}>
//                 <TableCell align="center">
//                   {
//                     <img
//                       className={classes.log_img}
//                       src={`data:image/jpg;base64, ${unique.img}`}
//                       alt="Threat img"
//                     />
//                   }
//                 </TableCell>
//                 <TableCell align="left">{unique.weapon}</TableCell>
//                 <TableCell align="left">{unique.percentage}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     );
//   }
// }
//
// function mapStateToProps(state) {
//   const data = state.mach;
//   return { data };
// }
//
// export default connect(mapStateToProps)(withStyles(style)(LogTab));
