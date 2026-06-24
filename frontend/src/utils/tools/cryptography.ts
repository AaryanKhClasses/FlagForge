import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
import CryptoJS from 'crypto-js'
import type { ToolDefinition } from '../types'

const OPTIONS: any[] = [
    { key: 'key', label: 'Key', type: 'text', default: '' },
    { key: 'key_format', label: 'Key Format', type: 'select', default: 'UTF-8', options: ['UTF-8', 'Hex', 'Base64'] },
    { key: 'iv', label: 'IV', type: 'text', default: '' },
    { key: 'iv_format', label: 'IV Format', type: 'select', default: 'UTF-8', options: ['UTF-8', 'Hex', 'Base64'] },
    { key: 'mode', label: 'Mode', type: 'select', default: 'CBC', options: ['CBC', 'CFB', 'CTR', 'OFB'] },
    { key: 'padding', label: 'Padding', type: 'select', default: 'Pkcs7', options: ['Pkcs7', 'AnsiX923', 'Iso10126', 'ZeroPadding', 'NoPadding'] },
    { key: 'input_format', label: 'Input Format', type: 'select', default: 'UTF-8', options: ['UTF-8', 'Hex', 'Base64'] },
    { key: 'output_format', label: 'Output Format', type: 'select', default: 'Base64', options: ['UTF-8', 'Hex', 'Base64'] }
]

export const CRYPTOGRAPHY_TOOLS: ToolDefinition[] = [
    {
        id: 'aes-encrypt',
        name: 'AES Encrypt',
        description: 'Encrypt text using AES encryption',
        category: 'Cryptography',
        icon: faLock,
        options: OPTIONS,
        execute: (input, options) => {
            const key = getParsedFormat('Key', options.key, options.key_format)
            const iv = getParsedFormat('IV', options.iv, options.iv_format)
            const mode = getMode(options.mode)
            const padding = getPadding(options.padding)
            const inputFormat = getFormat('Input', options.input_format)
            const outputFormat = getFormat('Output', options.output_format)

            const encrypted = CryptoJS.AES.encrypt(inputFormat.parse(input), key, { iv, mode, padding })
            return encrypted.ciphertext.toString(outputFormat)
        }
    },
    {
        id: 'aes-decrypt',
        name: 'AES Decrypt',
        description: 'Decrypt text using AES decryption',
        category: 'Cryptography',
        icon: faLockOpen,
        options: OPTIONS,
        execute: (input, options) => {
            const key = getParsedFormat('Key', options.key, options.key_format)
            const iv = getParsedFormat('IV', options.iv, options.iv_format)
            const mode = getMode(options.mode)
            const padding = getPadding(options.padding)
            const inputFormat = getFormat('Input', options.input_format)
            const outputFormat = getFormat('Output', options.output_format)

            const cipherText = inputFormat.parse(input)
            const decrypted = CryptoJS.AES.decrypt(cipherText.toString(CryptoJS.enc.Base64), key, { iv, mode, padding })
            return decrypted.toString(outputFormat)
        }
    },
    {
        id: 'des-encrypt',
        name: 'DES Encrypt',
        description: 'Encrypt text using DES encryption',
        category: 'Cryptography',
        icon: faLock,
        options: OPTIONS,
        execute: (input, options) => {
            const key = getParsedFormat('Key', options.key, options.key_format)
            const iv = getParsedFormat('IV', options.iv, options.iv_format)
            const mode = getMode(options.mode)
            const padding = getPadding(options.padding)
            const inputFormat = getFormat('Input', options.input_format)
            const outputFormat = getFormat('Output', options.output_format)

            const encrypted = CryptoJS.DES.encrypt(inputFormat.parse(input), key, { iv, mode, padding })
            return encrypted.ciphertext.toString(outputFormat)
        }
    },
    {
        id: 'des-decrypt',
        name: 'DES Decrypt',
        description: 'Decrypt text using DES decryption',
        category: 'Cryptography',
        icon: faLockOpen,
        options: OPTIONS,
        execute: (input, options) => {
            const key = getParsedFormat('Key', options.key, options.key_format)
            const iv = getParsedFormat('IV', options.iv, options.iv_format)
            const mode = getMode(options.mode)
            const padding = getPadding(options.padding)
            const inputFormat = getFormat('Input', options.input_format)
            const outputFormat = getFormat('Output', options.output_format)

            const cipherText = inputFormat.parse(input)
            const decrypted = CryptoJS.DES.decrypt(cipherText.toString(CryptoJS.enc.Base64), key, { iv, mode, padding })
            return decrypted.toString(outputFormat)
        }
    },
    {
        id: 'tdes-encrypt',
        name: 'Triple DES Encrypt',
        description: 'Encrypt text using Triple DES encryption',
        category: 'Cryptography',
        icon: faLock,
        options: OPTIONS,
        execute: (input, options) => {
            const key = getParsedFormat('Key', options.key, options.key_format)
            const iv = getParsedFormat('IV', options.iv, options.iv_format)
            const mode = getMode(options.mode)
            const padding = getPadding(options.padding)
            const inputFormat = getFormat('Input', options.input_format)
            const outputFormat = getFormat('Output', options.output_format)

            const encrypted = CryptoJS.TripleDES.encrypt(inputFormat.parse(input), key, { iv, mode, padding })
            return encrypted.ciphertext.toString(outputFormat)
        }
    },
    {
        id: 'tdes-decrypt',
        name: 'Triple DES Decrypt',
        description: 'Decrypt text using Triple DES decryption',
        category: 'Cryptography',
        icon: faLockOpen,
        options: OPTIONS,
        execute: (input, options) => {
            const key = getParsedFormat('Key', options.key, options.key_format)
            const iv = getParsedFormat('IV', options.iv, options.iv_format)
            const mode = getMode(options.mode)
            const padding = getPadding(options.padding)
            const inputFormat = getFormat('Input', options.input_format)
            const outputFormat = getFormat('Output', options.output_format)

            const cipherText = inputFormat.parse(input)
            const decrypted = CryptoJS.TripleDES.decrypt(cipherText.toString(CryptoJS.enc.Base64), key, { iv, mode, padding })
            return decrypted.toString(outputFormat)
        }
    },
    {
        id: 'blowfish-encrypt',
        name: 'Blowfish Encrypt',
        description: 'Encrypt text using Blowfish encryption',
        category: 'Cryptography',
        icon: faLock,
        options: OPTIONS,
        execute: (input, options) => {
            const key = getParsedFormat('Key', options.key, options.key_format)
            const iv = getParsedFormat('IV', options.iv, options.iv_format)
            const mode = getMode(options.mode)
            const padding = getPadding(options.padding)
            const inputFormat = getFormat('Input', options.input_format)
            const outputFormat = getFormat('Output', options.output_format)

            const encrypted = CryptoJS.Blowfish.encrypt(inputFormat.parse(input), key, { iv, mode, padding })
            return encrypted.ciphertext.toString(outputFormat)
        }
    },
    {
        id: 'blowfish-decrypt',
        name: 'Blowfish Decrypt',
        description: 'Decrypt text using Blowfish decryption',
        category: 'Cryptography',
        icon: faLockOpen,
        options: OPTIONS,
        execute: (input, options) => {
            const key = getParsedFormat('Key', options.key, options.key_format)
            const iv = getParsedFormat('IV', options.iv, options.iv_format)
            const mode = getMode(options.mode)
            const padding = getPadding(options.padding)
            const inputFormat = getFormat('Input', options.input_format)
            const outputFormat = getFormat('Output', options.output_format)

            const cipherText = inputFormat.parse(input)
            const decrypted = CryptoJS.Blowfish.decrypt(cipherText.toString(CryptoJS.enc.Base64), key, { iv, mode, padding })
            return decrypted.toString(outputFormat)
        }
    },
    {
        id: 'rc4',
        name: 'RC4',
        description: 'Encrypt text using RC4 encryption',
        options: OPTIONS.filter(option => option.key !== 'iv' && option.key !== 'iv_format' && option.key !== 'mode' && option.key !== 'padding'),
        category: 'Cryptography',
        icon: faLock,
        execute: (input, options) => {
            const key = getParsedFormat('Key', options.key, options.key_format)
            const inputFormat = getFormat('Input', options.input_format)
            const outputFormat = getFormat('Output', options.output_format)

            const encrypted = CryptoJS.RC4.encrypt(inputFormat.parse(input), key)
            return encrypted.ciphertext.toString(outputFormat)
        }
    },
    {
        id: 'rc4-drop',
        name: 'RC4 Drop',
        description: 'Decrypt text using RC4 decryption with drop',
        options: [
            { key: 'key', label: 'Key', type: 'text', default: '' },
            { key: 'key_format', label: 'Key Format', type: 'select', default: 'UTF-8', options: ['UTF-8', 'Hex', 'Base64'] },
            { key: 'input_format', label: 'Input Format', type: 'select', default: 'UTF-8', options: ['UTF-8', 'Hex', 'Base64'] },
            { key: 'output_format', label: 'Output Format', type: 'select', default: 'Base64', options: ['UTF-8', 'Hex', 'Base64'] },
            { key: 'words', label: 'Number of DWords', type: 'number', default: 192 }
        ],
        category: 'Cryptography',
        icon: faLockOpen,
        execute: (input, options) => {
            const key = getParsedFormat('Key', options.key, options.key_format)
            const inputFormat = getFormat('Input', options.input_format)
            const outputFormat = getFormat('Output', options.output_format)
        
            const cipherText = inputFormat.parse(input)
            const decrypted = CryptoJS.RC4Drop.decrypt(cipherText.toString(CryptoJS.enc.Base64), key, { drop: options.words })
            return decrypted.toString(outputFormat)
        }
    },
    {
        id: 'rot13',
        name: 'ROT13',
        description: 'Encrypt/Decrypt text using ROT13 cipher',
        category: 'Cryptography',
        icon: faLock,
        options: [
            { key: 'amount', label: 'Amount', type: 'number', default: 13 },
            { key: 'rotate_uppercase', label: 'Rotate Uppercase', type: 'checkbox', default: true },
            { key: 'rotate_lowercase', label: 'Rotate Lowercase', type: 'checkbox', default: true },
            { key: 'rotate_digits', label: 'Rotate Digits', type: 'checkbox', default: false }
        ],
        execute: (input, options) => {
            const amount = options.amount % 26
            const rotateUppercase = options.rotate_uppercase
            const rotateLowercase = options.rotate_lowercase
            const rotateDigits = options.rotate_digits

            const result = input.split('').map(char => {
                const code = char.charCodeAt(0)
                if(rotateUppercase && code >= 65 && code <= 90) return String.fromCharCode(((code - 65 + amount) % 26) + 65)
                if(rotateLowercase && code >= 97 && code <= 122) return String.fromCharCode(((code - 97 + amount) % 26) + 97)
                if(rotateDigits && code >= 48 && code <= 57) return String.fromCharCode(((code - 48 + amount) % 10) + 48)
                return char
            }).join('')
            return result
        }
    },
    {
        id: 'rot47',
        name: 'ROT47',
        description: 'Encrypt/Decrypt text using ROT47 cipher',
        category: 'Cryptography',
        icon: faLock,
        options: [
            { key: 'amount', label: 'Amount', type: 'number', default: 47 }
        ],
        execute: (input, options) => {
            const amount = options.amount % 94
            const result = input.split('').map(char => {
                const code = char.charCodeAt(0)
                if(code >= 33 && code <= 126) return String.fromCharCode(((code - 33 + amount) % 94) + 33)
                return char
            }).join('')
            return result
        }
    },
    {
        id: 'xor',
        name: 'XOR',
        description: 'Encrypt/Decrypt text using XOR cipher',
        category: 'Cryptography',
        icon: faLock,
        options: [
            { key: 'key', label: 'Key', type: 'text', default: '' },
            { key: 'key_format', label: 'Key Format', type: 'select', default: 'UTF-8', options: ['UTF-8', 'Hex', 'Base64'] },
            { key: 'input_format', label: 'Input Format', type: 'select', default: 'UTF-8', options: ['UTF-8', 'Hex', 'Base64'] },
            { key: 'output_format', label: 'Output Format', type: 'select', default: 'UTF-8', options: ['UTF-8', 'Hex', 'Base64'] }
        ],
        execute: (input, options) => {
            const key = getParsedFormat('Key', options.key, options.key_format)
            const inputFormat = getFormat('Input', options.input_format)
            const outputFormat = getFormat('Output', options.output_format)
        
            const data = inputFormat.parse(input)

            const dataWords = [...data.words]
            const keyWords = key.words
            const dataBytes = data.sigBytes
            const keyBytes = key.sigBytes

            for(let i = 0; i < dataBytes; i++) {
                const dataWordIndex = i >>> 2
                const dataByteOffset = 24 - ((i % 4) * 8)
                const keyByteIndex = i % keyBytes
                const keyWordOffset = keyByteIndex >>> 2
                const keyByteOffset = 24 - ((keyByteIndex % 4) * 8)

                const dataByte = (dataWords[dataWordIndex] >>> dataByteOffset) & 0xff
                const keyByte = (keyWords[keyWordOffset] >>> keyByteOffset) & 0xff
                dataWords[dataWordIndex] = (dataWords[dataWordIndex] & ~(0xff << dataByteOffset)) | ((dataByte ^ keyByte) << dataByteOffset)
            }
            const output = CryptoJS.lib.WordArray.create(dataWords, data.sigBytes)
            return output.toString(outputFormat)
        }
    },
    {
        id: 'vigenère',
        name: 'Vigenère Cipher',
        description: 'Encrypt/Decrypt text using Vigenère cipher',
        category: 'Cryptography',
        icon: faLock,
        options: [
            { key: 'key', label: 'Key', type: 'text', default: '' },
            { key: 'mode', label: 'Mode', type: 'select', default: 'Encrypt', options: ['Encrypt', 'Decrypt'] }
        ],
        execute: (input, options) => {
            const key = options.key
            const decrypt = options.mode === 'Decrypt'

            const result = input.split('').map((char, index) => {
                const keyChar = key[index % key.length]
                const charCode = char.charCodeAt(0)
                const keyCode = keyChar.charCodeAt(0)

                if(charCode >= 65 && charCode <= 90) {
                    const base = 65
                    const offset = decrypt ? (charCode - base - (keyCode - base) + 26) % 26 : (charCode - base + (keyCode - base)) % 26
                    return String.fromCharCode(base + offset)
                }
                if(charCode >= 97 && charCode <= 122) {
                    const base = 97
                    const offset = decrypt ? (charCode - base - (keyCode - base) + 26) % 26 : (charCode - base + (keyCode - base)) % 26
                    return String.fromCharCode(base + offset)
                }
                return char
            }).join('')
            return result
        }
    },
    {
        id: 'atbash',
        name: 'Atbash Cipher',
        description: 'Encrypt/Decrypt text using Atbash cipher',
        category: 'Cryptography',
        icon: faLock,
        execute: input => {
            const result = input.split('').map(char => {
                const charCode = char.charCodeAt(0)
                if(charCode >= 65 && charCode <= 90) return String.fromCharCode(65 + (90 - charCode))
                if(charCode >= 97 && charCode <= 122) return String.fromCharCode(97 + (122 - charCode))
                return char
            }).join('')
            return result
        }
    },
    {
        id: 'affine',
        name: 'Affine Cipher',
        description: 'Encrypt/Decrypt text using Affine cipher',
        category: 'Cryptography',
        icon: faLock,
        options: [
            { key: 'a', label: 'Multiplier (a)', type: 'number', default: 5 },
            { key: 'b', label: 'Shift (b)', type: 'number', default: 8 },
            { key: 'mode', label: 'Mode', type: 'select', default: 'Encrypt', options: ['Encrypt', 'Decrypt'] }
        ],
        execute: (input, options) => {
            const a = options.a
            const b = options.b
            const decrypt = options.mode === 'Decrypt'

            function modInverse(a: number, m: number): number {
                a = a % m
                for(let x = 1; x < m; x++)
                    if((a * x) % m === 1) return x

                throw new Error('No modular inverse exists')
            }

            const a_inv = decrypt ? modInverse(a, 26) : null
            const result = input.split('').map(char => {
                const charCode = char.charCodeAt(0)
                if(charCode >= 65 && charCode <= 90) {
                    const base = 65
                    const offset = decrypt ? (a_inv! * (charCode - base - b + 26)) % 26 : (a * (charCode - base) + b) % 26
                    return String.fromCharCode(base + offset)
                }
                if(charCode >= 97 && charCode <= 122) {
                    const base = 97
                    const offset = decrypt ? (a_inv! * (charCode - base - b + 26)) % 26 : (a * (charCode - base) + b) % 26
                    return String.fromCharCode(base + offset)
                }
                return char
            }).join('')
            return result
        }
    },
    {
        id: 'a1z26',
        name: 'A1Z26 Cipher',
        description: 'Encrypt/Decrypt text using A1Z26 cipher',
        category: 'Cryptography',
        icon: faLock,
        options: [
            { key: 'mode', label: 'Mode', type: 'select', default: 'Encrypt', options: ['Encrypt', 'Decrypt'] }
        ],
        execute: (input, options) => {
            const decrypt = options.mode === 'Decrypt'
            if(decrypt) {
                const result = input.split(' ').map(num => {
                    const n = parseInt(num, 10)
                    if(n >= 1 && n <= 26) return String.fromCharCode(96 + n)
                    return num
                }).join('')
                return result
            } else {
                const result = input.split('').map(char => {
                    const charCode = char.charCodeAt(0)
                    if(charCode >= 97 && charCode <= 122) return (charCode - 96).toString()
                    if(charCode >= 65 && charCode <= 90) return (charCode - 64).toString()
                    return char
                }).join(' ')
                return result
            }
        }
    },
    {
        id: 'rail-fence',
        name: 'Rail Fence Cipher',
        description: 'Encrypt/Decrypt text using Rail Fence cipher',
        category: 'Cryptography',
        icon: faLock,
        options: [
            { key: 'key', label: 'Key', type: 'number', default: 3 },
            { key: 'offset', label: 'Offset', type: 'number', default: 0 },
            { key: 'mode', label: 'Mode', type: 'select', default: 'Encrypt', options: ['Encrypt', 'Decrypt'] }
        ],
        execute: (input, options) => {
            const rails = options.key
            const offset = options.offset
            const decrypt = options.mode === 'Decrypt'
            
            if(rails < 2) throw new Error('Key must be at least 2')
            const cycle = 2 * (rails - 1)

            const railAt = (index: number) => {
                const posInCycle = (index + offset) % cycle
                return posInCycle < rails ? posInCycle : cycle - posInCycle
            }

            if(!decrypt) {
                const fence: string[] = Array.from({ length: rails }, () => '')
                for(let i = 0; i < input.length; i++) fence[railAt(i)] += input[i]
                return fence.join('')
            }

            const counts = Array(rails).fill(0)
            for(let i = 0; i < input.length; i++) counts[railAt(i)]++
            const railsData: string[] = []
            let index = 0
            for(const count of counts) {
                railsData.push(input.slice(index, index + count))
                index += count
            }
            const positions = Array(rails).fill(0)
            let result = ''
            for(let i = 0; i < input.length; i++) {
                const rail = railAt(i)
                result += railsData[rail][positions[rail]++]
            }
            return result
        }
    }
] as const

function getParsedFormat(type: 'Key' | 'IV', text: string, format: string) {
    switch(format) {
        case 'UTF-8': return CryptoJS.enc.Utf8.parse(text)
        case 'Hex': return CryptoJS.enc.Hex.parse(text)
        case 'Base64': return CryptoJS.enc.Base64.parse(text)
        default: throw new Error(`Invalid ${type} format`)
    }
}

function getFormat(type: 'Input' | 'Output', format: string) {
    switch(format) {
        case 'UTF-8': return CryptoJS.enc.Utf8
        case 'Hex': return CryptoJS.enc.Hex
        case 'Base64': return CryptoJS.enc.Base64
        default: throw new Error(`Invalid ${type} format`)
    }
}

function getMode(mode: string) {
    switch(mode) {
        case 'CBC': return CryptoJS.mode.CBC
        case 'CFB': return CryptoJS.mode.CFB
        case 'CTR': return CryptoJS.mode.CTR
        case 'OFB': return CryptoJS.mode.OFB
        default: throw new Error('Invalid mode')
    }
}

function getPadding(padding: string) {
    switch(padding) {
        case 'Pkcs7': return CryptoJS.pad.Pkcs7
        case 'AnsiX923': return CryptoJS.pad.AnsiX923
        case 'Iso10126': return CryptoJS.pad.Iso10126
        case 'ZeroPadding': return CryptoJS.pad.ZeroPadding
        case 'NoPadding': return CryptoJS.pad.NoPadding
        default: throw new Error('Invalid padding')
    }   
}
