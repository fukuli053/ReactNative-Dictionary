import React from 'react';import {Keyboard} from 'react-native';import Box from './box';import Input from './input';import Text from './text';import Button from './button';import {Search, X} from './icons';import theme from '../utils/theme';function SearchBox() {  const [isFocus, setFocus] = React.useState(false);  const [value, setValue] = React.useState('');  const onCancel = () => {    setFocus(false);    Keyboard.dismiss();  };  const onClear = () => {    setValue('');  };  return (    <Box flexDirection={'row'} alignItems={'center'}>      <Box position={'relative'} flex={1} justifyContent={'center'}>        <Input          style={{            shadowColor: '#000',            shadowOpacity: 0.1,            shadowRadius: 24,            shadowOffset: {              width: 0,              height: 4,            },          }}          bg="white"          height={52}          value={value}          borderRadius={'normal'}          placeholder={'Search something...'}          pl={52}          borderWidth={1}          borderColor={isFocus ? '#D1D1D1' : 'transparent'}          color={'textDark'}          placeholderTextColor="textMedium"          onFocus={() => setFocus(true)}          onChangeText={text => setValue(text)}        />        {value.length > 0 && (          <Button onPress={onClear} position={'absolute'} right={16}>            <X color={theme.colors.textDark} />          </Button>        )}        <Button onPress={() => setFocus(true)} position={'absolute'} left={16}>          <Search color={theme.colors.textMedium} />        </Button>      </Box>      {isFocus && (        <Button onPress={onCancel} px={15} h={52}>          <Text>Vazgeç</Text>        </Button>      )}    </Box>  );}export default SearchBox;