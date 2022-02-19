import { Text, View } from 'react-native';
import React from 'react';
import { styles } from '../screens/ProductListScreen/styles';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';


const DishList = ({ item, index }) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.secondView}>
                {/* <View style={styles.imageView}>
                                    <Image source={{uri: item.image}} style={styles.imageView}/>
                                </View> */}
                <View style={{ width: '90%' }}>
                    <Text style={styles.nameTxt}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp(5), justifyContent: 'space-between', paddingTop: wp(1.5) }}>
                        <Text style={styles.priceTxt}>Half: <Text style={{ color: '#eb394e', fontFamily: 'RobotoSlab-Medium' }}>{item.half}</Text></Text>
                        <Text style={styles.priceTxt}>Full: <Text style={{ color: '#eb394e', fontFamily: 'RobotoSlab-Medium' }}>{item.full}</Text></Text>
                    </View>
                </View>
                {/* <TouchableOpacity onPress={()=> {}} style={[styles.imageView1, {}]}> */}
                {/* <Image source={require('../../assets/images/right_arrow.png')} style={styles.arrowStyle}/> */}
                {/* </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default DishList;