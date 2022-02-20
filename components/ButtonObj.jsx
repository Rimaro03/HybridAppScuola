import { Button, ButtonGroup, withTheme } from 'react-native-elements';

export const ButtonObj = () => {
    return (
        <Button
        title="+"
        loading={false}
        loadingProps={{ size: 'medium', color: 'white' }}
        buttonStyle={{
            backgroundColor: 'black',
            borderRadius: 30,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
            marginHorizontal: 50,
            height: 50,
            width: 50,
            marginVertical: 10,
        }}
        onPress={(e) => {e.preventDefault(); console.log('aye')}}
        
    />
    );
}