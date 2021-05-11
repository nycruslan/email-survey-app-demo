import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import { AppBar, Toolbar, Tab, Button, Typography } from '@material-ui/core';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<Button variant='contained' color='secondary' href='/auth/google'>
						Login with Google
					</Button>
				);
			default:
				return (
					<React.Fragment>
						<div>
							<Payments />
						</div>
						<Typography variant='h6' style={{ margin: '0 1rem' }}>
							Credits: {this.props.auth.credits}
						</Typography>
						<Button variant='contained' color='secondary' href='/api/logout'>
							Logout
						</Button>
					</React.Fragment>
				);
		}
	}

	render() {
		return (
			<div>
				<AppBar>
					<Toolbar>
						<Tab
							style={{ marginRight: 'auto' }}
							label='Emaily'
							component={Link}
							to={this.props.auth ? '/surveys' : '/'}
						/>
						{this.renderContent()}
					</Toolbar>
				</AppBar>
				<Toolbar />
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Header);
