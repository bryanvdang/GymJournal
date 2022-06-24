import { SafeAreaView, FlatList, StyleSheet, Text } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json"
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";

export default function HomeScreen({navigation}: NativeStackHeaderProps) {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>New Workout</Text>
            <FlatList data={data as Workout[]}
            renderItem={WorkoutItem}
            keyExtractor={item=> item.slug}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // padding: 20,
        flex: 1,
    },
    header: {
        fontSize: 20,
        paddingTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        fontWeight: 'bold'
    }
})