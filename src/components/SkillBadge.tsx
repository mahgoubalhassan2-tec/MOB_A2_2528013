import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SkillItem } from '../types';
import { COLORS, SPACING, FONTS } from '../constants/theme';

interface SkillBadgeProps {
  skill: SkillItem;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.name}>{skill.name}</Text>
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>{skill.level}</Text>
        </View>
      </View>
      <View style={styles.footerRow}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{skill.category}</Text>
        </View>
        <Text style={styles.experienceText}>{skill.experienceYears}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  name: {
    fontSize: FONTS.h3,
    fontWeight: '600',
    color: COLORS.text,
    flex: 1,
    marginRight: SPACING.sm,
  },
  levelBadge: {
    backgroundColor: COLORS.accentLight,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  levelText: {
    color: COLORS.accent,
    fontSize: FONTS.caption,
    fontWeight: '700',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.xs,
  },
  categoryBadge: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  categoryText: {
    color: COLORS.textMuted,
    fontSize: FONTS.caption,
    fontWeight: '500',
  },
  experienceText: {
    color: COLORS.textMuted,
    fontSize: FONTS.caption,
    fontWeight: '500',
  },
});
