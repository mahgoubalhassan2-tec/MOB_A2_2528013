import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HeaderBanner } from '../components/HeaderBanner';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectsStackParamList } from '../types';
import { COLORS, SPACING, FONTS } from '../constants/theme';

export const ProjectsListScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProjectsStackParamList, 'ProjectsList'>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HeaderBanner
          title="Project Portfolio"
          subtitle="Genuine Engineering Projects & Mobile Solutions"
          showVerificationBadge={true}
        />

        <View style={styles.body}>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryTitle}>Student Practical Work</Text>
            <Text style={styles.summaryDescription}>
              Each project demonstrates problem formulation, student engineering
              contributions, architectural design, and offline capability. Tap any
              card to explore the complete technical breakdown.
            </Text>
          </View>

          <View style={styles.projectsList}>
            {PROJECTS_DATA.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onPress={() =>
                  navigation.navigate('ProjectDetail', { projectId: project.id })
                }
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: SPACING.xl,
  },
  body: {
    paddingHorizontal: SPACING.md,
    marginTop: SPACING.md,
  },
  summaryBox: {
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  summaryTitle: {
    fontSize: FONTS.h3,
    fontWeight: '700',
    color: COLORS.primaryDark,
    marginBottom: 4,
  },
  summaryDescription: {
    fontSize: FONTS.body,
    color: COLORS.textMuted,
    lineHeight: 20,
  },
  projectsList: {
    marginTop: SPACING.xs,
  },
});
