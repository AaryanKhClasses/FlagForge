import type { ToolDefinition } from '../types'
import { CRYPTOGRAPHY_TOOLS } from './cryptography'
import { DATA_CONVERSION_TOOLS } from './data-conversion'
import { HASHING_TOOLS } from './hashing'

export const TOOLS: ToolDefinition[] = [
    ...DATA_CONVERSION_TOOLS,
    ...CRYPTOGRAPHY_TOOLS,
    ...HASHING_TOOLS
] as const
