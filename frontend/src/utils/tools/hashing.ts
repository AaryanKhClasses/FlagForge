import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import CryptoJS from 'crypto-js'
import type { ToolDefinition } from '../types'

export const HASHING_TOOLS: ToolDefinition[] = [
    {
        id: 'md5',
        name: 'MD5 Hash',
        description: 'Generate MD5 hash of a given input string.',
        icon: faHashtag,
        execute: input => CryptoJS.MD5(input).toString()
    },
    {
        id: 'sha1',
        name: 'SHA-1 Hash',
        description: 'Generate SHA-1 hash of a given input string.',
        icon: faHashtag,
        execute: input => CryptoJS.SHA1(input).toString()
    },
    {
        id: 'sha2',
        name: 'SHA-2 Hash',
        description: 'Generate SHA-2 hash of a given input string.',
        icon: faHashtag,
        options: [
            { key: 'size', label: 'Hash Size', type: 'select', default: '256', options: ['224', '256', '384', '512'] }
        ],
        execute: (input, options) => {
            const size = options?.size || '256'
            switch(size) {
                case '224': return CryptoJS.SHA224(input).toString()
                case '256': default: return CryptoJS.SHA256(input).toString()
                case '384': return CryptoJS.SHA384(input).toString()
                case '512': return CryptoJS.SHA512(input).toString()
            }
        }
    },
    {
        id: 'keccak',
        name: 'Keccak[c=2d] Hash',
        description: 'Generate Keccak[c=2d] hash of a given input string.',
        icon: faHashtag,
        options: [
            { key: 'size', label: 'Hash Size', type: 'select', default: '256', options: ['224', '256', '384', '512'] }
        ],
        execute: (input, options) => {
            const size = options?.size || '256'
            return CryptoJS.SHA3(input, { outputLength: parseInt(size) }).toString()
        }
    },
    {
        id: 'ripemd160',
        name: 'RIPEMD-160 Hash',
        description: 'Generate RIPEMD-160 hash of a given input string.',
        icon: faHashtag,
        execute: input => CryptoJS.RIPEMD160(input).toString()
    }
] as const
