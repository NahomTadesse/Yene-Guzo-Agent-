import {React,useState,useEffect,useRef,useContext} from 'react'
import { View,ScrollView,Text,Pressable,TouchableOpacity,ActivityIndicator,Dimensions, TextInput } from 'react-native'
import {
    Icon,
    IconElement,
    Input,
    Button,
    Layout,
  } from "@ui-kitten/components";
  import  NumericPad  from  'react-native-numeric-pad'
  import { Ionicons } from  '@expo/vector-icons'
  import { Buffer } from 'buffer'
  import axios from "axios";
  import { DataContext } from '../DataContext';

export default function Pin ({navigation}){
  const [loading, setLoading] = useState(false);
  const[Pin,setPin]=useState('')
const[confPin,setConfPin]=useState('')
const [showOne,setShowOne]=useState(true)
const [showTwo,setShowTwo] = useState(false)

const { condata, addData } = useContext(DataContext);
useEffect(()=>{
  console.log(condata);
 
},[condata])
const headers = {
  'Authorization': 'Bearer your_token_here'
};
const numpadRef = useRef(null)
////////////////////
const clientId = 'appuser';
const clientSecret = 'appuser@123';


const encodedCredentials = Buffer.from(clientId + ':' + clientSecret).toString('base64');
const authorizationHeader = `Basic ${encodedCredentials}`;

// console.log(authorizationHeader);
////////////////////
const ConfirmBtn=()=> {
  setLoading(true);
console.log('hi')
axios
.get("http://159.65.88.161:8085/CrossRegional/api/v1/authentication", {
  headers: {
    Authorization: authorizationHeader
  }
})
    .then(response => {
      console.log('response--------',response.data)
      addData(response.data)
      navigation.navigate("home");

    })
    .catch(error => {
      console.log('error--------', error);
      setLoading(false);
    })
    .finally(()=>{setLoading(false)})
}

    const EnterPinView = ()=>{
      const screenWidth = Dimensions.get('window').width
      const Next =()=>{
        setShowOne(false);
        setShowTwo(true)
      }

        return(
            <View style={{marginTop:200}}>
<Text style={{fontSize:16,fontWeight:'600',alignSelf:"center",marginBottom:10}}>Enter Your PIN</Text>
<TextInput
        style={{fontSize:28,alignSelf:'center',color:'#FF6B1B'}}
        showSoftInputOnFocus={false}
        maxLength={8}
        autoFocus={true}
        editable={false}
        selectTextOnFocus={false}
        value={Pin}
        />
             

              <NumericPad
        ref={numpadRef}
        numLength={8}
        buttonSize={60}
        activeOpacity={0.1}
        onValueChange={value => setPin(value)}
        allowDecimal={true}
        // Try them to understand each area :)
        // style={{ backgroundColor: 'black', paddingVertical: 12 }}
        // buttonAreaStyle={{ backgroundColor: 'gray' }}
        // buttonItemStyle={{ backgroundColor: 'red' }}
        rightBottomButton={<Ionicons name={'ios-backspace-outline'} size={28} color={'#000'}/>}
        onRightBottomButtonPress={() => {numpadRef.current.clear()}
        }
      />
               <Button style={{backgroundColor:'#FF6B1B',borderColor:'#FF6B1B',
               width:screenWidth/1.3,alignSelf:'center'}}
               onPress={Next}>Next</Button>


            </View>
        )
    }
    const ConfPinView = ()=>{
      const screenWidth = Dimensions.get('window').width

        return(
            <View style={{marginTop:200}}>
<Text style={{fontSize:16,fontWeight:'600',alignSelf:"center",marginBottom:10}}>Enter Your PIN</Text>
<TextInput
        style={{fontSize:28,alignSelf:'center',color:'#FF6B1B'}}
        showSoftInputOnFocus={false}
        maxLength={8}
        autoFocus={true}
        editable={false}
        selectTextOnFocus={false}
        value={confPin}
        />
             

              <NumericPad
        ref={numpadRef}
        numLength={8}
        buttonSize={60}
        activeOpacity={0.1}
        onValueChange={value => setConfPin(value)}
        allowDecimal={true}
        // Try them to understand each area :)
        // style={{ backgroundColor: 'black', paddingVertical: 12 }}
        // buttonAreaStyle={{ backgroundColor: 'gray' }}
        // buttonItemStyle={{ backgroundColor: 'red' }}
        rightBottomButton={<Ionicons name={'ios-backspace-outline'} size={28} color={'#000'}/>}
        onRightBottomButtonPress={() => {numpadRef.current.clear()}
        }
      />  
        <Button onPress={ConfirmBtn} style={{backgroundColor:'#FF6B1B',borderColor:'#FF6B1B',
      width:screenWidth/1.3,alignSelf:'center'}}
      >Confirm</Button>


            </View>
        )
    }
    return(
        <ScrollView>
          <View>
{showOne ? EnterPinView(): showTwo ? ConfPinView():''}
{loading && (
            <View>
              <ActivityIndicator size={"large"} color="#FF6B1B" />
            </View>
          )}
</View>
        </ScrollView>
    )
}