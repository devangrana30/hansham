import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, ImageBackground, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Container from '../../compoments/Container';
import { Header, HeaderLeft } from '../../compoments/Header';
import { styles } from './styles';

const menuList = [
    {name: 'Manchurian', image:'https://c.ndtvimg.com/2020-12/3eq2hi3_manchurian_625x300_21_December_20.jpg', id: 1},
    {name: 'Rice', image:'https://www.everydayeasyeats.com/wp-content/uploads/2016/06/Chinese-Fried-Rice-1.jpg', id: 2},
    {name: 'Bhel', image:'https://browngirlmagazine.com/wp-content/uploads/2020/03/Add-Some-Color-to-Your-Menu-With-Chinese-Bhel-_7-scaled.jpg', id: 3},
    {name: 'Paneer', image:'https://cdn.squats.in/thumbnail/4B9F3B3A-8826-42EB-9FEC-B29FE23266EA_2020-03-27_15:01:26.jpeg', id: 4},
    {name: 'Noodles', image:'https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg', id: 5},
    {name: 'Soup', image:'https://www.swatirecipe.com/wp-content/uploads/2018/04/manchow-soup-recipe.jpg', id: 6}
]

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground resizeMode='stretch' source={require('../../assets/images/home_bg.png')} style={styles.container}>
            <Header>
                <HeaderLeft>
                    <TouchableOpacity onPress={() => { navigation.navigate('ContactScreen')}}>
                        <Image source={require('../../assets/images/menu.png')} style={styles.menuLogo}/>
                    </TouchableOpacity>
                </HeaderLeft>
            </Header>
            <Container>
                <FlatList
                    data={menuList}
                    contentContainerStyle={{paddingVertical: wp(8)}}
                    renderItem={({item, index})=> (
                        <View style={styles.mainView}>
                            <View style={styles.secondView}>
                                <View style={styles.imageView}>
                                    <Image source={{uri: item.image}} style={styles.imageView}/>
                                </View>
                                <View style={{width:'75%'}}>
                                    <Text style={styles.nameTxt}>{item.name}</Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.5} onPress={()=> {navigation.navigate('ProuctListScreen', {title: item.name, id: item.id})}} style={styles.imageView1}>
                                    <Image source={require('../../assets/images/right_arrow.png')} style={styles.arrowStyle}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{height: wp(4)}}/>
                    )}
                />
            </Container>
        </ImageBackground>
    )
}

export default HomeScreen;