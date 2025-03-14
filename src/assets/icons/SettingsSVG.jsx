import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SettingsSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={39}
        height={39}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M19.5 25.188a5.688 5.688 0 1 1 0-11.376 5.688 5.688 0 0 1 0 11.376Zm12.074-4.112c.065-.52.113-1.04.113-1.576s-.048-1.073-.113-1.625l3.428-2.649a.82.82 0 0 0 .195-1.04l-3.25-5.622a.799.799 0 0 0-.99-.358L26.91 9.831c-.845-.633-1.723-1.186-2.746-1.592l-.602-4.307a.822.822 0 0 0-.812-.682h-6.5a.821.821 0 0 0-.813.683l-.6 4.306c-1.024.406-1.902.958-2.747 1.592L8.044 8.206a.799.799 0 0 0-.992.358l-3.25 5.622a.801.801 0 0 0 .195 1.04l3.43 2.649a13.896 13.896 0 0 0-.115 1.625c0 .536.05 1.056.114 1.576l-3.429 2.698a.801.801 0 0 0-.195 1.04l3.25 5.622c.195.358.634.488.992.358l4.046-1.642c.845.65 1.723 1.203 2.746 1.61l.601 4.306c.066.39.407.682.813.682h6.5a.822.822 0 0 0 .813-.682l.6-4.307a11.832 11.832 0 0 0 2.747-1.608l4.046 1.64c.358.13.797 0 .992-.357l3.25-5.622a.82.82 0 0 0-.196-1.04l-3.428-2.698Z"
        />
    </Svg>
);
export default SettingsSVG;
