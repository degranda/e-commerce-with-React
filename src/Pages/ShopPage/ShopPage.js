import React from 'react';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import './ShopPage.scss';
import SHOP_DATA from './shop-data';

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            collections: SHOP_DATA
        }
    }
    render() {
        return(
            <div className='shop-page'>
                {this.state.collections.map(({ id, ...otherCollectionsProps }) => (
                    <CollectionPreview key={id} { ...otherCollectionsProps }/>
                ))}
            </div>
        )
    }
}

export default ShopPage;