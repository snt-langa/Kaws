import React from "react";
import { Image, TouchableOpacity } from 'react-native'

const ScreenHeaderBtn = ({iconUrl}) => {
    return (
        <TouchableOpacity>
            <Image 
                source={iconUrl}
                resizeMode='cover'
                style={{height: 30, width: 30}}
            />
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn