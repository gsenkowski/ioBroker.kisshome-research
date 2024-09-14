// @ts-expect-error no types
import { get_gateway_ip } from 'network';
import { toMAC } from '@network-utils/arp-lookup';
import { toVendor } from '@network-utils/vendor-lookup';
import crypto from 'node:crypto';

export async function getMacForIp(ip: string): Promise<{ mac: string; vendor?: string; ip: string } | null> {
    const mac = await toMAC(ip);
    if (mac) {
        return { mac: mac.toUpperCase(), vendor: toVendor(mac), ip };
    }
    return null;
}

export function validateIpAddress(ip: string): boolean {
    if (!ip) {
        return true;
    }
    if (typeof ip !== 'string') {
        return false;
    }
    ip = ip.trim();
    if (!ip) {
        return true;
    }
    if (!ip.match(/^\d+\.\d+\.\d+\.\d+$/)) {
        return false;
    }
    const parts = ip
        .trim()
        .split('.')
        .map(part => parseInt(part, 10));
    return !parts.find(part => part < 0 || part > 0xff);
}

export function getVendorForMac(mac: string): string {
    return toVendor(mac);
}

export function getDefaultGateway(): Promise<string> {
    return new Promise((resolve, reject) =>
        get_gateway_ip((err: string, ip: string) => {
            if (err) {
                return reject(new Error(err));
            }
            return resolve(ip);
        }),
    );
}

export function generateKeys(): { publicKey: string; privateKey: string } {
    // const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    //     modulusLength: 4096, // bits - standard for RSA keys
    //     publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
    //     privateKeyEncoding: { type: 'pkcs1', format: 'pem' },
    // });
    // const sshKeyBodyPublic = publicKey.toString();

    const result = crypto.generateKeyPairSync('ed25519', {
        modulusLength: 2048,
        publicKeyEncoding: { type: 'spki', format: 'pem' },
        privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
    });
    const privateKey = result.privateKey as unknown as string;
    const publicKey = result.publicKey as unknown as string;

    const sshKeyBodyPublic = publicKey.toString().split('\n').slice(1, -2).join('');

    return { publicKey: sshKeyBodyPublic, privateKey: privateKey.toString() };
}
