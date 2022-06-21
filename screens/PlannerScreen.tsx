import { SafeAreaView, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function PlannerScreen({navigation}: NativeStackHeaderProps) {
    return(
        <SafeAreaView>
            <Text>I am Planner Screen</Text>
            <Button 
                title="Go to Home"
                onPress={() => navigation.navigate("Home")}
            />
        </SafeAreaView>
    )
}