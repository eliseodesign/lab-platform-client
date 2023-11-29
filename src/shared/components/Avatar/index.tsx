import React, { CSSProperties, forwardRef, ReactNode } from "react";
import { colors } from './colorPalette'
import * as AvatarPrimitive from "@radix-ui/react-avatar";

interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root> {
  className?: string;
}

interface AvatarImageProps extends React.ComponentProps<typeof AvatarPrimitive.Image> {
  className?: string;
}

interface AvatarFallbackProps extends React.ComponentProps<typeof AvatarPrimitive.Fallback> {
  className?: string;
  children: string;
  style?: CSSProperties;
}

const getFallbackNameAndColor = (name: string): string[] => {
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
  
  return [initials, colors[initials[0]]];
};

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className || ''}`}
      {...restProps}
    />
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={`aspect-square h-full w-full ${className || ''}`}
      {...restProps}
    />
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = forwardRef<HTMLDivElement, AvatarFallbackProps>((props, ref) => {
  const { className, children, ...restProps } = props;
  const [text, color] = getFallbackNameAndColor(children);

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={`flex h-full w-full items-center justify-center rounded-full ${className || ''}`}
      style={{ backgroundColor: color, ...(restProps.style || {}) }}
    >
      {text}
    </AvatarPrimitive.Fallback>
  );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
