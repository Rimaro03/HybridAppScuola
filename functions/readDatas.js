import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@todoListKey')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(`ERROR ON READING DATAS:\n${e}`);
    }
}

export default getData;