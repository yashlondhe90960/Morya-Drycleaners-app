
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

const Carousel = () => {
  const images = [
    "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
    "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor='rgb(19, 39, 79)' // Provide valid color string or value
        inactiveDotColor='rgba(144, 170, 74, 0.5)'  // Provide valid color string or value
        ImageComponentStyle={{
          borderRadius: 6,
          width: '94%',
          // Add more styles here if needed
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({})