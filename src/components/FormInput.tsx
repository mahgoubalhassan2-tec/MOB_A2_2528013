import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { COLORS, SPACING, FONTS } from '../constants/theme';

interface FormInputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
  helperText?: string;
  charCount?: number;
  maxCharCount?: number;
  isRequired?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  errorMessage,
  helperText,
  charCount,
  maxCharCount,
  isRequired = false,
  style,
  ...rest
}) => {
  const hasError = !!errorMessage;

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>
          {label} {isRequired && <Text style={styles.requiredStar}>*</Text>}
        </Text>
        {typeof charCount === 'number' && typeof maxCharCount === 'number' && (
          <Text
            style={[
              styles.charCounter,
              charCount > maxCharCount ? styles.charCounterOver : null,
            ]}
          >
            {charCount}/{maxCharCount}
          </Text>
        )}
      </View>

      <TextInput
        style={[
          styles.input,
          hasError ? styles.inputError : null,
          rest.multiline ? styles.multilineInput : null,
          style,
        ]}
        placeholderTextColor={COLORS.textLight}
        accessibilityLabel={label}
        accessibilityHint={helperText}
        {...rest}
      />

      {hasError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorIcon}>⚠</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
      ) : helperText ? (
        <Text style={styles.helperText}>{helperText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  label: {
    fontSize: FONTS.body,
    fontWeight: '700',
    color: COLORS.text,
  },
  requiredStar: {
    color: COLORS.danger,
    fontWeight: '700',
  },
  charCounter: {
    fontSize: FONTS.caption,
    color: COLORS.textMuted,
  },
  charCounterOver: {
    color: COLORS.danger,
    fontWeight: '700',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: FONTS.body,
    color: COLORS.text,
  },
  multilineInput: {
    minHeight: 90,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: COLORS.danger,
    backgroundColor: '#FEF2F2',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  errorIcon: {
    color: COLORS.danger,
    fontSize: 12,
    marginRight: 4,
  },
  errorMessage: {
    color: COLORS.danger,
    fontSize: FONTS.caption,
    fontWeight: '600',
  },
  helperText: {
    color: COLORS.textMuted,
    fontSize: FONTS.caption,
    marginTop: 4,
  },
});
