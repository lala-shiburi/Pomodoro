import React, { Component } from 'react';
import Label from './Label';
import BreakIncrement from './BreakIncrement';
import SessionIncrement from './SessionIncrement';
import BreakDecrement from './BreakDecrement';
import SessionDecrement from './SessionDecrement';
import StartStop from './StartStop';
import Reset from './Reset';
import '../app.scss';

export default class Controllers extends Component {
	state = {
		breakLength: 5.0,
		sessionLength: 25.0,
		currentTimer: 1500,
		timerType: 'session',
		timerState: 'start'
	};

	render() {
		const handleClickIncrement = e => {
			let controllerID = e.target.id;
			if (controllerID === 'break-increment' && this.state.breakLength <= 59) {
				this.setState({ breakLength: this.state.breakLength + 1 });
			} else if (
				controllerID === 'session-increment' &&
				this.state.sessionLength <= 59
			) {
				this.setState({ sessionLength: this.state.sessionLength + 1 });
				this.setState({ currentTimer: this.state.currentTimer + 60 });
			}
		};

		const clockDisplay = () => {
			let minutes = Math.floor(this.state.currentTimer / 60);
			let seconds = this.state.currentTimer - minutes * 60;
			seconds = seconds < 10 ? '0' + seconds : seconds;
			minutes = minutes < 10 ? '0' + minutes : minutes;
			return minutes + ':' + seconds;
		};

		const reset = () => {
			let intervalButton = document.getElementById('start_stop');
			let beep = document.getElementById('beep');
			beep.pause();
			beep.currentTime = 0;

			clearInterval(intervalButton.interval);

			this.setState({
				breakLength: 5,
				sessionLength: 25,
				currentTimer: 1500,
				timerType: 'session',
				timerState: 'start'
			});
		};

		const handleClickStartStop = event => {
			if (event.target.interval && this.state.timerState === 'stop') {
				clearInterval(event.target.interval);
				this.setState({ timerState: 'start' });
			} else {
				let count = () => {
					if (this.state.currentTimer === 0) {
						let beep = document.getElementById('beep');
						let timerType =
							this.state.timerType === 'session' ? 'break' : 'session';
						let currentTimer =
							this.state.timerType === 'session'
								? this.state.breakLength * 60
								: this.state.sessionLength * 60;
						this.setState({ timerType: timerType, currentTimer: currentTimer });
						beep.currentTime = 0;
						beep.play();
					} else {
						this.setState({ currentTimer: this.state.currentTimer - 1 });
					}
				};

				event.target.interval = setInterval(count, 1000);
				this.setState({ timerState: 'stop' });
			}
		};

		const handleClickDecrement = event => {
			let controllerID = event.target.id;
			if (controllerID === 'break-decrement' && this.state.breakLength >= 2) {
				this.setState({ breakLength: this.state.breakLength - 1 });
			} else if (
				controllerID === 'session-decrement' &&
				this.state.sessionLength >= 2
			) {
				this.setState({ sessionLength: this.state.sessionLength - 1 });
				this.setState({ currentTimer: this.state.currentTimer - 60 });
			}
		};

		return (
			<div className="pomodoro">
				<h4>Pomodoro</h4>
				<Label
					id="timer-label"
					text={this.state.timerType}
					addclass="session"
				/>
				<Label id="time-left" text={clockDisplay()} />

				<div className="sessionLength">
					<Label id="session-label" text="Session Length" />
					<div className="controllers">
						<SessionIncrement handleClick={handleClickIncrement} />
						<Label id="session-length" text={this.state.sessionLength} />
						<SessionDecrement handleClick={handleClickDecrement} />
					</div>
				</div>

				<div className="breakLength">
					<Label id="break-label" text="Break Length" />
					<div className="controllers">
						<BreakIncrement handleClick={handleClickIncrement} />
						<Label id="break-length" text={this.state.breakLength} />
						<BreakDecrement handleClick={handleClickDecrement} />
					</div>
				</div>

				<div className="buttonContainers">
					<StartStop handleClick={handleClickStartStop} />
					<Reset handleClick={reset} />
					<audio id="beep" src="https://goo.gl/65cBl1"></audio>
				</div>
			</div>
		);
	}
}
