import React from 'react';
import Select from '@material-ui/core/Select';
import { FormControl, MenuItem } from '@material-ui/core';
import { getSortType, sortArr } from '../../../store/reducer/Products';
import { useDispatch, useSelector } from 'react-redux';
import { SelectStyle } from './SortProductsStyle';

export const SortProducts = () => {
    const dispatch = useDispatch();
    const currentType = useSelector(getSortType);
    const classes = SelectStyle();

    const handleChange = (value: any) => {
        dispatch(sortArr(value));
    };

    return (
        <FormControl variant="outlined" fullWidth>
            <Select
                classes={classes}
                value={currentType}
                onChange={(e: any) => handleChange(e.target.value)}
            >
                <MenuItem value='RECENTLY_ADDED'>Recently Added</MenuItem>
                <MenuItem value='OLD_ADDED'>old Added</MenuItem>
                <MenuItem value='HIGH_TO_LOW'>high price to low</MenuItem>
                <MenuItem value='LOW_TO_HIGH'>low price to height</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SortProducts;
