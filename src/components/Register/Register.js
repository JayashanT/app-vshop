import React,{useState} from 'react';
import {Button,InputItem,} from '@ant-design/react-native';
import {IconOutline} from '@ant-design/icons-react-native';
// import CountryPhoneInput from "antd-country-phone-input";
import {

    View,
  } from 'react-native';

  

const Register =()=>{
  const [isMobileEntered,setIsMobileEntered]=useState(false);
  const handleSubmit=()=>{
    console.log("pressed")
    setIsMobileEntered(true)
  }

  
    return(
    <View>
      <InputItem type="phone" placeholder="Mobile Number" style={{borderColor:"black",borderWidth:1}}></InputItem>
      <Button onPress={handleSubmit} type="primary">Enter</Button>
      {isMobileEntered ? 
      <View>
          <InputItem type="phone" placeholder="Enter Code Send to Mobile" style={{borderColor:"black",borderWidth:1}}></InputItem>
          <Button onPress={handleSubmit} type="primary">Enter</Button>
      </View>:null}
      
            {/* <CountryPhoneInput />  */}
    </View>);
}

export default Register