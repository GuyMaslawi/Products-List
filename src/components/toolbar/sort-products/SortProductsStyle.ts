import { makeStyles } from '@material-ui/core';

export const SelectStyle = makeStyles({
    root: {
        height: '1.9rem',
        fontSize: '1.5rem',
        lineHeight: 1,
        '& label': {
            fontSize: '1.5rem',
        },
        '& .MuiInputBase-root': {
            fontSize: '1.5rem',

            '& .MuiSvgIcon-root': {
                top: '1.8rem',
                width: '2.5rem',
                height: '2rem',
            },
        },
    }
});