import {View, Text, StyleSheet} from "react-native"

export default function RepositoryItem({fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount}) {
    return (
        <View>
            <Text>Full name: {fullName}</Text>
            <Text>Description: {description}</Text>
            <Text>Language: {language}</Text>
            <Text>Stars: {stargazersCount}</Text>
            <Text>Forks: {forksCount}</Text>
            <Text>Reviews: {reviewCount}</Text>
            <Text>Rating: {ratingAverage}</Text>
        </View>
    )
}