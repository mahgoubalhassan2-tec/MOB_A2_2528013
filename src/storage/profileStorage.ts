import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile } from '../types';
import { INITIAL_PROFILE } from '../data/portfolioData';

const PROFILE_STORAGE_KEY = '@mahgoub_portfolio_profile_v1';

export const loadProfile = async (): Promise<UserProfile> => {
  try {
    const rawData = await AsyncStorage.getItem(PROFILE_STORAGE_KEY);
    if (!rawData) {
      return INITIAL_PROFILE;
    }
    const parsed = JSON.parse(rawData);
    // Ensure vital immutable identity fields remain consistent
    return {
      ...INITIAL_PROFILE,
      ...parsed,
      fullName: INITIAL_PROFILE.fullName,
      registrationNumber: INITIAL_PROFILE.registrationNumber,
      verificationCode: INITIAL_PROFILE.verificationCode,
    };
  } catch (error) {
    console.error('Error loading profile from AsyncStorage:', error);
    return INITIAL_PROFILE;
  }
};

export const saveProfile = async (profile: UserProfile): Promise<boolean> => {
  try {
    const updatedProfile: UserProfile = {
      ...profile,
      lastUpdated: new Date().toISOString().split('T')[0],
    };
    await AsyncStorage.setItem(
      PROFILE_STORAGE_KEY,
      JSON.stringify(updatedProfile)
    );
    return true;
  } catch (error) {
    console.error('Error saving profile to AsyncStorage:', error);
    return false;
  }
};

export const resetProfile = async (): Promise<UserProfile> => {
  try {
    await AsyncStorage.removeItem(PROFILE_STORAGE_KEY);
    return INITIAL_PROFILE;
  } catch (error) {
    console.error('Error resetting profile in AsyncStorage:', error);
    return INITIAL_PROFILE;
  }
};
