import React from 'react';
import { ProductsContent } from '../../components';
import ToolBar from '../../components/toolbar/ToolBar';
import { Content } from './MainPageStyle';

export const MainPage = () => {
    return (
        <Content>
            <ToolBar />
            <ProductsContent />
        </Content>
    );
};

export default MainPage;