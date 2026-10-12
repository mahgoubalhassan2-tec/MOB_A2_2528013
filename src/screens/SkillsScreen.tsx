import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { HeaderBanner } from '../components/HeaderBanner';
import { SkillBadge } from '../components/SkillBadge';
import { EducationTimelineItem } from '../components/EducationTimelineItem';
import { SKILLS_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { COLORS, SPACING, FONTS } from '../constants/theme';

export const SkillsScreen: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Mobile', 'Language', 'Architecture', 'Tools & DevOps'];

  const filteredSkills =
    activeFilter === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeFilter);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HeaderBanner
          title="Skills & Education"
          subtitle="Competencies, Frameworks & Academic Trajectory"
          showVerificationBadge={true}
        />

        <View style={styles.body}>
          {/* SECTION 1: SKILLS */}
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Technical Competencies</Text>
            <Text style={styles.countBadge}>{filteredSkills.length} Skills</Text>
          </View>
          <Text style={styles.sectionSubtitle}>
            Verified technical skill set applied across SWE 3409 practical assignments.
          </Text>

          {/* FILTER PILLS */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterRow}
          >
            {categories.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <TouchableOpacity
                  key={cat}
                  style={[
                    styles.filterPill,
                    isSelected ? styles.filterPillActive : null,
                  ]}
                  onPress={() => setActiveFilter(cat)}
                  accessibilityRole="button"
                  accessibilityLabel={`Filter by ${cat}`}
                >
                  <Text
                    style={[
                      styles.filterPillText,
                      isSelected ? styles.filterPillTextActive : null,
                    ]}
                  >
                    {cat}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* SKILLS LIST */}
          <View style={styles.skillsList}>
            {filteredSkills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </View>

          {/* SECTION 2: EDUCATION TIMELINE */}
          <View style={[styles.sectionHeaderRow, { marginTop: SPACING.lg }]}>
            <Text style={styles.sectionTitle}>Education & Academic Timeline</Text>
          </View>
          <Text style={styles.sectionSubtitle}>
            Formal training and foundational learning background.
          </Text>

          <View style={styles.timelineContainer}>
            {EDUCATION_DATA.map((item, index) => (
              <EducationTimelineItem
                key={item.id}
                item={item}
                isLast={index === EDUCATION_DATA.length - 1}
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
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: FONTS.h2,
    fontWeight: '700',
    color: COLORS.text,
  },
  countBadge: {
    backgroundColor: '#EFF6FF',
    color: COLORS.primaryLight,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    fontSize: FONTS.caption,
    fontWeight: '700',
  },
  sectionSubtitle: {
    fontSize: FONTS.body,
    color: COLORS.textMuted,
    marginTop: 2,
    marginBottom: SPACING.sm,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
    paddingVertical: SPACING.xs,
    marginBottom: SPACING.md,
  },
  filterPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  filterPillActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filterPillText: {
    fontSize: FONTS.caption,
    fontWeight: '600',
    color: COLORS.textMuted,
  },
  filterPillTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  skillsList: {
    marginTop: SPACING.xs,
  },
  timelineContainer: {
    marginTop: SPACING.md,
  },
});
