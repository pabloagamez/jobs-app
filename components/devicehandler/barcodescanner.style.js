import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    camContainer: {
        backgroundColor: '#E6EAF4',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        height: 350, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 20,
        width: '50px'
    },
    camera: {
      flex: 1,
      width: '100%'
    },
    Scanner: {
        width: "70%",
        height: "50%",
        backgroundColor: "black",
    }
  });


  export default styles;