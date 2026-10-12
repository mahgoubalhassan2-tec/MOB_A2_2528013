import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { SkillsScreen } from '../screens/SkillsScreen';
import { ProjectsListScreen } from '../screens/ProjectsListScreen';
import { ProjectDetailScreen } from '../screens/ProjectDetailScreen';
import { ProfileEditorScreen } from '../screens/ProfileEditorScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { RootTabParamList, ProjectsStackParamList } from '../types';
import { COLORS } from '../constants/theme';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<ProjectsStackParamList>();

// Nested Stack Navigator for Projects section (Rubric Requirement 5)
function ProjectsStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="ProjectsList"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="ProjectsList" component={ProjectsListScreen} />
      <Stack.Screen
        name="ProjectDetail"
        component={ProjectDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

// Main Bottom Tab Navigator
export const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textLight,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIcon: ({ focused }) => {
          let icon = '🏠';
          if (route.name === 'HomeTab') icon = '🏠';
          else if (route.name === 'ProjectsTab') icon = '💼';
          else if (route.name === 'SkillsTab') icon = '⚡';
          else if (route.name === 'ProfileTab') icon = '👤';
          else if (route.name === 'AboutTab') icon = 'ℹ️';

          return (
            <Text
              style={[
                styles.tabIcon,
                focused ? styles.tabIconFocused : styles.tabIconInactive,
              ]}
            >
              {icon}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="ProjectsTab"
        component={ProjectsStackNavigator}
        options={{ tabBarLabel: 'Projects' }}
      />
      <Tab.Screen
        name="SkillsTab"
        component={SkillsScreen}
        options={{ tabBarLabel: 'Skills' }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileEditorScreen}
        options={{ tabBarLabel: 'Editor' }}
      />
      <Tab.Screen
        name="AboutTab"
        component={AboutScreen}
        options={{ tabBarLabel: 'About' }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    height: 60,
    paddingBottom: 6,
    paddingTop: 6,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: '700',
  },
  tabIcon: {
    fontSize: 18,
  },
  tabIconFocused: {
    transform: [{ scale: 1.15 }],
  },
  tabIconInactive: {
    opacity: 0.6,
  },
});
