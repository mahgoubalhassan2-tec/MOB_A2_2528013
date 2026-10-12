import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { EducationItem } from '../types';
import { COLORS, SPACING, FONTS } from '../constants/theme';

interface EducationTimelineItemProps {
  item: EducationItem;
  isLast?: boolean;
}

export const EducationTimelineItem: React.FC<EducationTimelineItemProps> = ({
  item,
  isLast = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.timelineColumn}>
        <View style={styles.node} />
        {!isLast && <View style={styles.line} />}
      </View>
      <View style={styles.contentColumn}>
        <View style={styles.card}>
          <View style={styles.periodBadge}>
            <Text style={styles.periodText}>{item.period}</Text>
          </View>
          <Text style={styles.degree}>{item.degree}</Text>
          <Text style={styles.institution}>{item.institution}</Text>
          <Text style={styles.faculty}>{item.faculty}</Text>
          <View style={styles.statusBox}>
            <Text style={styles.statusText}>Status: {item.currentStatus}</Text>
          </View>
          <Text style={styles.courseworkTitle}>Key Modules / Focus:</Text>
          {item.keyCoursework.map((course, idx) => (
            <View key={idx} style={styles.bulletRow}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>{course}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: SPACING.md,
  },
  timelineColumn: {
    width: 24,
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  node: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.primaryLight,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    marginTop: 4,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#CBD5E1',
    marginTop: 2,
  },
  contentColumn: {
    flex: 1,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  periodBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginBottom: SPACING.xs,
  },
  periodText: {
    color: COLORS.primaryLight,
    fontSize: FONTS.caption,
    fontWeight: '700',
  },
  degree: {
    fontSize: FONTS.h3,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 2,
  },
  institution: {
    fontSize: FONTS.body,
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: 2,
  },
  faculty: {
    fontSize: FONTS.caption,
    color: COLORS.textMuted,
    marginBottom: SPACING.xs,
  },
  statusBox: {
    backgroundColor: COLORS.successBg,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginVertical: SPACING.xs,
  },
  statusText: {
    color: COLORS.success,
    fontSize: FONTS.caption,
    fontWeight: '600',
  },
  courseworkTitle: {
    fontSize: FONTS.caption,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: SPACING.xs,
    marginBottom: 2,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 2,
  },
  bulletDot: {
    color: COLORS.primaryLight,
    fontSize: 14,
    marginRight: 6,
    lineHeight: 18,
  },
  bulletText: {
    fontSize: FONTS.caption,
    color: COLORS.textMuted,
    flex: 1,
    lineHeight: 18,
  },
});
