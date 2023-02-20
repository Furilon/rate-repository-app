import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from "./RepositoryItem";
import theme from '../theme';
import {useEffect, useState} from "react"
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  list: {
    background: theme.colors.backgroundGray,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const {repositories} = useRepositories();

  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      style={styles.list}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
      renderItem={({item}) => <RepositoryItem 
                                id={item.id}
                                ownerAvatarUrl={item.ownerAvatarUrl}
                                fullName={item.fullName} 
                                description={item.description} 
                                language={item.language} 
                                forksCount={item.forksCount} 
                                stargazersCount={item.stargazersCount} 
                                ratingAverage={item.ratingAverage} 
                                reviewCount={item.reviewCount}/>
                }
    />
  );
};

export default RepositoryList;