import React from 'react';
import Grid from '@material-ui/core/Grid';
import productIcon from '../../../assets/icons/product.jpg';
import { Div, Img, SaveButton } from './ProductDetailsStyle';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentOpenProduct, getList, isNewProduct, setProductDialogOpen, updateItem } from '../../../store/reducer/Products';
import { useFormik } from 'formik';
import * as yup from 'yup';
import moment from 'moment';
import { useSmallScreen } from '../../../helpers';

const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required().positive().integer(),
})

export const ProductDetails = (props: any) => {
    const list = useSelector(getList);
    const newProduct = useSelector(isNewProduct);
    const currentProductDetails = useSelector(getCurrentOpenProduct);
    const dispatch = useDispatch();
    const emptyFields = newProduct || !list;
    const isMobile = useSmallScreen();

    const formik = useFormik({
        initialValues: {
            id: 0,
            title: '',
            description: '',
            price: '',
            created: null
        },
        validationSchema: emptyFields ? schema : null,
        onSubmit: (values: any) => {
            if(isMobile){
                dispatch(setProductDialogOpen(false));
            }
            if(emptyFields){
                values.id = list.length;
                values.created = moment(new Date()).format("MM/DD/YYYY");
                dispatch(addItem(values));
            }
            else{
                values.id = currentProductDetails;
                dispatch(updateItem(values));
            }
        },
    });

    const currentTitle = emptyFields ? formik.values.title : list[currentProductDetails] ? list[currentProductDetails].title : '';
    const currentDescription = emptyFields ? formik.values.description : list[currentProductDetails] ? list[currentProductDetails].description : '';
    const currentPrice = emptyFields ? formik.values.price : list[currentProductDetails] ? list[currentProductDetails].price : '';

    return (
        <Div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {currentTitle}
                    </Grid>
                    <Grid item xs={12}>
                        <Img src={productIcon} alt="product img" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined"
                            name="title"
                            label="Title"
                            value={currentTitle}
                            onChange={formik.handleChange}
                            color="primary"
                            fullWidth
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined"
                            name="description"
                            label="Description"
                            value={currentDescription}
                            onChange={formik.handleChange}
                            color="primary"
                            fullWidth
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined"
                            name="price"
                            label="Price"
                            value={currentPrice}
                            onChange={formik.handleChange}
                            color="primary"
                            fullWidth
                            error={formik.touched.price && Boolean(formik.errors.price)}
                            helperText={formik.touched.price && formik.errors.price} />
                    </Grid>
                    <Grid item xs container justify="flex-end" alignItems="center">
                        <Grid item>
                            <SaveButton type="submit" 
                                        value={emptyFields ? 'Add' : 'Update'} 
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Div>
    );
};

export default ProductDetails;