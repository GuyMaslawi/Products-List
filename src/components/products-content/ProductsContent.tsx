import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductDetails from './product-details/ProductDetails';
import ListOfProducts from './list-of-products/ListOfProducts';
import { useSmallScreen } from '../../helpers';

export const ProductsContent = () => {
    const isMobile = useSmallScreen();
    
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                    <ListOfProducts />
                </Grid>
                {!isMobile &&
                    <Grid item xs={5}>
                        <ProductDetails />
                    </Grid>
                }
            </Grid>
        </div>
    );
};

export default ProductsContent;