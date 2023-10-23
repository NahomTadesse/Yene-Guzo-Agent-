import { React, useEffect, useState } from "react";
import MainContainer from "./navigation/MainContainer";
import SearchResult from "./navigation/screens/SearchResult";
import SelectedResult from "./navigation/screens/SelectedResult";

import LanguageSelectionPage from "./navigation/screens/LanguageSelectionPage";
import SplashScreen from "react-native-splash-screen";
import PassengersInformation from "./navigation/screens/PassengersInformation";
import RefundCancelRequest from "./navigation/screens/RefundTicket";
import RefundCancelTicket from "./navigation/screens/RefundCancelTicket";
import Handover from "./navigation/screens/Handover";
import SuccessPage from "./navigation/screens/SuccessPage";
import Drawer from "./navigation/Drawer";
import PrinterTest from './navigation/screens/PrinterTest'
import ConfirmationKey from './navigation/screens/ConfirmationKey'
import Pin from "./navigation/screens/Pin";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Login from "./navigation/screens/Login";
import Sidebar from "./navigation/screens/Sidebar";
import "react-native-gesture-handler";
import { DataProvider } from "./navigation/DataContext";
function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <DataProvider>
 
    
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
     
        <MainContainer />
        {/* <ConfirmationKey/> */}
        {/* <Pin/> */}
        {/* <PrinterTest/> */}
        {/* <Sidebar /> */}
        {/* <Handover /> */}
        {/* <SuccessPage />  */}
        {/* <RefundCancelTicket /> */}
       
      </ApplicationProvider>
   
    
    </DataProvider>
  );
}

export default App;
