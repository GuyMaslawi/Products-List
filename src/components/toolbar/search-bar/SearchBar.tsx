import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../../store/reducer/Products';
import { FieldStyle } from './SearchBarStyle';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const classes = FieldStyle();

    const handleSearch = (value: any) => {
        dispatch(searchProducts(value));
    };

    return (
        <TextField variant="outlined"
            classes={classes}
            label="Search Product"
            onChange={(e: any) => handleSearch(e.target.value)}
            color="primary"
            fullWidth
        />
    );
};

export default SearchBar;