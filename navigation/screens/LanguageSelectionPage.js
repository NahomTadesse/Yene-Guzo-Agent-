import React,{useState,useEffect} from 'react';
import { View, ScrollView,Text, StyleSheet,Textarea,
ImageBackground,Dimensions,ActivityIndicator,Switch,TextInput, Button, Pressable , Date } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
import { faBus } from '@fortawesome/free-solid-svg-icons/faBus'
import axios from 'axios'



    const screenWidth = Dimensions.get('window').width
export default function SearchResult({navigation}) {
    const [loading, setLoading] = useState(false)

    const Language = ['አማርኛ' , 'English','French','Spanish']
    const selectLang=()=>{
        setLoading(true)
        axios('http://liyu-bus-api.dev.kifiya.et/liyu-bus-api/v1/api/location', {
           method: 'GET'
        })
        .then(res => {
         
         var locationData = res.data
         navigation.navigate('home',{locationData})
   
         //  console.log(Respons)
           // setLocation(res.data)
           //  console.log(location[0].name) 
           // console.log(location[10].name)
           // var locationData = location
           // console.log(locationData)
         // navigation.navigate('home',{locationData})
   
            
        })
        .catch((error) => {
           console.error(error);
        }).finally(() => setLoading(false));
   
        // navigation.navigate('termsandconditions')
        
    }
    const [lingo , setLingo] = useState(0)
    
    const lang=()=>{
        i = 0
if(Language.length-1 !== 0){
    setLingo(lingo-1)
    // while(Language.length-1 ==0){setLingo(0)}

}
else {
    setLi
}

// return setLingo(0)

      
    }

    const langRev=()=>{
        if(Language.length -1 !== lingo && lingo>=0){ setLingo(lingo+1)}
        else {
            setLingo(0)
        }
              
            }
    return(
<View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#3c6791'}}>
<FontAwesomeIcon  icon={faBus} size = {200} style={{color:'white'}}/>
    <View >
   
    <Text style = {styles.mainText}>LIYU BUS</Text>
            <Text style = {styles.text}>{`Search > Book > Go`}</Text>
    </View>
    <Text style={{fontSize:25,
        color: 'white',
        fontWeight:'normal',
        }}>
        Choose Your Language
    </Text>
    <View>
   <View style={{width:screenWidth/1.1,height:50,borderRadius:15,backgroundColor:'white',marginVertical:20}}  >

<View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>

<Pressable  onPress={lang}>
  
<FontAwesomeIcon icon={faAngleLeft} style={{color:'#f27f22',top:3}} size ='40'/>
</Pressable>

<Text style={{fontSize:20,fontWeight:'bold',textAlignVertical:'center',color:'#3c6791',fontSize:25}}>{Language[lingo]}</Text>


    <Pressable onPress={langRev}>
<FontAwesomeIcon icon={faAngleRight} style={{color:'#f27f22',top:3}} size ='40'/>
</Pressable>

</View>



    </View>
    </View>
    <View>
            <Pressable onPress={selectLang} style={{backgroundColor:'#f27f22',width:screenWidth/1.1,height:50,borderRadius:15
        ,marginBottom:50,alignItems:'center',justifyContent:'center'}}>
  <Text style={{color:'white',fontSize:20}}>Select</Text>
</Pressable>
{loading && 
   ( <View>
<ActivityIndicator size={'large'} color='tomato'/>
    </View>)
    }
</View>
</View>
    )
}

const styles = StyleSheet.create({
    mainText:{  fontSize:50,
        color: 'white'},
    text:{
        color:'white',
        textAlign:'center',
        marginBottom:50
    }
})