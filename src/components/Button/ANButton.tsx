import React from 'react';
import { styled, useTheme } from '@material-ui/core/styles';
import MUIButton, { ButtonProps } from '@material-ui/core/Button';

export interface ANButtonProps extends ButtonProps {
  /**
   * Button type
   */
  type?: string;
  /**
   * If you want to override the color
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string | React.ReactNode;
  // /**
  //  * Any additional overwriting style.
  //  */
  // style: object;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Disable button
   */
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const ANButton: React.FC<any> = ({
  type = 'primary',
  // size = 'medium',
  backgroundColor,
  label,
  // style,
  disabled,
  ...props
}) => {
  const theme = useTheme();
  console.log(theme);

  const getBackground = () => {
    if (disabled) return `${theme.custom.greyscale.solid} !important`;
    if (backgroundColor) return backgroundColor;
    if (type === 'primary')
      return 'linear-gradient(107.79deg, #00C2FF 1.46%, #01E8F7 100%)';
    if (type === 'challenge')
      return 'linear-gradient(107.79deg, #F7B201 1.46%, #FF7A00 100%)';
    return '#ffffff';
  };
  const getBackgroundForHoveredState = () => {
    if (disabled) return '#D9E0F5 !important';
    if (backgroundColor) return backgroundColor;
    if (type === 'primary')
      return 'linear-gradient(107.79deg, #82E1FF 1.46%, #3CF3FF 100%)';
    if (type === 'challenge')
      return 'linear-gradient(107.79deg, #FFD056 1.46%, #FF9636 100%)';
    return '#ffffff';
  };
  const getBackgroundForPressedState = () => {
    if (disabled) return '#D9E0F5 !important';
    if (backgroundColor) return backgroundColor;
    if (type === 'primary')
      return 'linear-gradient(107.79deg, #01B9F2 1.46%, #01DBE9 100%)';
    if (type === 'challenge')
      return 'linear-gradient(107.79deg, #EBA900 1.46%, #ED7100 100%)';
    return '#EFF1F7;';
  };

  const getColor = () => {
    if (disabled) return '#B0BDE5 !important';
    if (type === 'secondary') return '#20232C';
    return '#ffffff';
  };

  const ANButton = styled(MUIButton)({
    color: getColor(),
    height: 46,
    width: 154,
    background: getBackground(),
    boxSizing: 'border-box',
    boxShadow: disabled
      ? 'none !important'
      : '0px 3px 3px rgba(116, 131, 178, 0.2)',
    borderRadius: '8px',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '22px',
    textTransform: 'none',
    animation: 'none',
    transition: 'none',
    '&:hover': {
      background: getBackgroundForHoveredState(),
      boxShadow: '0px 4px 4px rgba(116, 131, 178, 0.25)',
      color: type === 'secondary' ? '#7483B2' : 'white',
    },
    '&:active': {
      background: getBackgroundForPressedState(),
      boxShadow: '0px 1px 1px rgba(116, 131, 178, 0.35)',
    },
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
    // ...style,
  });

  return (
    <ANButton
      onClick={
        disabled
          ? () => {
              return;
            }
          : props.onClick
      }
    >
      {label}
    </ANButton>
  );
};
