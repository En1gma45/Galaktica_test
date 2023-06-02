import { FunctionComponent } from "react";

interface ProgressBarType {
    circleWidth: number;
    percentage: number;
    radius: number;
    pointer: boolean
}
const ProgressBar: FunctionComponent<ProgressBarType> = ({ circleWidth, percentage, radius, pointer }) => {

    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;

    return (
        <svg
            width={circleWidth}
            height={circleWidth}
            viewBox={`0 0 ${circleWidth} ${circleWidth}`}
            style={{ "transform": "rotate(-90deg)" }}
        >
            <circle
                cx={circleWidth / 2}
                cy={circleWidth / 2}
                strokeWidth={"1px"}
                r={radius}
                strokeDasharray={dashArray}
                fill="none"
                stroke="#FFFFFF1A"
                style={{ "transition": ".3s ease" }}
            />
            <circle
                cx={circleWidth / 2}
                cy={circleWidth / 2}
                strokeWidth={"2px"}
                r={radius}
                strokeDasharray={dashArray}
                fill="none"
                stroke="#FFFFFF"
                style={{ "transition": ".3s ease" }}
                strokeLinecap="round"
                strokeDashoffset={dashOffset}
            />
            {pointer &&
                <circle
                    cx={circleWidth}
                    cy={circleWidth / 2}
                    r={4}
                    fill="white"
                    style={{ "transition": ".3s ease", "transformOrigin": "50% 50%", "transform": `rotate(${3.6 * percentage}deg)` }}
                />}
        </svg>
    )
}

export default ProgressBar