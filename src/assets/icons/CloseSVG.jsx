import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const CloseSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={29}
        height={29}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M14.5 1.813C7.431 1.813 1.812 7.43 1.812 14.5c0 7.069 5.62 12.688 12.688 12.688 7.069 0 12.688-5.62 12.688-12.688 0-7.069-5.62-12.688-12.688-12.688Zm4.894 19.03L14.5 15.95l-4.894 4.894-1.45-1.45L13.05 14.5 8.156 9.606l1.45-1.45L14.5 13.05l4.894-4.894 1.45 1.45L15.95 14.5l4.894 4.894-1.45 1.45Z"
        />
    </Svg>
);
export default CloseSVG;
