//const fs = require('fs').promises;
import * as Notifications from 'expo-notifications';

import {AppState} from 'react-native';
import { useRef } from "react";

let date;
function setStartDate()
{
    const appState = useRef(AppState.currentState);
    if(typeof date == 'undefined' || date == null) 
    {
        date = 0;
        setInterval(() => {
        if(appState.current != "inactive") date ++;
        //console.log(appState);
        //console.log(date);
        //console.log(AppState.currentState);
        }, 1000);
    }
}

function formatTime(secunde) {
    var sec = secunde%60;
    var minute = parseInt(secunde/60)%60;
    var ore = parseInt(secunde/3600)%3600;
    var timp = (ore > 0 ? ore + "h " : "") + (minute > 0 ? minute + "min " : "") + sec + "s";
    return timp;
}


export {formatTime, setStartDate, date};