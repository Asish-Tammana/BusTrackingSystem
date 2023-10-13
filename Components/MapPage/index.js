import React, { useState, useContext } from 'react';
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { AuthContext } from '../../Context/authenticationContext';

const MapPage = (props) => {

    const [currentPosition, SetCurrentPositon] = useState(0)


    const {logout} = useContext(AuthContext)

    const updateStop = () => {
        if(currentPosition < data.length){
            SetCurrentPositon(currentPosition + 1)
        }
    }


    const data = [
        {time: '09:00', title: 'Stop 1', description: 'Stop 1 Description'},
        {time: '10:45', title: 'Stop 2', description: 'Stop 2 Description'},
        {time: '12:00', title: 'Stop 3', description: 'Stop 3 Description'},
        {time: '14:00', title: 'Stop 4', description: 'Stop 4 Description'},
        {time: '16:30', title: 'Stop 5', description: 'Stop 5 Description'},
        {time: '09:00', title: 'Stop 6', description: 'Stop 6 Description'},
        {time: '10:45', title: 'Stop 7', description: 'Stop 7 Description'},
        {time: '12:00', title: 'Stop 8', description: 'Stop 8 Description'},
        {time: '14:00', title: 'Stop 9', description: 'Stop 9 Description'},
        {time: '16:30', title: 'Stop 10', description: 'Stop 10 Description'},
      ]

      const names = data.map(person => person.title);
      

    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize: 30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#fe7013'
    }



    return (
        <ScrollView>
            <View style={{ flex: 1, padding: 20, height: 1000 }}>
                <Text style={{color: 'black'}}>Bus Route 1</Text>
                <StepIndicator 
                    customStyles={customStyles}
                    labels={names}
                    currentPosition={currentPosition}
                    direction='vertical'
                    stepCount={data.length}
                />
                <Button title="Next" onPress={updateStop} />
                <Text> </Text>
                <Button title='Logout' onPress={() => {logout()}} />
            </View>
        </ScrollView>
    );
}

export default MapPage