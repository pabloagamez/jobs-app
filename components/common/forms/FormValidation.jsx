import React, { useState, useEffect } from 'react'; 
import { 
    View, 
    TextInput, 
    TouchableOpacity,  
    Text,
    SafeAreaView,
    Alert } 
from 'react-native'; 
import styles from "./formValidation.style";

const FormValidation = () => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [errors, setErrors] = useState({}); 
    const [isFormValid, setIsFormValid] = useState(false); 

    useEffect(() => { 
        validateForm(); 
    }, [name, email, password]); 

    const validateForm = () => { 
        let errors = {}; 
        if (!name) { 
            errors.name = 'Name is required.'; 
        } 
  
        if (!email) { 
            errors.email = 'Email is required.'; 
        } else if (!/\S+@\S+\.\S+/.test(email)) { 
            errors.email = 'Email is invalid.'; 
        } 
  
        if (!password) { 
            errors.password = 'Password is required.'; 
        } else if (password.length < 6) { 
            errors.password = 'Password must be at least 6 characters.'; 
        } 
  
        setErrors(errors); 
        setIsFormValid(Object.keys(errors).length === 0); 
    };

    const handleSubmit = () => { 
        if (isFormValid) {  
            showAlert();
            console.log('Form submitted successfully!'); 
        } else {            
            console.log('Form has errors. Please correct them.'); 
        } 
    }; 

    const showAlert = () => {
        Alert.alert('Process validation', 'Form data has been validated successfully', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
            },
        ]);
    }

  return (
    <SafeAreaView>
      <View style={styles.container}> 
            <TextInput 
                style={styles.input} 
                placeholder="Name"
                value={name} 
                onChangeText={setName} 
            /> 
            <TextInput 
                style={styles.input} 
                placeholder="Email"
                value={email} 
                onChangeText={setEmail} 
            /> 
            <TextInput 
                style={styles.input} 
                placeholder="Password"
                value={password} 
                onChangeText={setPassword} 
                secureTextEntry 
            /> 
            <TouchableOpacity 
                style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]} 
                disabled={!isFormValid} 
                onPress={handleSubmit} 
            > 
                <Text style={styles.buttonText}>Submit</Text> 
            </TouchableOpacity>               
            {Object.values(errors).map((error, index) => ( 
                <Text key={index} style={styles.error}> 
                    {error} 
                </Text> 
            ))} 
        </View> 
    </SafeAreaView>
  );
}

export default FormValidation;