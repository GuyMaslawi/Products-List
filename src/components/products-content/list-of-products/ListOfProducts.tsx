import React from 'react';
import OneItem from './one-item/OneItem';
import productIcon from '../../../assets/icons/product.jpg';
import { useSelector } from 'react-redux';
import { getFilteredList, getList } from '../../../store/reducer/Products';
import { Div } from './ListOfProductsStyle';

export const ListOfProducts = () => {
    const list = useSelector(getList);
    const filteredList = useSelector(getFilteredList);
    const currentList = filteredList ? filteredList : list;

    return (
        currentList ? currentList.map((item: any, index: number) => {
            return (
                <OneItem key={index}
                         id={index}
                         img={productIcon}
                         title={item.title}
                         description={item.description}
                         price={item.price}
                         dateCreated={item.created}
                />
            );
        })
        : <Div>Your List Is Empty</Div>
    );
};

export default ListOfProducts;

