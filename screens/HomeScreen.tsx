import { SafeAreaView, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json"

export default function HomeScreen({navigation}: NativeStackHeaderProps) {
    return(
        <SafeAreaView>
            <Text>I am Home Screen</Text>
            <Text>{ JSON.stringify(data)}</Text>
        </SafeAreaView>
    )
}