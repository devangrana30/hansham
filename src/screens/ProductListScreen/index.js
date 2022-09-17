import React from 'react'
import { Image, View, Text, ImageBackground, TouchableOpacity, FlatList, } from 'react-native'
import { styles } from './styles';
import { Header, HeaderLeft } from '../../compoments/Header';
import Container from '../../compoments/Container';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BannerAd, BannerAdSize } from '@react-native-admob/admob';
import adsId from '../../constant/adsId';
import DishList from '../../compoments/DishList';
import DishAdsList from '../../compoments/DishAdsList';

const menuList = [
    { ads: true },
    { name: 'Regular Dry Manchuriyan', full: '80 ₹', half: '60 ₹', image: 'https://c.ndtvimg.com/2020-12/3eq2hi3_manchurian_625x300_21_December_20.jpg' },
    { name: 'Schezwan Manchuriyan', full: '80 ₹', half: '60 ₹', image: 'https://www.everydayeasyeats.com/wp-content/uploads/2016/06/Chinese-Fried-Rice-1.jpg' },
    { name: 'Singapuri Manchuriyan', full: '100 ₹', half: '80 ₹', image: 'https://www.swatirecipe.com/wp-content/uploads/2018/04/manchow-soup-recipe.jpg' },
    { ads: true },
    { name: 'Meggie Manchuriyan', full: '100 ₹', half: '80 ₹', image: 'https://browngirlmagazine.com/wp-content/uploads/2020/03/Add-Some-Color-to-Your-Menu-With-Chinese-Bhel-_7-scaled.jpg' },
    { name: 'Mayonnaise Manchuriyan', full: '100 ₹', half: '80 ₹', image: 'https://cdn.squats.in/thumbnail/4B9F3B3A-8826-42EB-9FEC-B29FE23266EA_2020-03-27_15:01:26.jpeg' },
    { name: 'Cheese Manchuriyan', full: '100 ₹', half: '80 ₹', image: 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg' },
    { ads: true },
    { name: 'Tapela Manchuriyan', full: '100 ₹', half: '80 ₹', image: 'https://www.swatirecipe.com/wp-content/uploads/2018/04/manchow-soup-recipe.jpg' },
    { name: 'Dahiwala Manchuriyan', full: '120 ₹', half: '--', image: 'https://www.swatirecipe.com/wp-content/uploads/2018/04/manchow-soup-recipe.jpg' },
    { name: 'Cheese Mayonnaise Manchuriyan', full: '150 ₹', half: '--', image: 'https://www.swatirecipe.com/wp-content/uploads/2018/04/manchow-soup-recipe.jpg' },
    { ads: true },
]

const riceList = [
    { ads: true },
    { name: 'Fry Rice', full: '80 ₹', half: '60 ₹', image: 'https://c.ndtvimg.com/2020-12/3eq2hi3_manchurian_625x300_21_December_20.jpg' },
    { name: 'Singapuri Rice', full: '80 ₹', half: '60 ₹', image: 'https://www.swatirecipe.com/wp-content/uploads/2018/04/manchow-soup-recipe.jpg' },
    { name: 'Schezwan Rice', full: '80 ₹', half: '60 ₹', image: 'https://www.everydayeasyeats.com/wp-content/uploads/2016/06/Chinese-Fried-Rice-1.jpg' },
    { ads: true },
    { name: 'Biriyani Rice Veg', full: '80 ₹', half: '60 ₹', image: 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg' },
    { name: 'Khichado', full: '100 ₹', half: '80 ₹', image: 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg' },
    { name: 'Triple Rice', full: '120 ₹', half: '--', image: 'https://browngirlmagazine.com/wp-content/uploads/2020/03/Add-Some-Color-to-Your-Menu-With-Chinese-Bhel-_7-scaled.jpg' },
    { name: '56 Rice', full: '120 ₹', half: '--', image: 'https://cdn.squats.in/thumbnail/4B9F3B3A-8826-42EB-9FEC-B29FE23266EA_2020-03-27_15:01:26.jpeg' },
    { ads: true },
]

const bhelList = [
    { ads: true },
    { name: 'Chinese Bhel', full: '80 ₹', half: '60 ₹', image: 'https://c.ndtvimg.com/2020-12/3eq2hi3_manchurian_625x300_21_December_20.jpg' },
    { name: 'Singapuri Bhel', full: '80 ₹', half: '60 ₹', image: 'https://www.swatirecipe.com/wp-content/uploads/2018/04/manchow-soup-recipe.jpg' },
    { name: 'Bombay Bhel', full: '100 ₹', half: '80 ₹', image: 'https://www.swatirecipe.com/wp-content/uploads/2018/04/manchow-soup-recipe.jpg' },
    { ads: true },
]

const pneerList = [
    { ads: true },
    { name: 'Paneer Chilli Dry', full: '120 ₹', half: '80 ₹', image: 'https://c.ndtvimg.com/2020-12/3eq2hi3_manchurian_625x300_21_December_20.jpg' },
    { name: 'Paneer Chilli Gravy', full: '120 ₹', half: '80 ₹', image: 'https://www.swatirecipe.com/wp-content/uploads/2018/04/manchow-soup-recipe.jpg' },
    { name: 'Regular Paneer Rice', full: '100 ₹', half: '--', image: 'https://www.everydayeasyeats.com/wp-content/uploads/2016/06/Chinese-Fried-Rice-1.jpg' },
    { ads: true },
    { name: 'Special Paneer Rice', full: '140 ₹', half: '--', image: 'https://browngirlmagazine.com/wp-content/uploads/2020/03/Add-Some-Color-to-Your-Menu-With-Chinese-Bhel-_7-scaled.jpg' },
    { name: 'Paneer Triple Rice', full: '140 ₹', half: '--', image: 'https://cdn.squats.in/thumbnail/4B9F3B3A-8826-42EB-9FEC-B29FE23266EA_2020-03-27_15:01:26.jpeg' },
    { name: 'Tapela Paneer Chilli Dry', full: '140 ₹', half: '100 ₹', image: 'https://www.swatirecipe.com/wp-content/uploads/2018/04/manchow-soup-recipe.jpg' },
    { name: 'Tapela Paneer Chilli Gravy', full: '140 ₹', half: '100 ₹', image: 'https://www.swatirecipe.com/wp-content/uploads/2018/04/manchow-soup-recipe.jpg' },
    { ads: true },
]

const noodleList = [
    { ads: true },
    { name: 'Hakka Noodles', full: '80 ₹', half: '60 ₹', image: 'https://c.ndtvimg.com/2020-12/3eq2hi3_manchurian_625x300_21_December_20.jpg' },
    { name: 'Singapuri Noodles', full: '80 ₹', half: '60 ₹', image: 'https://www.swatirecipe.com/wp-content/uploads/2018/04/manchow-soup-recipe.jpg' },
    { name: 'Noodles Manchuriyan', full: '80 ₹', half: '60 ₹', image: 'https://www.everydayeasyeats.com/wp-content/uploads/2016/06/Chinese-Fried-Rice-1.jpg' },
    { ads: true },
]

const soupList = [
    { ads: true },
    { name: 'Manchow Soup', full: '50 ₹', half: '--', image: 'https://c.ndtvimg.com/2020-12/3eq2hi3_manchurian_625x300_21_December_20.jpg' },
    // { name: 'Tomato Soup', full: '50 ₹', half: '--', image: 'https://www.swatirecipe.com/wp-content/uploads/2018/04/manchow-soup-recipe.jpg' },
    { name: 'Tapela Soup', full: '70 ₹', half: '--', image: 'https://www.everydayeasyeats.com/wp-content/uploads/2016/06/Chinese-Fried-Rice-1.jpg' },
    { ads: true },
]

const ProductListScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { id } = route.params
    return (
        <ImageBackground resizeMode='stretch' source={require('../../assets/images/productlist_bg.png')} style={styles.container}>
            <Header>
                <HeaderLeft>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/images/goback_icon.png')} style={styles.gobacklogo} />
                    </TouchableOpacity>
                </HeaderLeft>
            </Header>
            <Container>
                <Text style={styles.titleTxt}>{`${route.params.title}\nMenu`}</Text>
                <FlatList
                    data={id == 1 ? menuList : id == 2 ? riceList : id == 3 ? bhelList : id == 4 ? pneerList : id == 5 ? noodleList : soupList}
                    contentContainerStyle={{ paddingVertical: wp(8) }}
                    renderItem={({ item, index }) => (
                        item.ads ?
                            <DishAdsList/> :
                            <DishList
                                item={item}
                                index={index}
                            />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: wp(4) }} />
                    )}
                />
            </Container>
            <View style={{ width: '100%', alignItems: 'center', backgroundColor: 'white' }}>
                <BannerAd
                    size={BannerAdSize.BANNER}
                    unitId={adsId.banner_ads_id}
                    onAdLoaded={(eror) => console.log(eror)}
                    // onAdFailedToLoad={(error) => console.error(error)}
                    // ref={bannerRef}
                />
            </View>
        </ImageBackground>
    )
}

export default ProductListScreen;

