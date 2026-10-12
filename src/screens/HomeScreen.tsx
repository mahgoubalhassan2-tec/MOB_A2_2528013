import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { HeaderBanner } from '../components/HeaderBanner';
import { CustomButton } from '../components/CustomButton';
import { loadProfile } from '../storage/profileStorage';
import { UserProfile, RootTabParamList } from '../types';
import { INITIAL_PROFILE, PROJECTS_DATA } from '../data/portfolioData';
import { COLORS, SPACING, FONTS } from '../constants/theme';

export const HomeScreen: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>(INITIAL_PROFILE);
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      loadProfile().then((data) => {
        if (isActive) {
          setProfile(data);
        }
      });
      return () => {
        isActive = false;
      };
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HeaderBanner
          title="Student Portfolio"
          subtitle="SWE 3409 Mobile Application Development"
          showVerificationBadge={true}
          verificationCode={profile.verificationCode}
        />

        <View style={styles.body}>
          {/* MANDATORY CORE IDENTITY STATEMENT */}
          <View style={styles.statementCard}>
            <Text style={styles.statementLabel}>OFFICIAL IDENTITY STATEMENT</Text>
            <Text style={styles.statementText}>
              My name is {profile.fullName}.
            </Text>
          </View>

          {/* PROFILE SUMMARY CARD */}
          <View style={styles.profileCard}>
            <View style={styles.avatarRow}>
              {profile.avatarUri ? (
                <Image
                  source={{ uri: profile.avatarUri }}
                  style={styles.avatarImage}
                  accessibilityLabel="Mahgoub Alhassan profile picture"
                />
              ) : (
                <View style={styles.avatarFallback}>
                  <Text style={styles.avatarInitials}>MA</Text>
                </View>
              )}
              <View style={styles.profileMeta}>
                <Text style={styles.studentName}>{profile.fullName}</Text>
                <Text style={styles.headlineText}>{profile.headline}</Text>
                <View style={styles.statusPill}>
                  <View style={styles.statusIndicator} />
                  <Text style={styles.statusText}>{profile.availabilityStatus}</Text>
                </View>
              </View>
            </View>

            <View style={styles.divider} />

            <Text style={styles.sectionHeading}>Professional Biography</Text>
            <Text style={styles.bioText}>{profile.biography}</Text>

            <View style={styles.badgeRow}>
              <View style={styles.infoBadge}>
                <Text style={styles.infoBadgeLabel}>PRIMARY SKILL</Text>
                <Text style={styles.infoBadgeValue}>{profile.primarySkill}</Text>
              </View>
              <View style={styles.infoBadge}>
                <Text style={styles.infoBadgeLabel}>REG NUMBER</Text>
                <Text style={styles.infoBadgeValue}>{profile.registrationNumber}</Text>
              </View>
            </View>
          </View>

          {/* PORTFOLIO SNAPSHOT STATS */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{PROJECTS_DATA.length}</Text>
              <Text style={styles.statLabel}>Featured Projects</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>6+</Text>
              <Text style={styles.statLabel}>Core Skills</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>100%</Text>
              <Text style={styles.statLabel}>Offline Ready</Text>
            </View>
          </View>

          {/* ACTION BUTTONS */}
          <View style={styles.actionsContainer}>
            <CustomButton
              title="Explore Projects Portfolio →"
              onPress={() => navigation.navigate('ProjectsTab')}
              variant="primary"
              style={styles.actionBtn}
            />
            <View style={styles.secondaryActionsRow}>
              <CustomButton
                title="View Skills & Education"
                onPress={() => navigation.navigate('SkillsTab')}
                variant="outline"
                style={styles.halfBtn}
              />
              <CustomButton
                title="Edit Profile Data"
                onPress={() => navigation.navigate('ProfileTab')}
                variant="secondary"
                style={styles.halfBtn}
              />
            </View>
          </View>

          {/* ASSIGNMENT CONTEXT NOTE */}
          <View style={styles.academicFooter}>
            <Text style={styles.academicTitle}>INES-Ruhengeri Academic Submission</Text>
            <Text style={styles.academicText}>
              Institution: Institut d'Enseignement Supérieur de Ruhengeri{'\n'}
              Course: Mobile Application Development (SWE 3409){'\n'}
              Verification Code: {profile.verificationCode}
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
  body: {
    paddingHorizontal: SPACING.md,
    marginTop: -SPACING.sm,
  },
  statementCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: SPACING.md,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primaryLight,
    marginBottom: SPACING.md,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  statementLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: COLORS.primaryLight,
    letterSpacing: 1,
    marginBottom: 4,
  },
  statementText: {
    fontSize: FONTS.h2,
    fontWeight: '800',
    color: COLORS.primaryDark,
    lineHeight: 28,
  },
  profileCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: COLORS.primaryLight,
  },
  avatarFallback: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.primaryLight,
  },
  avatarInitials: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
  },
  profileMeta: {
    flex: 1,
    marginLeft: SPACING.md,
  },
  studentName: {
    fontSize: FONTS.h2,
    fontWeight: '700',
    color: COLORS.text,
  },
  headlineText: {
    fontSize: FONTS.caption,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.successBg,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    marginTop: 6,
  },
  statusIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.success,
    marginRight: 6,
  },
  statusText: {
    color: COLORS.success,
    fontSize: 11,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.md,
  },
  sectionHeading: {
    fontSize: FONTS.h3,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
  },
  bioText: {
    fontSize: FONTS.body,
    color: COLORS.textMuted,
    lineHeight: 22,
    marginBottom: SPACING.md,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 8,
  },
  infoBadge: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: SPACING.sm,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  infoBadgeLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.textLight,
  },
  infoBadgeValue: {
    fontSize: FONTS.caption,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 2,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: SPACING.md,
  },
  statBox: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.primary,
  },
  statLabel: {
    fontSize: 11,
    color: COLORS.textMuted,
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
  actionsContainer: {
    marginBottom: SPACING.md,
  },
  actionBtn: {
    marginBottom: SPACING.sm,
  },
  secondaryActionsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  halfBtn: {
    flex: 1,
  },
  academicFooter: {
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  academicTitle: {
    fontSize: FONTS.caption,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },
  academicText: {
    fontSize: 11,
    color: COLORS.textMuted,
    lineHeight: 16,
  },
});
