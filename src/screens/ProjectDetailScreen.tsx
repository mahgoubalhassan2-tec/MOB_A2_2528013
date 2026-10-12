import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { ProjectsStackParamList } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { CustomButton } from '../components/CustomButton';
import { COLORS, SPACING, FONTS } from '../constants/theme';

export const ProjectDetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<ProjectsStackParamList, 'ProjectDetail'>>();
  const navigation = useNavigation();
  const { projectId } = route.params;

  const project =
    PROJECTS_DATA.find((p) => p.id === projectId) || PROJECTS_DATA[0];

  const handleOpenLink = async (url: string) => {
    Alert.alert(
      'External Link Notice',
      'This action requires an active internet connection to open GitHub. Are you currently connected?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Proceed to Open',
          onPress: async () => {
            const canOpen = await Linking.canOpenURL(url);
            if (canOpen) {
              Linking.openURL(url);
            } else {
              Alert.alert('Error', 'Unable to open the external link.');
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* TOP BAR / BACK NAVIGATION */}
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
            accessibilityLabel="Go back to projects list"
          >
            <Text style={styles.backButtonText}>← Back to Projects</Text>
          </TouchableOpacity>
          <View style={styles.offlineBadge}>
            <Text style={styles.offlineText}>Offline Verified</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.categoryPill}>
            <Text style={styles.categoryPillText}>{project.category}</Text>
          </View>
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectSummary}>{project.summary}</Text>

          {/* PROBLEM FORMULATION */}
          <View style={styles.detailSection}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionIcon}>🎯</Text>
              <Text style={styles.sectionTitle}>Problem Formulation</Text>
            </View>
            <Text style={styles.sectionBody}>{project.problem}</Text>
          </View>

          {/* STUDENT CONTRIBUTION */}
          <View style={styles.detailSection}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionIcon}>👨‍💻</Text>
              <Text style={styles.sectionTitle}>Student Contribution</Text>
            </View>
            <Text style={styles.sectionBody}>{project.studentContribution}</Text>
          </View>

          {/* TECHNOLOGIES USED */}
          <View style={styles.detailSection}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionIcon}>⚙️</Text>
              <Text style={styles.sectionTitle}>Technologies & Libraries</Text>
            </View>
            <View style={styles.techChipsContainer}>
              {project.technologyUsed.map((tech, idx) => (
                <View key={idx} style={styles.techChip}>
                  <Text style={styles.techChipText}>{tech}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* KEY FEATURES */}
          <View style={styles.detailSection}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionIcon}>✨</Text>
              <Text style={styles.sectionTitle}>Key Architectural Features</Text>
            </View>
            {project.keyFeatures.map((feat, idx) => (
              <View key={idx} style={styles.featureItemRow}>
                <Text style={styles.featureBullet}>✔</Text>
                <Text style={styles.featureItemText}>{feat}</Text>
              </View>
            ))}
          </View>

          {/* METRICS & OUTCOME */}
          <View style={styles.outcomeCard}>
            <Text style={styles.outcomeHeading}>Observed Metric / Testing Outcome</Text>
            <Text style={styles.outcomeBody}>{project.metricsOrOutcome}</Text>
          </View>

          {/* EXTERNAL GITHUB LINK WITH MANDATORY CONNECTION NOTICE */}
          <View style={styles.externalLinkContainer}>
            <Text style={styles.externalLabel}>
              Repository Source (Requires Internet Connection)
            </Text>
            <CustomButton
              title="View Repository on GitHub 🌐"
              onPress={() => handleOpenLink(project.githubUrl)}
              variant="outline"
              style={styles.githubBtn}
            />
            <Text style={styles.externalDisclaimer}>
              ⚠️ Note: All core project details above are permanently cached and
              viewable in Airplane Mode without network connectivity.
            </Text>
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.sm,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  backButtonText: {
    color: COLORS.primaryLight,
    fontSize: FONTS.body,
    fontWeight: '700',
  },
  offlineBadge: {
    backgroundColor: COLORS.successBg,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  offlineText: {
    color: COLORS.success,
    fontSize: FONTS.caption,
    fontWeight: '700',
  },
  content: {
    padding: SPACING.md,
  },
  categoryPill: {
    alignSelf: 'flex-start',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: SPACING.xs,
  },
  categoryPillText: {
    color: COLORS.primaryLight,
    fontSize: FONTS.caption,
    fontWeight: '700',
  },
  projectTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  projectSummary: {
    fontSize: FONTS.body,
    color: COLORS.textMuted,
    lineHeight: 22,
    marginBottom: SPACING.md,
  },
  detailSection: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  sectionIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: FONTS.h3,
    fontWeight: '700',
    color: COLORS.text,
  },
  sectionBody: {
    fontSize: FONTS.body,
    color: COLORS.textMuted,
    lineHeight: 22,
  },
  techChipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techChip: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  techChipText: {
    color: COLORS.text,
    fontSize: FONTS.caption,
    fontWeight: '600',
  },
  featureItemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  featureBullet: {
    color: COLORS.accent,
    fontSize: 12,
    marginRight: 8,
    marginTop: 2,
  },
  featureItemText: {
    flex: 1,
    fontSize: FONTS.body,
    color: COLORS.textMuted,
    lineHeight: 20,
  },
  outcomeCard: {
    backgroundColor: COLORS.accentLight,
    borderRadius: 14,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.accent,
  },
  outcomeHeading: {
    fontSize: FONTS.caption,
    fontWeight: '800',
    color: COLORS.accent,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  outcomeBody: {
    fontSize: FONTS.body,
    color: COLORS.text,
    fontWeight: '500',
    lineHeight: 20,
  },
  externalLinkContainer: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  externalLabel: {
    fontSize: FONTS.caption,
    fontWeight: '700',
    color: COLORS.textLight,
    marginBottom: SPACING.sm,
  },
  githubBtn: {
    marginBottom: SPACING.xs,
  },
  externalDisclaimer: {
    fontSize: 11,
    color: COLORS.textMuted,
    lineHeight: 16,
    fontStyle: 'italic',
  },
});
