import {View, StyleSheet, Image} from "react-native"
import Text from "./Text"
import theme from '../theme';


const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flexDirection: "column",
        backgroundColor: theme.colors.backgroundWhite,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    name: {
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.body + 4,
    },
    description: {
        fontSize: 15,
        color: theme.colors.textSecondary,
        marginVertical: 10
    },
    languageContainer: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 3,
        width: 200,
        color: theme.colors.backgroundWhite,
        fontSize: 15,
    },
    numbersContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    numberItem: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10
    }
})

export default function RepositoryItem(
    {
        ownerAvatarUrl, 
        fullName, 
        description, 
        language, 
        forksCount, 
        stargazersCount, 
        ratingAverage, 
        reviewCount
    }) {

    const shorten = (num) => {
        if (num > 1000) {
            num = (num / 1000).toFixed(1)
            num = String(num)
            num += "k"
        }

        return num
    }

    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row"}}>
                <Image style={styles.image} source={{uri: ownerAvatarUrl}}/>
                <View style={{flexDirection: "column", paddingLeft: 15, justifyContent: "flex-start"}}>
                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.languageContainer}>{language}</Text>
                </View>
            </View>
            <View style={styles.numbersContainer}>
                <View style={styles.numberItem}>
                    <Text style={styles.name}>{shorten(stargazersCount)}</Text>
                    <Text style={styles.description}>Stars</Text>
                </View>
                <View style={styles.numberItem}>
                    <Text style={styles.name}>{shorten(forksCount)}</Text>
                    <Text style={styles.description}>Forks</Text>
                </View>
                <View style={styles.numberItem}>
                    <Text style={styles.name}>{shorten(reviewCount)}</Text>
                    <Text style={styles.description}>Reviews</Text>
                </View>
                <View style={styles.numberItem}>
                    <Text style={styles.name}>{shorten(ratingAverage)}</Text>
                    <Text style={styles.description}>Rating</Text>
                </View>
            </View>
        </View>
    )
}