import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Cart = () => {
    return (
        <TouchableOpacity>
            <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                <Path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="black" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </Svg>
        </TouchableOpacity>
    )
}

export default Cart