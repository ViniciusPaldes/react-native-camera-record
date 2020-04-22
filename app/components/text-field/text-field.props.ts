import { TextInputProps, TextStyle, ViewStyle, TextProps } from "react-native"

export interface TextFieldProps extends TextInputProps {
  /**
   * The placeholder i18n key.
   */
  placeholderTx?: string

  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string

  /**
   * The label i18n key.
   */
  labelTx?: string

  highlightTx?: string

  highlightText?: string

  /**
   * The label text if no labelTx is provided.
   */
  label?: string

  /**
   * The label text if no labelTx is provided.
   */
  labelProps?: TextProps

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: ViewStyle | ViewStyle[]

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: TextStyle | TextStyle[]

  /**
   * Various look & feels.
   */
  preset?: "default"

  forwardedRef?: any
}
