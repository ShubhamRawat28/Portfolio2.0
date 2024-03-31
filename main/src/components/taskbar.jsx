import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/taskbar.css";
import windowIcon from "../assets/icons/windows.svg";
import file from "../assets/icons/file-explorer.png";
import vscode from "../assets/icons/vs-code.svg";
import calculator from "../assets/icons/calculator.png";
import battery from "../assets/icons/battery.svg";
import wifi from "../assets/icons/wifi.svg";
import search from "../assets/icons/search.svg";
import audio from "../assets/icons/audio.svg";

const Taskbar = ({renderPopUp, isVsOpen}) => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	const [date, setDate] = useState(new Date().toLocaleDateString());
	const [language, setLanguage] = useState('ENG');
	const [country, setcountry] = useState('IN');
	const navigate = useNavigate();
	const location = useLocation();
	const handleVsCodeClick = () => {
		if(location.pathname === '/vscode') {
			navigate('/');
		}
		else{
			isVsOpen();
			navigate('/vscode');
		}
	  };
	setInterval(() => {
		setTime(new Date().toLocaleTimeString());
	}, 1000);
	setInterval(() => {
		setDate(new Date().toLocaleDateString());
	}, 1000);

	return (
		<div className="taskbar-container">
			<div className="centre-taskbar">
				<div className="icon-container" onClick={renderPopUp}>
					<img className="icons" src={windowIcon} alt="" />
				</div>
				<div className="icon-container">
					<img className="icons" src={search} alt="" />
				</div>
				<div className="icon-container">
					<img className="icons" src={file} alt="" />
				</div>
				<div className="icon-container">
					<img className="icons" src={vscode} alt="" onClick={handleVsCodeClick}/>
				</div>
				<div className="icon-container">
					<img className="icons" src={calculator} alt="" />
				</div>
			</div>
			<div className="end-taskbar">
				<div className="icon-container">
					<div className="container">
					{language}
					<br></br>
					{country}
					</div>
				</div>
				<div className="microsettings icon-container">
					<img className="icons" src={wifi} alt="" />
					<img className="icons" src={audio} alt="" />
					<img className="icons" src={battery} alt="" />
				</div>
				<div className="time icon-container" id="currTime">
					{time}
					<br></br>
					{date}
				</div>
			</div>
		</div>
	);
};

export default Taskbar;
