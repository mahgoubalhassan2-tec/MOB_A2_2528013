import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Project } from '../types';
import { COLORS, SPACING, FONTS } from '../constants/theme';

interface ProjectCardProps {
  project: Project;
  onPress: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={`View details for ${project.title}`}
    >
      <View style={styles.headerRow}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{project.category}</Text>
        </View>
        <View style={styles.offlinePill}>
          <Text style={styles.offlinePillText}>Offline Cached</Text>
        </View>
      </View>

      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.summary} numberOfLines={3}>
        {project.summary}
      </Text>

      <View style={styles.techContainer}>
        {project.technologyUsed.slice(0, 4).map((tech, index) => (
          <View key={index} style={styles.techBadge}>
            <Text style={styles.techText}>{tech}</Text>
          </View>
        ))}
        {project.technologyUsed.length > 4 && (
          <View style={styles.techBadge}>
            <Text style={styles.techText}>+{project.technologyUsed.length - 4}</Text>
          </View>
        )}
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.actionText}>View Full Project Breakdown →</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  categoryBadge: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  categoryText: {
    color: COLORS.primaryLight,
    fontSize: FONTS.caption,
    fontWeight: '700',
  },
  offlinePill: {
    backgroundColor: COLORS.successBg,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  offlinePillText: {
    color: COLORS.success,
    fontSize: 10,
    fontWeight: '700',
  },
  title: {
    fontSize: FONTS.h2,
    fontWeight: '700',
    color: COLORS.text,
    marginVertical: SPACING.xs,
  },
  summary: {
    fontSize: FONTS.body,
    color: COLORS.textMuted,
    lineHeight: 20,
    marginBottom: SPACING.sm,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: SPACING.sm,
  },
  techBadge: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  techText: {
    color: COLORS.text,
    fontSize: FONTS.caption,
    fontWeight: '600',
  },
  footerRow: {
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: SPACING.sm,
    alignItems: 'flex-end',
  },
  actionText: {
    color: COLORS.primaryLight,
    fontSize: FONTS.caption,
    fontWeight: '700',
  },
});
