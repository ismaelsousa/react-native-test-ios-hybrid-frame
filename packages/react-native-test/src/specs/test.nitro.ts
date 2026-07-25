import type { HybridObject } from 'react-native-nitro-modules'
import type { Frame } from 'react-native-vision-camera'

export interface Test extends HybridObject<{
  ios: 'swift'
  android: 'kotlin'
}> {
  sum(num1: number, num2: number): number
  call(frame: Frame): void
}
