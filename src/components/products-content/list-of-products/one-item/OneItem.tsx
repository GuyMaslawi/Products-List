import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Div, Img, Title, Description, Price, Created, GridStyle } from './OneItemStyle';
import { useDispatch } from 'react-redux';
import { deleteItem, setCurrentProduct, setProductDialogOpen } from '../../../../store/reducer/Products';
import DeleteIcon from '@material-ui/icons/Delete';
import MainButton from '../../../main-button/MainButton';
import { useSmallScreen } from '../../../../helpers';

interface ListOfProductsProps {
    id: number;
    img: string;
    title: string
    description: string;
    price: number;
    dateCreated: any;
}

export const ListOfProducts = ({
                                    id,
                                    img,
                                    title,
                                    description,
                                    price,
                                    dateCreated
                                }: ListOfProductsProps) => {

    const dispatch = useDispatch();
    const isMobile = useSmallScreen();

    const openProductDetails = (id: any) => {
        dispatch(setCurrentProduct(id));
        if(isMobile){
            dispatch(setProductDialogOpen(true));
        }
    };

    const removeItem = (id: number) => {
        dispatch(deleteItem(id));
    };

    return (
        <Div onClick={() => openProductDetails(id)}>
            <Grid container>
                <Grid item xs={3}>
                    <Img src={img} alt="product img" />
                </Grid>
                <GridStyle item xs>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Created>{dateCreated}</Created>
                </GridStyle>
                <GridStyle item xs={12} sm={3} container direction={isMobile ? 'row' : 'column'}
                           alignItems={isMobile ? 'center' : 'flex-end'} justify="space-between">
                    <Grid item xs sm>
                        <Price>Price: {price}$</Price>
                    </Grid>
                    <Grid item xs={2} sm container justify="flex-end">
                        <MainButton asIcon
                                    onClick={() => removeItem(id)}
                                    color="secondary"
                                    startIcon={<DeleteIcon />} />
                    </Grid>
                </GridStyle>
            </Grid>
        </Div>
    );
};

export default ListOfProducts;