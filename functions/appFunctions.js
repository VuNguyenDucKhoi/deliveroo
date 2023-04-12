import * as Updates from 'expo-updates';

export const checkForUpdatesAsync = async () => {
  const update = await Updates.checkForUpdateAsync();

  if (update.isAvailable) {
    await Updates.fetchUpdateAsync();
    await Updates.reloadAsync();
  }
}

