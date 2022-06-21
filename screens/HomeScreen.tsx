import { SafeAreaView, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function HomeScreen({navigation}: NativeStackHeaderProps) {
    return(
        <SafeAreaView>
            <Text>I am Home Screen</Text>
            <Button 
                title="Go to Planner"
                onPress={() => navigation.navigate("Planner")}
            />
        </SafeAreaView>
    )
}