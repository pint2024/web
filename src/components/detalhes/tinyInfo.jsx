import "./tinyInfo.css";

export const TinyInfo = ({ info }) => {
	return <>{info && <div className="tiny-info">{info}</div>}</>;
};
