import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Dimensions, Pressable } from "react-native";
import { useState, useEffect } from "react";
//////////////////
import AsyncStorage from "@react-native-async-storage/async-storage";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SearchResult from "./screens/SearchResult";
import SplashScreen from "./screens/SplashScreen";
import SelectedResult from "./screens/SelectedResult";
import LanguageSelectionPage from "./screens/LanguageSelectionPage";
import PassengersInformation from "./screens/PassengersInformation";
import TermsAndConditions from "./screens/TermsAndConditions";
import PaymentOption from "./screens/PaymentOptions";
import TicketScreen from "./screens/TicketScreen";
import BusSeat from "./screens/BusSeat";
import returnSearchResult from "./screens/returnSearchResult";
import selectedReturnSearch from "./screens/SelectedReturnSearch";
import BusSeatReturn from "./screens/BusSeatReturn";
import PaymentInformation from "./screens/PaymentInformation";
import RefundTicket from "./screens/RefundTicket";
import CancelTicket from "./screens/CancelTicket";
import RefundCancelTicket from "./screens/RefundCancelTicket";
import SuccessPage from "./screens/SuccessPage";
import PrintTest from "./screens/PrinterTest"
import Handover from "./screens/Handover";
import ConfirmationKey from "./screens/ConfirmationKey";
import Pin from "./screens/Pin";

import Login from "./screens/Login";
//Screen names
const homeName = "LIYU BUS";
const detailsName = "Ticket";
const settingsName = "Settings";
const splashScreen = "splash";
const { Navigator, Screen } = createStackNavigator();

const screenWidth = Dimensions.get("window").width;
const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return ( 
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="splash"
        headerMode="none"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === detailsName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#FF6A22",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen
          name={homeName}
          component={Home}
          options={() => ({
            headerShown: false,
            unmountOnBlur: true,
            tabBarStyle: {
              display: "none",
            },
          })}
          listeners={({ navigation }) => ({
            blur: () => navigation.setParams({ screen: undefined }),
          })}
        />

        <Tab.Screen
          name={detailsName}
          component={DetailsScreen}
          options={() => ({ unmountOnBlur: true })}
        />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const Home = () => {
  return (
    <Navigator>
          <Screen
        name="confirmKey"
        component={ConfirmationKey}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
          <Screen
        name="pin"
        component={Pin}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
      <Screen
        name="login"
        component={Login}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
      <Screen
        name="home"
        component={HomeScreen}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />

      {/* <Screen name = 'languageselection' component={LanguageSelectionPage}   options={{ headerShown: false }}/>
     <Screen name = 'termsandconditions' component={TermsAndConditions} options={{ headerShown: false }}/> */}

      <Screen
        name="returnSearchResult"
        component={returnSearchResult}
        options={{
          title: "Select Your Return",
          headerStyle: {
            backgroundColor: "#FFF7F3EB",
            alignItems: "center",
            height: 60,
          },
          headerTintColor: "#FF6A22",
          headerTitleStyle: {
            // fontWeight: 'bold',
            color: "#000000",
            fontSize: 18,
          },
        }}
      />
      <Screen
        name="BusSeatReturn"
        component={BusSeatReturn}
        options={{
          title: "Select Return Seat",
          headerStyle: {
            backgroundColor: "#FFF7F3EB",
            alignItems: "center",
            height: 60,
          },
          headerTintColor: "#FF6A22",
          headerTitleStyle: {
            // fontWeight: 'bold',
            color: "#000000",
            fontSize: 18,
          },
        }}
      />
      <Screen
        name="paymentInformation"
        component={PaymentInformation}
        options={{
          title: "Payment Options",
          headerStyle: {
            backgroundColor: "#FFF7F3EB",
            alignSelf: "center",

            height: 60,
          },
          headerTintColor: "#FF6A22",
          headerTitleStyle: {
            // fontWeight: 'bold',
            marginLeft: screenWidth / 4,
            color: "#000000",
            fontSize: 18,
          },
          headerLeft: () => null,
        }}
      />

      <Screen
        name="selectedReturnSearch"
        component={selectedReturnSearch}
        options={{
          title: "Return Ticket",
          headerStyle: {
            backgroundColor: "#3c6791",
            alignItems: "center",
            height: 60,
          },
          headerTintColor: "white",
          headerTitleStyle: {
            // fontWeight: 'bold',
            color: "black",
            fontSize: 18,
          },
        }}
      />

      <Screen
        name="busseat"
        component={BusSeat}
        options={{
          title: "Select Departure Seat",

          headerStyle: {
            backgroundColor: "#FFF7F3EB",
            alignItems: "center",
            height: 60,
          },
          headerTintColor: "#FF6A22",
          headerTitleStyle: {
            // fontWeight: 'bold',
            color: "#000000",
            fontSize: 18,
          },
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="refundTicket"
        component={RefundTicket}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
      <Screen
        name="cancelTicket"
        component={CancelTicket}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
      <Screen
        name="refundCancelTicket"
        component={RefundCancelTicket}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
      <Screen
        name="success"
        component={SuccessPage}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
      <Screen
        name="handover"
        component={Handover}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
      <Screen
        name="ticketScreen"
        component={TicketScreen}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />

<Screen
        name="PrintScreen"
        component={PrintTest}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />

      <Screen
        name="paymentOption"
        component={PaymentOption}
        options={{
          title: "Checkout Page",
          headerStyle: {
            backgroundColor: "#FFF7F3EB",
            alignItems: "center",
            height: 60,
          },
          headerTintColor: "#FF6A22",
          headerTitleStyle: {
            // fontWeight: 'bold',
            color: "#FF6A22",
            fontSize: 16,
          },
        }}
      />
      <Screen
        name="Passenger Information"
        component={PassengersInformation}
        options={{
          title: "Passenger Information",
          headerStyle: {
            backgroundColor: "#FFF7F3EB",
            alignItems: "center",
            height: 60,
          },
          headerTintColor: "#FF6A22",
          headerTitleStyle: {
            // fontWeight: 'bold',
            color: "#FF6A22",
            fontSize: 16,
          },
        }}
      />
      <Screen
        name="search"
        component={SearchResult}
        options={{
          title: "Select Your Departure",
          
          headerStyle: {
            backgroundColor: "#FFF7F3EB",
            alignItems: "center",
            height: 60,
          },
          headerTintColor: "#FF6A22",
          headerTitleStyle: {
            // fontWeight: 'bold',
            color: "#FF6A22",
            fontSize: 16,
          },
        }}
      />
      <Screen
        name="selectedResult"
        component={SelectedResult}
        options={{
          title: "Selected Result",
          headerStyle: {
            backgroundColor: "#3c6791",
            alignItems: "center",
            height: 60,
          },
          headerTintColor: "white",
          headerTitleStyle: {
            // fontWeight: 'bold',
            color: "white",
            fontSize: 15,
          },
        }}
      />
      <Screen
        name="passengersInfo"
        component={PassengersInformation}
        options={{
          title: "Passengers Information",
          headerStyle: {
            backgroundColor: "#3c6791",
            alignItems: "center",
            height: 60,
          },
          headerTintColor: "white",
          headerTitleStyle: {
            // fontWeight: 'bold',
            color: "white",
            fontSize: 15,
          },
        }}
      />
    </Navigator>
  );
};
