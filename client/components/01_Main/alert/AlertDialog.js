import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/styles';
import { Dialog, DialogActions, withStyles, Button, DialogContent, Typography, ButtonBase } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/WarningRounded';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crudAction from '../../../actions/crudAction';
import * as commonAction from '../../../actions/commonAction';

const style = {
	root: styles.list_root,
	warningicon : styles.warningicon,
	alert: styles.alert,
	alerttitle: styles.alerttitle,
	alertcontent: styles.alertcontent,
	contentdiv: styles.contentdiv,
	alertdiv: styles.alertdiv,
	weapontitle: styles.weapontitle,
	action: styles.action,
	alertbtn: styles.alertbtn,
	imgstyle: styles.imgstyle
}


const Div = ({ source }) => (
	<div>
		{/* <ButtonBase> */}
			<img style={styles.imgstyle} src={`data:image/jpg;base64, ${source.img}`} alt="Threat" />
		{/* </ButtonBase> */}
		<div style={styles.contentdiv}>
			<div style={styles.alertdiv}>
				<Typography style={styles.weapontitle} variant="h6">
					{source.weapon}
				</Typography>
				<Typography style={styles.weapontitle} variant="h6" >
					{`${source.percentage}%`}
				</Typography>
			</div>
		</div>
	</div>
)

// var Arr = [];

class AlertDialog extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			doneSave: ''
		};
		this.handleResume = this.handleResume.bind(this);
		this.handleLogThreat = this.handleLogThreat.bind(this);
		// this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	// componentDidMount() {
	// 	document.addEventListener('keydown', this.handleKeyPress);
	// }

	// componentWillUnmount() {
	// 	document.removeEventListener('keydown', this.handleKeyPress);
	// }

	componentDidUpdate(prevProps) {
		// if ((this.props.data.open !== prevProps.data.open) && (this.props.data.open)) {
		// 	Arr = this.props.data.displaydata
		// }
	}

    handleResume() {
		this.props.onClose();
		this.setState({
			doneSave: ''
		})
	}

	handleLogThreat() {
		this.props.actions.log(this.props.data).then(data => {
			if (data.data.save) {
				this.setState({
					doneSave: 'Record has been saved in database!'
				})
				this.props.machine.loadData()
			}
		});
	}

	// reverse() {
	// 	this.props.actions.usb({data: 'q'});
	// }

	// stop() {
	// 	this.props.actions.usb({data: 'r'});
	// }

	// forward() {
	// 	this.props.actions.usb({data: 's'});
	// }

	// handleKeyPress(e) {
	// 	if (e.keyCode === 81) {
	// 		this.reverse();
	// 	} else if (e.keyCode === 82) {
	// 		this.stop();
	// 	} else if (e.keyCode === 83) {
	// 		this.forward();
	// 	}
	// }

    render() {

		const { classes, onClose, ... other } = this.props;
        return(
            <div className={classes.root}>
                <Dialog maxWidth="xl" onClose={this.handleResume} {... other}>
					<div className={classes.alert}>
						<WarningIcon className={classes.warningicon} color="error"/>
						<Typography className={classes.alerttitle} variant="h5" color="error">
							MACHINE HALTED
						</Typography>
					</div>
                    <DialogContent className={classes.alertcontent}>
						<Typography variant="h6">
							Possible threat identified
						</Typography>
						<div style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
							{(this.props.data || []).map(element => (
								<Div source={element} key={element.weaponid} />
							))}
						</div>
						<Typography variant="subtitle1">
							{this.state.doneSave}
						</Typography>
					</DialogContent>
                    <DialogActions className={classes.action}>
                        <Button className={classes.alertbtn} size="large" color="secondary" onClick={this.handleLogThreat}>LOG THREAT</Button>
                        <Button className={classes.alertbtn} size="large" color="primary" onClick={this.handleResume}>CLOSE</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
};

AlertDialog.propTypes = {
	classes: PropTypes.object.isRequired,
	onClose: PropTypes.func
};

function mapStateToProps(state) {
    return { data: state.mach.savedata }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch),
    machine: bindActionCreators(Object.assign({}, commonAction), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(AlertDialog));
