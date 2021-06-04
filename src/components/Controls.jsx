import React, { useState, useMemo } from 'react';

import { useKeyboard } from '../hooks/useKeyboard';

const Controls = ({ children }) => {
    const [direction, setDirection] = useState(null);

    useKeyboard(['ArrowUp', 'W', 'w'], 'up', setDirection);
    useKeyboard(['ArrowDown', 'S', 's'], 'down', setDirection);
    useKeyboard(['ArrowRight', 'D', 'd'], 'right', setDirection);
    useKeyboard(['ArrowLeft', 'A', 'a'], 'left', setDirection);

    return useMemo(() => {
        return React.cloneElement(children, { direction })
    }, [direction, children]);
};

export default Controls;