import React, { useState, useEffect } from "react";
import { View, Text, Button, Touchable, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native-web";
import { AnimatedCircularProgress } from "react-native-circular-progress";
// import { AnimatedCircularProgress } from 'react-native-circular-progress';

const CountingApp = () => {
  const [count, setCount] = useState(60);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let interval;

    if (isCounting&&count>0) {
      interval = setInterval(() => {
        
        setCount((prevCount) => prevCount  -1);
    
      }, 1000);
    }
    else if (count <= 0) {
      // Stop the counting when count reaches 0
      setIsCounting(false);
    }

    return () => clearInterval(interval);
  }, [isCounting,count]);

  const handleStart = () => {
    setIsCounting(true);
  };

  const handlePause= () => {
    setIsCounting((prevIsCounting)=>!prevIsCounting);
  };

  const handleCancel = () => {
    setIsCounting(false);
    setCount(60);
  };

  return (
     <LinearGradient colors= {['#FEAC5E','#C779D0','#4BC0C8']} style={{flex:1}}>
    <View
      style={{
        height: "100%",
        width: "100%",
        // backgroundColor: "pink",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 2,
          // backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <AnimatedCircularProgress
          size={200}
          width={10}
          fill={count}
          tintColor="purple"
          backgroundColor="white"
        >
          {(fill) => (
            <Text
              style={{
                fontSize: 30,
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                alignSelf: "center",
                // marginTop:60,
              }}
            >
              {count}
            </Text>
          )}
        </AnimatedCircularProgress>
        <View
          style={{
            flex: 1,
            height:"100%",
            width:"50%",
            marginTop: 35,
            // backgroundColor:"yellow",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            on
            onPress={() => {
              handleStart();
            }}
            style={{
              height: 45,
              width: 80,
              backgroundColor: "black",
              justifyContent: "center",

              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "400" }}>
              Start
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            on
            onPress={() => {
              handlePause();
            }}
            style={{
              height: 45,
              width: 80,
              backgroundColor: "black",
              justifyContent: "center",

              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "400" }}>
              pause
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            on
            onPress={() => {
              handleCancel();
            }}
            style={{
              height: 45,
              width: 80,
              backgroundColor: "black",
              justifyContent: "center",

              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "400" }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
     </LinearGradient>
  );
};

export default CountingApp;
