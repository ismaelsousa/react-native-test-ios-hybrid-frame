import { NitroModules } from 'react-native-nitro-modules'
import type { Test as TestSpec } from './specs/test.nitro'

export const Test =
  NitroModules.createHybridObject<TestSpec>('Test')