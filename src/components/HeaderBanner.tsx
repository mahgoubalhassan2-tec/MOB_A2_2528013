import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONTS } from '../constants/theme';

interface HeaderBannerProps {
  title: string;
  subtitle?: string;
  showVerificationBadge?: boolean;
  verificationCode?: string;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  title,
  subtitle,
  showVerificationBadge = true,
  verificationCode = 'MOB-A2-8013',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.offlineBadge}>
          <View style={styles.offlineDot} />
          <Text style={styles.offlineText}>Offline Ready (Airplane Mode)</Text>
        </View>
        {showVerificationBadge && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeLabel}>CODE:</Text>
            <Text style={styles.badgeCode}>{verificationCode}</Text>
          </View>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
    flexWrap: 'wrap',
    gap: 8,
  },
  offlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  offlineDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4ADE80',
    marginRight: 6,
  },
  offlineText: {
    color: '#E2E8F0',
    fontSize: FONTS.caption,
    fontWeight: '500',
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.codeBadge,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeLabel: {
    color: COLORS.codeText,
    fontSize: 10,
    fontWeight: '700',
    marginRight: 4,
  },
  badgeCode: {
    color: COLORS.codeText,
    fontSize: FONTS.code,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  title: {
    color: '#FFFFFF',
    fontSize: FONTS.h1,
    fontWeight: '700',
    marginTop: 4,
  },
  subtitle: {
    color: '#CBD5E1',
    fontSize: FONTS.body,
    marginTop: 2,
  },
});
