import React, { Component,useState } from 'react';  
import { StyleSheet, View } from 'react-native';  
import MapView, { Circle } from 'react-native-maps';  
import { Marker } from 'react-native-maps';  

  
export default class App extends Component {  
  
  render() {  
    const marker= <Marker  //inside circle
    coordinate={{ latitude: 29.110394,  longitude:  76.945768 }}  
    title={"Shiv mandir"}  
    description={"Shiv mandir"}  
    
  

 
  
  
  /> 
    

   
    return (  
      <View style={styles.MainContainer}>  
  
        <MapView 
       
          style={styles.mapStyle}  
          showsUserLocation={true} 
          cameraPosition={{auto: true, zoom: 10}} 
          zoomEnabled={true}  
          zoomControlEnabled={true} 
          scrollGestures={true} 
          rotateGestures={true}
          showsUserLocation={true}
          myLocationButton={true}
          consumesGesturesInView={true}
          indoorPicker={true}
          compassButton={true}
          tiltGestures={true}
          zoomGestures={true}
          allowScrollGesturesDuringRotateOrZoom={true}
          initialRegion={{  
            latitude: 29.134594,   
            longitude: 76.964408,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }}>  
          

          <Marker  
            coordinate={{ latitude: 29.134594, longitude: 76.964408 }}  
            title={"Rohilla Bhawan"}  
            description={"Rohilla's Paradise"}  
          

         
          
          
          />  
          {marker}
         

          
           <Marker  //inside circle
            coordinate={{ latitude: 29.119866,   longitude: 76.970003 }}  
            title={"Shiv mandir"}  
            description={"Shiv mandir"}  
          

         
          
          
          /> 
  
          <Marker 
          coordinate={{latitude :29.141918, longitude: 76.954363}}
          title={"Balindpur"}
          description={"Balindpur"}
          />
          
            <Marker //outside circle
          coordinate={{latitude :29.126544,  longitude: 76.995754}}
          title={"Gumad"}
          description={"Gumad"}
          />
          
          <Circle
          center={{latitude: 29.133374,  longitude: 76.964408}}
          radius={1500}
          />


        </MapView>  
          
      </View>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  MainContainer: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
    alignItems: 'center',  
    justifyContent: 'flex-end',  
  },  
  mapStyle: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
  },  
});  