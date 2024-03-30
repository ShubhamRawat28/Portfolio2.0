import "./styles/windowPopUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import powerpoint from "../assets/icons/powerpoint.svg";
import word from "../assets/icons/word.svg";
import excel from "../assets/icons/excel.svg";
import edge from "../assets/icons/edge.svg";
import xbox from "../assets/icons/xbox.svg";
import instagram from "../assets/icons/instagram.svg";
import spotify from "../assets/icons/spotify.svg";
import vscode from "../assets/icons/vs-code.svg";
import outlook from "../assets/icons/outlook.svg";
import copilot from "../assets/icons/co-pilot.svg";
import onedrive	from "../assets/icons/onedrive.svg";

const WindowPopup = ({ isOpen }) => {
	return (
		<div className={`window-popup ${isOpen ? "open" : ""}`}>
			<div className="window-popup-header">
				<div className="container">
					<div className="search-box">
						<FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
						<input
							type="text"
							class="search-input"
							placeholder="Search for apps, settings, and documents"
						/>
					</div>
				</div>
			</div>
			<div className="window-popup-pinned">
				<div className="header">
					<h3>Pinned</h3>
					<button>
						All apps <FontAwesomeIcon icon={faChevronRight} />
					</button>
				</div>
				<div className="container">
					<div className="row">
						<div className="apps">
							<img src={powerpoint} alt="powerpoint" />
							<p>Powerpoint</p>
						</div>
						<div className="apps">
							<img src={word} alt="word" />
							<p>Word</p>
						</div>
						<div className="apps">
							<img src={excel} alt="excel" />
							<p>Excel</p>
						</div>
						<div className="apps">
							<img src={edge} alt="edge" />
							<p>Edge</p>
						</div>
						<div className="apps">
							<img src={xbox} alt="xbox" />
							<p>Xbox</p>
						</div>
						<div className="apps">
							<img src={powerpoint} alt="powerpoint" />
							<p>Powerpoint</p>
						</div>
					</div>
				<div className="row">
						<div className="apps">
							<img src={instagram} alt="Instagram" />
							<p>Instagram</p>
						</div>
						<div className="apps">
							<img src={spotify} alt="spotify" />
							<p>Spotify</p>
						</div>
						<div className="apps">
							<img src={vscode} alt="vscode" />
							<p>VScode</p>
						</div>
						<div className="apps">
							<img src={outlook} alt="outlook" />
							<p>Outlook</p>
						</div>
						<div className="apps">
							<img src={copilot} alt="copilot" />
							<p>Copilot</p>
						</div>
						<div className="apps">
							<img src={onedrive} alt="onedrive" />
							<p>Onedrive</p>
						</div>
					</div>
				</div>
			</div>

			<div className="window-popup-recommended">
				<div className="header">
					<h3>Recommended</h3>
					<button>
						More <FontAwesomeIcon icon={faChevronRight} />
					</button>
				</div>
			</div>

			<div className="window-popup-footer">
				<div className="container">
					<div className="user">
						<FontAwesomeIcon icon={faUser} className="icon" />
						<p>Shubham Rawat</p>
					</div>
					<FontAwesomeIcon icon={faPowerOff} />
				</div>
			</div>
		</div>
	);
};

export default WindowPopup;
