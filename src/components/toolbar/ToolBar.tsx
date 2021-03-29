import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { isProductDialogOpen, setNewProduct, setProductDialogOpen } from '../../store/reducer/Products';
import MainButton from '../main-button/MainButton';
import SearchBar from './search-bar/SearchBar';
import SortProducts from './sort-products/SortProducts';
import { Div } from './ToolBarStyle';
import AddIcon from '@material-ui/icons/Add';
import { AppBar, Dialog, IconButton, Typography } from '@material-ui/core';
import { ProductDetails } from '../products-content/product-details/ProductDetails';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import { useSmallScreen } from '../../helpers';

export const ToolBar = () => {
    const isDialogOpen = useSelector(isProductDialogOpen);
    const dispatch = useDispatch();
    const isMobile = useSmallScreen();

    const handleClick = () => {
        dispatch(setNewProduct(true));
        if (isMobile) {
            dispatch(setProductDialogOpen(true))
        }
    };

    return (
        <Div>
            <Grid container spacing={2} alignItems="center" xs={12}>
                <Grid item xs={2} sm={1}>
                    <MainButton onClick={() => handleClick()}
                        asIcon
                        startIcon={<AddIcon />}>
                    </MainButton>
                </Grid>
                <Grid item xs={5}>
                    <SearchBar />
                </Grid>
                <Grid item xs={5}>
                    <SortProducts />
                </Grid>
            </Grid>
            <Dialog open={isDialogOpen && isMobile}
                onClose={() => dispatch(setProductDialogOpen(false))}
                fullScreen>
                <AppBar>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={() => dispatch(setProductDialogOpen(false))} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Manage Product
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div style={{ marginTop: '5rem' }}>
                    <ProductDetails />
                </div>
            </Dialog>
        </Div>
    );
};

export default ToolBar;