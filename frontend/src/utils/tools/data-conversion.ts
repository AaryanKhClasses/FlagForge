import { fa1, fa8, faArrowDown19, faArrowUp91, faHashtag, faLink, faLock, faLockOpen, faN, faSquareBinary } from '@fortawesome/free-solid-svg-icons'
import type { ToolDefinition } from '../types'

export const DATA_CONVERSION_TOOLS: ToolDefinition[] = [
    {
        id: 'to-base64',
        name: 'Convert to Base 64',
        description: 'Convert text to Base64 format',
        category: 'Data Conversion',
        icon: faLock,
        execute: input => btoa(String.fromCharCode(...new TextEncoder().encode(input)))
    },
    {
        id: 'from-base64',
        name: 'Convert from Base 64',
        description: 'Convert Base64 data to text',
        category: 'Data Conversion',
        icon: faLockOpen,
        execute: input => {
            const bytes = Uint8Array.from(atob(input), c => c.charCodeAt(0))
            return new TextDecoder().decode(bytes)
        }
    },
    {
        id: 'to-hex',
        name: 'Convert to Hex',
        description: 'Convert text to its hexadecimal representation',
        category: 'Data Conversion',
        icon: faHashtag,
        execute: input => Array.from(new TextEncoder().encode(input)).map(byte => byte.toString(16).padStart(2, '0')).join('')
    },
    {
        id: 'from-hex',
        name: 'Convert from Hex',
        description: 'Convert hexadecimal data to text',
        category: 'Data Conversion',
        icon: faHashtag,
        execute: input => {
            const bytes = new Uint8Array(input.match(/.{1,2}/g)?.map(byte => parseInt(byte, 16)) || [])
            return new TextDecoder().decode(bytes)
        }
    },
    {
        id: 'to-decimal',
        name: 'Convert to Decimal',
        description: 'Convert text to its decimal representation',
        category: 'Data Conversion',
        icon: fa1,
        execute: input => Array.from(new TextEncoder().encode(input)).map(byte => byte.toString(10)).join(' ')
    },
    {
        id: 'from-decimal',
        name: 'Convert from Decimal',
        description: 'Convert decimal data to text',
        category: 'Data Conversion',
        icon: fa1,
        execute: input => {
            const bytes = new Uint8Array(input.split(' ').map(num => parseInt(num, 10)))
            return new TextDecoder().decode(bytes)
        }
    },
    {
        id: 'to-binary',
        name: 'Convert to Binary',
        description: 'Convert text to its binary representation',
        category: 'Data Conversion',
        icon: faSquareBinary,
        execute: input => Array.from(new TextEncoder().encode(input)).map(byte => byte.toString(2).padStart(8, '0')).join(' ')
    },
    {
        id: 'from-binary',
        name: 'Convert from Binary',
        description: 'Convert binary data to text',
        category: 'Data Conversion',
        icon: faSquareBinary,
        execute: input => {
            const bytes = new Uint8Array(input.split(' ').map(num => parseInt(num, 2)))
            return new TextDecoder().decode(bytes)
        }
    },
    {
        id: 'to-octal',
        name: 'Convert to Octal',
        description: 'Convert text to its octal representation',
        category: 'Data Conversion',
        icon: fa8,
        execute: input => Array.from(new TextEncoder().encode(input)).map(byte => byte.toString(8)).join(' ')
    },
    {
        id: 'from-octal',
        name: 'Convert from Octal',
        description: 'Convert octal data to text',
        category: 'Data Conversion',
        icon: fa8,
        execute: input => {
            const bytes = new Uint8Array(input.split(' ').map(num => parseInt(num, 8)))
            return new TextDecoder().decode(bytes)
        }
    },
    {
        id: 'to-base-n',
        name: 'Convert to Base N',
        description: 'Convert a decimal number to a custom Base N representation',
        category: 'Data Conversion',
        icon: faN,
        options: [
            { key: 'base', label: 'Base', type: 'number', default: 16 }
        ],
        execute: (input, options) => {
            if(!input.trim()) return ''
            const base = options.base ?? 16
            if(typeof base !== 'number' || base < 2 || base > 36) throw new Error('Base must be a number between 2 and 36')
            if(isNaN(base)) throw new Error('Base must be a valid number')
            if(isNaN(Number(input))) throw new Error('Input must be a valid number')
            return parseInt(input, 10).toString(base)
        }
    },
    {
        id: 'from-base-n',
        name: 'Convert from Base N',
        description: 'Convert a custom Base N representation to a decimal number',
        category: 'Data Conversion',
        icon: faN,
        options: [
            { key: 'base', label: 'Base', type: 'number', default: 16 }
        ],
        execute: (input, options) => {
            if(!input.trim()) return ''
            const base = options.base ?? 16
            if(typeof base !== 'number' || base < 2 || base > 36) throw new Error('Base must be a number between 2 and 36')
            if(isNaN(base)) throw new Error('Base must be a valid number')
            if(Number.isNaN(parseInt(input, base))) throw new Error(`Input contains characters that are not valid for base ${base}`)
            if(isNaN(parseInt(input, base))) throw new Error(`Input must be a valid number in base ${base}`)
            return parseInt(input, base).toString(10)
        }
    },
    {
        id: 'to-bcd',
        name: 'Convert to BCD',
        description: 'Convert text to its Binary-Coded Decimal representation',
        category: 'Data Conversion',
        icon: faArrowDown19,
        execute: input => {
            if(!input.trim()) return ''
            if(input.split('').some(char => isNaN(parseInt(char, 10)))) throw new Error('Input must be a valid decimal number')
            return input.split('').map(digit => parseInt(digit, 10).toString(2).padStart(4, '0')).join(' ')
        }
    },
    {
        id: 'from-bcd',
        name: 'Convert from BCD',
        description: 'Convert Binary-Coded Decimal data to text',
        category: 'Data Conversion',
        icon: faArrowUp91,
        execute: input => {
            if(!input.trim()) return ''
            const bytes = input.split(' ').map(num => parseInt(num, 2))
            if(bytes.some(byte => byte < 0 || byte > 9)) throw new Error('Input must be a valid BCD representation')
            return bytes.map(byte => byte.toString(10)).join('')
        }
    },
    {
        id: 'url-encode',
        name: 'URL Encode',
        description: 'Encode text for use in a URL',
        category: 'Data Conversion',
        icon: faLink,
        execute: input => encodeURIComponent(input)
    },
    {
        id: 'url-decode',
        name: 'URL Decode',
        description: 'Decode URL-encoded text',
        category: 'Data Conversion',
        icon: faLink,
        execute: input => decodeURIComponent(input)
    },
    {
        id: 'to-base32',
        name: 'Convert to Base 32',
        description: 'Convert text to Base32 format',
        category: 'Data Conversion',
        icon: faLock,
        options: [
            { key: 'alphabet', label: 'Alphabet', type: 'text', default: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567' }
        ],
        execute: (input, options) => {
            const alphabet = options.alphabet ?? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
            if(typeof alphabet !== 'string' || alphabet.length !== 32) throw new Error('Alphabet must be a string of 32 unique characters')
            const bytes = new TextEncoder().encode(input)
            let bits = 0, value = 0, output = ''
            for(let i = 0; i < bytes.length; i++) {
                value = (value << 8) | bytes[i]
                bits += 8
                while(bits >= 5) {
                    bits -= 5
                    output += alphabet[(value >> bits) & 31]
                }
            }
            if(bits > 0) output += alphabet[(value << (5 - bits)) & 31]
            return output
        }
    },
    {
        id: 'from-base32',
        name: 'Convert from Base 32',
        description: 'Convert Base32 data to text',
        category: 'Data Conversion',
        icon: faLockOpen,
        options: [
            { key: 'alphabet', label: 'Alphabet', type: 'text', default: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567' }
        ],
        execute: (input, options) => {
            const alphabet = options.alphabet ?? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
            if(typeof alphabet !== 'string' || alphabet.length !== 32) throw new Error('Alphabet must be a string of 32 unique characters')
            let bits = 0, value = 0, output = []
            for(let i = 0; i < input.length; i++) {
                const index = alphabet.indexOf(input[i])
                if(index === -1) throw new Error(`Input contains characters that are not in the provided alphabet`)
                value = (value << 5) | index
                bits += 5
                if(bits >= 8) {
                    bits -= 8
                    output.push((value >> bits) & 255)
                }
            }
            return new TextDecoder().decode(new Uint8Array(output))
        }
    },
    {
        id: 'to-base45',
        name: 'Convert to Base 45',
        description: 'Convert text to Base45 format',
        category: 'Data Conversion',
        icon: faLock,
        options: [
            { key: 'alphabet', label: 'Alphabet', type: 'text', default: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:' }
        ],
        execute: (input, options) => {
            const alphabet = options.alphabet ?? '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'
            if(typeof alphabet !== 'string' || alphabet.length !== 45) throw new Error('Alphabet must be a string of 45 unique characters')
            const bytes = new TextEncoder().encode(input)
            let output = ''
            for(let i = 0; i < bytes.length; i += 2) {
                if(i + 1 < bytes.length) {
                    const value = (bytes[i] << 8) | bytes[i + 1]
                    output += alphabet[value % 45]
                    output += alphabet[Math.floor(value / 45) % 45]
                    output += alphabet[Math.floor(value / 45 / 45)]
                } else {
                    const value = bytes[i]
                    output += alphabet[value % 45]
                    output += alphabet[Math.floor(value / 45)]
                }
            }
            return output
        }
    },
    {
        id: 'from-base45',
        name: 'Convert from Base 45',
        description: 'Convert Base45 data to text',
        category: 'Data Conversion',
        icon: faLockOpen,
        options: [
            { key: 'alphabet', label: 'Alphabet', type: 'text', default: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:' }
        ],
        execute: (input, options) => {
            const alphabet = options.alphabet ?? '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'
            if(typeof alphabet !== 'string' || alphabet.length !== 45) throw new Error('Alphabet must be a string of 45 unique characters')
            if(input.length % 3 === 1) throw new Error('Input is not a valid Base45 encoded string')
            let output = []
            for(let i = 0; i < input.length; i += 3) {
                const c0 = alphabet.indexOf(input[i])
                const c1 = alphabet.indexOf(input[i + 1])
                if(c0 === -1 || c1 === -1) throw new Error('Input contains characters that are not in the provided alphabet')
                if(i + 2 < input.length) {
                    const c2 = alphabet.indexOf(input[i + 2])
                    if(c2 === -1) throw new Error('Input contains characters that are not in the provided alphabet')
                    const value = c0 + c1 * 45 + c2 * 45 * 45
                    if(value > 0xFFFF) throw new Error('Decoded value exceeds 16 bits')
                    output.push((value >> 8) & 0xFF)
                    output.push(value & 0xFF)
                } else {
                    const value = c0 + c1 * 45
                    if(value > 0xFF) throw new Error('Decoded value exceeds 16 bits')
                    output.push(value)
                }
            }
            return new TextDecoder().decode(new Uint8Array(output))
        }
    },
    {
        id: 'to-base58',
        name: 'Convert to Base 58',
        description: 'Convert text to Base58 format',
        category: 'Data Conversion',
        icon: faLock,
        options: [
            { key: 'alphabet', label: 'Alphabet', type: 'text', default: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz' }
        ],
        execute: (input, options) => {
            const alphabet = options.alphabet ?? '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
            if(typeof alphabet !== 'string' || alphabet.length !== 58) throw new Error('Alphabet must be a string of 58 unique characters')
            const bytes = new TextEncoder().encode(input)
            let value = BigInt(0)
            for(const byte of bytes) value = (value << BigInt(8)) | BigInt(byte)
            let output = ''
            while(value > 0) {
                const remainder = value % BigInt(58)
                output = alphabet[Number(remainder)] + output
                value /= BigInt(58)
            }
            for(const byte of bytes) {
                if(byte === 0) output = alphabet[0] + output
                else break
            }
            return output
        }
    },
    {
        id: 'from-base58',
        name: 'Convert from Base 58',
        description: 'Convert Base58 data to text',
        category: 'Data Conversion',
        icon: faLockOpen,
        options: [
            { key: 'alphabet', label: 'Alphabet', type: 'text', default: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz' }
        ],
        execute: (input, options) => {
            const alphabet = options.alphabet ?? '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
            if(typeof alphabet !== 'string' || alphabet.length !== 58) throw new Error('Alphabet must be a string of 58 unique characters')
            let value = BigInt(0)
            for(const char of input) {
                const index = alphabet.indexOf(char)
                if(index === -1) throw new Error('Input contains characters that are not in the provided alphabet')
                value = value * BigInt(58) + BigInt(index)
            }
            const bytes = []
            while(value > 0) {
                bytes.push(Number(value & BigInt(0xFF)))
                value >>= BigInt(8)
            }
            for(const char of input) {
                if(char === alphabet[0]) bytes.push(0)
                else break
            }
            return new TextDecoder().decode(new Uint8Array(bytes.reverse()))
        }
    },
    {
        id: 'to-base62',
        name: 'Convert to Base 62',
        description: 'Convert text to Base62 format',
        category: 'Data Conversion',
        icon: faLock,
        options: [
            { key: 'alphabet', label: 'Alphabet', type: 'text', default: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' }
        ],
        execute: (input, options) => {
            const alphabet = options.alphabet ?? '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            if(typeof alphabet !== 'string' || alphabet.length !== 62) throw new Error('Alphabet must be a string of 62 unique characters')
            const bytes = new TextEncoder().encode(input)
            let value = BigInt(0)
            for(const byte of bytes) value = (value << BigInt(8)) | BigInt(byte)
            let output = ''
            while(value > 0) {
                const remainder = value % BigInt(62)
                output = alphabet[Number(remainder)] + output
                value /= BigInt(62)
            }
            return output
        }
    },
    {
        id: 'from-base62',
        name: 'Convert from Base 62',
        description: 'Convert Base62 data to text',
        category: 'Data Conversion',
        icon: faLockOpen,
        options: [
            { key: 'alphabet', label: 'Alphabet', type: 'text', default: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' }
        ],
        execute: (input, options) => {
            const alphabet = options.alphabet ?? '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            if(typeof alphabet !== 'string' || alphabet.length !== 62) throw new Error('Alphabet must be a string of 62 unique characters')
            let value = BigInt(0)
            for(const char of input) {
                const index = alphabet.indexOf(char)
                if(index === -1) throw new Error('Input contains characters that are not in the provided alphabet')
                value = value * BigInt(62) + BigInt(index)
            }
            const bytes = []
            while(value > 0) {
                bytes.push(Number(value & BigInt(0xFF)))
                value >>= BigInt(8)
            }
            for(const char of input) {
                if(char === alphabet[0]) bytes.push(0)
                else break
            }
            return new TextDecoder().decode(new Uint8Array(bytes.reverse()))
        }
    },
    {
        id: 'to-base85',
        name: 'Convert to Base 85',
        description: 'Convert text to Base85 format',
        category: 'Data Conversion',
        icon: faLock,
        options: [
            { key: 'alphabet', label: 'Alphabet', type: 'text', default: '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstu' }
        ],
        execute: (input, options) => {
            const alphabet = options.alphabet ?? '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstu'
            if(typeof alphabet !== 'string' || alphabet.length !== 85) throw new Error('Alphabet must be a string of 85 unique characters')
            const bytes = new TextEncoder().encode(input)
            let output = ''

            for(let i = 0; i < bytes.length; i += 4) {
                const remaining = Math.min(4, bytes.length - i)
                let value = 0n
                for(let j = 0; j < 4; j++) value = (value << 8n) | BigInt(bytes[i + j] ?? 0)
                const chars = new Array(5)
                for(let j = 4; j >= 0; j--) {
                    chars[j] = alphabet[Number(value % 85n)]
                    value /= 85n
                }
                if(remaining === 4) output += chars.join('')
                else output += chars.slice(0, remaining + 1).join('')
            }
        
            return output
        }
    },
    {
        id: 'from-base85',
        name: 'Convert from Base 85',
        description: 'Convert Base85 data to text',
        category: 'Data Conversion',
        icon: faLockOpen,
        options: [
            { key: 'alphabet', label: 'Alphabet', type: 'text', default: '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstu' }
        ],
        execute: (input, options) => {
            const alphabet = options.alphabet ?? '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstu'
            if(typeof alphabet !== 'string' || alphabet.length !== 85) throw new Error('Alphabet must be a string of 85 unique characters')
            if(input.length % 5 === 1) throw new Error('Input is not a valid Base85 encoded string')
            let output = []
            for(let i = 0; i < input.length; i += 5) {
                const remaining = Math.min(5, input.length - i)
                let value = 0n
                for(let j = 0; j < remaining; j++) {
                    const index = alphabet.indexOf(input[i + j])
                    if(index === -1) throw new Error('Input contains characters that are not in the provided alphabet')
                    value = value * 85n + BigInt(index)
                }
                for(let j = remaining; j < 5; j++) value = value * 85n + 84n
                if(value > 0xFFFFFFFFn) throw new Error('Decoded value exceeds 32 bits')

                const bytes = [
                    Number((value >> 24n) & 0xFFn),
                    Number((value >> 16n) & 0xFFn),
                    Number((value >> 8n) & 0xFFn),
                    Number(value & 0xFFn)
                ]
                if(remaining === 5) output.push(...bytes)
                else output.push(...bytes.slice(0, remaining - 1))
            }
            return new TextDecoder().decode(new Uint8Array(output))
        }
    },
    {
        id: 'to-base91',
        name: 'Convert to Base 91',
        description: 'Convert text to Base91 format',
        category: 'Data Conversion',
        icon: faLock,
        options: [
            { key: 'alphabet', label: 'Alphabet', type: 'text', default: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~"' }
        ],
        execute: (input, options) => {
            const alphabet = options.alphabet ?? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~"'
            if(typeof alphabet !== 'string' || alphabet.length !== 91) throw new Error('Alphabet must be a string of 91 unique characters')
            const bytes = new TextEncoder().encode(input)
            let output = ''
            let b = 0, n = 0
            for(const byte of bytes) {
                b += byte << n
                n += 8
                while(n > 13) {
                    let v = b & 8191
                    if(v > 88) {
                        b >>= 13
                        n -= 13
                    } else {
                        v = b & 16383
                        b >>= 14
                        n -= 14
                    }
                    output += alphabet[v % 91] + alphabet[Math.floor(v / 91)]
                }
            }
            if(n > 0) output += alphabet[b % 91]
            if(n > 7 || b > 90) output += alphabet[Math.floor(b / 91)]
            return output
        }
    },
    {
        id: 'from-base91',
        name: 'Convert from Base 91',
        description: 'Convert Base91 data to text',
        category: 'Data Conversion',
        icon: faLockOpen,
        options: [
            { key: 'alphabet', label: 'Alphabet', type: 'text', default: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~"' }
        ],
        execute: (input, options) => {
            const alphabet = options.alphabet ?? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~"'
            if(typeof alphabet !== 'string' || alphabet.length !== 91) throw new Error('Alphabet must be a string of 91 unique characters')
            let output = []
            let b = 0, n = 0, v = -1
            for(const char of input) {
                const c = alphabet.indexOf(char)
                if(c === -1) throw new Error('Input contains characters that are not in the provided alphabet')
                if(v === -1) v = c
                else {
                    v += c * 91
                    b |= v << n
                    n += (v & 8191) > 88 ? 13 : 14
                    while(n >= 8) {
                        output.push(b & 255)
                        b >>= 8
                        n -= 8
                    }
                    v = -1
                }
            }
            if(v !== -1) {
                b |= v << n
                n += (v & 8191) > 88 ? 13 : 14
                while(n >= 8) {
                    output.push(b & 255)
                    b >>= 8
                    n -= 8
                }
            }
            return new TextDecoder().decode(new Uint8Array(output))
        }
    }
] as const