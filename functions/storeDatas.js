import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (datas) => {
    try {
        const jsonDatas = JSON.stringify(datas)
        await AsyncStorage.setItem('@todoListKey', jsonDatas)
    } catch (e) {
        console.log(`ERROR ON STORING DATAS:\n${e}`);
    }
}

export default storeData;